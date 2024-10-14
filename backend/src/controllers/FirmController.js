import {query }from '../utils/database.js'; 






const addFirm= async (req, res) => {

    const{userId}=req.params

    const { firmName, firmEmail, firmGSTNO, firmAddress } = req.body;


    if (!firmName || !firmEmail || !firmGSTNO || !firmAddress || !userId) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
  
        const rows = await query('CALL Addfirm(?, ?, ?, ?, ?)', [
            firmName,
            firmEmail,
                firmGSTNO,
                firmAddress ,
            userId
        ]);

       const firmId = rows[0]?.[0]?.firmId;
   
        if (firmId) {
            return res.status(201).json({
                message: 'Firm added successfully',
                firmId: firmId
            });
        }

        return res.status(500).json({ message: 'An error occurred while adding the firm' });
    } catch (error) {
        if (error.code === 'ER_SIGNAL_EXCEPTION') {
            
            return res.status(400).json({ message: error.sqlMessage });
        }

        console.error('Error adding firm:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};





const getAllFirm = async (req, res) => {
    try {
        const {userId} = req.params; 

        const getFirmsQuery = `CALL GetAllFirmsByUserId(?)`;

        const firms = await query(getFirmsQuery, [userId]);
  
        if (!firms || firms.length === 0) {
            return res.status(404).json({ message: 'No firms found for this user.' });
        }

        res.status(200).json({
            message: 'Firms retrieved successfully.',
            firms: firms
        });
    } catch (error) {
        console.error('Error retrieving firms:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the firms.' });
    }
};

const editFirm = async (req, res) => {
    try {
        const { firm_id, userId } = req.params;
        const { firmName, firmEmail, firmGSTNO, firmAddress } = req.body;


        if (!userId) {
            return res.status(400).json({ message: 'Please Provide userId.' });
        }

        if (!firm_id || !firmName || !firmEmail || !firmGSTNO || !firmAddress) {
            return res.status(400).json({ message: 'Please Provide All Fields.' });
        }

        const editFirmSP = `CALL EditFirm(?, ?, ?, ?, ?, ?)`;
        const [rows] = await query(editFirmSP, [firm_id, firmName, firmEmail, firmGSTNO, firmAddress, userId]);

    
        console.log('Stored Procedure Result:', rows);

   
        const result = rows[0]?.message;

        console.log('Extracted Message:', result); 

        if (result === 'Firm updated successfully.') {
            return res.status(200).json({ message: result });
        } else {
            return res.status(500).json({ message: 'An error occurred while updating the firm.' });
        }
    } catch (error) {
        console.error('Error updating firm:', error);
        return res.status(500).json({ message: 'An error occurred while updating the firm.' });
    }
};


const deleteFirm = async (req, res) => {
    try {
        const { userId, firm_id } = req.params;

        if (!userId || !firm_id) {
            return res.status(400).json({ message: 'Firm ID and userId are required.' });
        }


        const deleteFirmSP = `CALL DeactivateFirm(?, ?)`;
        const rows = await query(deleteFirmSP, [firm_id, userId]);

console.log(rows)


        const result = rows[0]?.[0]?.message;
        if (result === 'Firm deactivated successfully.') {
            return res.status(200).json({ message: result });
        } else {
            return res.status(404).json({ message: 'Firm not found or already inactive.' });
        }
    } catch (error) {
        console.error('Error deactivating firm:', error);
        res.status(500).json({ message: 'An error occurred while deactivating the firm.' });
    }
};

export { addFirm,getAllFirm,editFirm,deleteFirm };
