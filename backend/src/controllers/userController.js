// userController.js
import {query }from '../utils/database.js'; 

import jwt from 'jsonwebtoken';




const registerUser = async (req, res) => {
    try {
        const { email, name, Password } = req.body;

        if (!email || !name || !Password) {
            return res.status(400).send({ status: false, message: "Please provide email, name, and password (they are mandatory)" });
        }

        const registerUserSP = `CALL RegisterUser(?, ?, ?);`;
        const [results] = await query(registerUserSP, [email, name, Password]);


        console.log(results);

        if (!results || results.length === 0 || !results[0]) {
            return res.status(500).send({ status: false, message: 'No data returned from the stored procedure' });
        }

        const spResponse = results[0];  

        if (spResponse.status === 0) {
            return res.status(400).send({ status: false, message: spResponse.message });
        }

        return res.status(200).send({ status: true, userId: spResponse.userId, message: spResponse.message });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ status: false, message: err.message });
    }
};


  const loginUser = async (req, res) => {
    const { email, Password } = req.body; 
    try {
        const selectUserSP = 'CALL LoginUser(?)'; // Stored procedure to get user by email
        const results = await query(selectUserSP, [email]);

        const users = results[0]; // Stored procedure result is returned in an array
        
        if (!users || users.length === 0) {
            return res.status(401).json({ error: 'Invalid email/contact number or password' });
        }

        const user = users[0];

        if (user.user_password !== Password) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.user_id, roleId: user.user_role_id }, "tekhnologia", { expiresIn: '1h' });

        return res.status(200).send({ status: true, token: token, message: "User logged in successfully" });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

  const getUserInfo = async (req, res) => {
    try {
        const { userId } = req.params;  

        const userQuery = `CALL GetUserInfoById(?)`;

        const result = await query(userQuery, [userId]);


        if (result && result.length > 0) {
            res.status(200).json({
                message: 'User info retrieved successfully',
                user: result[0] 
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        console.error('Error retrieving user info:', error);
        res.status(500).json({
            message: 'An error occurred while retrieving user info'
        });
    }
};


const updateUserInfo = async (req, res) => {
    try {
        const { userId } = req.params;  
        const { userName, userEmail, userContact, userAddress } = req.body; 

        if (!userName || !userEmail || !userContact || !userAddress) {
            return res.status(400).json({
                message: 'Please provide all required fields (userName, userEmail, userContact, userAddress).'
            });
        }

        const updateQuery = `CALL UpdateUserInfoById(?, ?, ?, ?, ?)`;

        const result = await query(updateQuery, [userId, userName, userEmail, userContact, userAddress]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                message: 'User info updated successfully',
            });
        } else {
            res.status(404).json({
                message: 'User not found or no changes made'
            });
        }
    } catch (error) {
        console.error('Error updating user info:', error);
        res.status(500).json({
            message: 'An error occurred while updating user info'
        });
    }
};


  const AddUserWithFirm = async (req, res) => {
      try {
    
          const { name, email, password, contact, address, firmIds } = req.body;
  
          const { userId } = req.params; 
  
    
          if (!userId || !name || !email || !password || !contact || !address || !firmIds || firmIds.length === 0) {
              return res.status(400).json({ message: 'Missing required fields or empty firm IDs array.' });
          }
  
          const sql = `CALL AddUserWithFirm(?, ?, ?, ?, ?, ?, ?)`;
  
          await query(sql, [name, email, password, contact, address, JSON.stringify(firmIds), userId]);
  

          return res.status(201).json({ message: 'User and firms added successfully.' });
      } catch (error) {
          console.error('Error adding user and firms:', error);
  
          return res.status(500).json({ message: error.sqlMessage || 'An error occurred while adding the user and firms.' });
      }
  };
  

  const GetUsersWithFirms = async (req, res) => {
      try {
          const { userId } = req.params;

          if (!userId) {
              return res.status(400).json({ message: 'UserId is required.' });
          }
  
          const sql = `CALL GetUsersWithFirmsAndBalanceOfAllLedgers(?)`;
          const usersWithFirmsAndLedgers = await query(sql, [userId]);
  
    
          if (usersWithFirmsAndLedgers.length === 0) {
              return res.status(404).json({ message: 'No users found for the given userId.' });
          }
  
          return res.status(200).json(usersWithFirmsAndLedgers);
      } catch (error) {
          console.error('Error fetching users with firms and ledgers:', error);
          return res.status(500).json({ message: 'An error occurred while fetching data.' });
      }
  };
  

const UpdateUserAndFirm = async (req, res) => {
    try {
        const { adminId, userId, firmId } = req.params; 
        const { name, email, password, contact, address, newFirmId } = req.body; 

        if (!adminId || !userId || !firmId || !name || !email || !password || !contact || !address || !newFirmId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const sql = `CALL UpdateUserAndFirm(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await query(sql, [adminId, userId, firmId, name, email, password, contact, address, newFirmId]);

        return res.status(200).json({ message: 'User and firm information updated successfully.' });

    } catch (error) {
        console.error('Error updating user and firm:', error);
        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while updating the user and firm.' });
    }
};

const DeactivateUser = async (req, res) => {
    try {
        const { adminId,userId } = req.params; 

        if (!userId || !adminId) {
            return res.status(400).json({ message: 'Missing userId or adminId.' });
        }

        const sql = `CALL DeactivateUser(?, ?)`;

        const result = await query(sql, [userId, adminId]);

        return res.status(200).json({ message: result[0]?.message || 'User deactivated successfully.' });

    } catch (error) {
        console.error('Error deactivating user:', error);
        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while deactivating the user.' });
    }
};

export { registerUser,loginUser,AddUserWithFirm,GetUsersWithFirms,UpdateUserAndFirm,DeactivateUser,getUserInfo,updateUserInfo};




