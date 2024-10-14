
import {query} from '../utils/database.js'

const getAllGeneralLedger = async (req, res) => {
    try {
        const getGlLedgerQuery = `CALL GetAllGeneralLedger()`;

        
        const generalLedger = await query(getGlLedgerQuery);


        return res.status(201).json({ message: 'General Ledgers retrieved successfully', Gl:generalLedger });
    }
     catch (error) {
        console.error('Error retrieving general ledger:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the general ledger.' });
    }
}



const AddLedger = async (req, res) => {
    try {
        const { firmId, ledgerName, glId, openingBalance, cashORonline } = req.body;
        const { userId } = req.params;

        const sql = `CALL AddLedger(?, ?, ?, ?, ?, ?)`;

       
        const results = await query(sql, [firmId, ledgerName, glId, openingBalance, cashORonline, userId]);

        return res.status(201).json({ message: 'Ledger added successfully.' });
    } catch (error) {
      
        console.error('Error adding ledger:', error);
        return res.status(400).json({ message: error.sqlMessage || 'An error occurred while adding the ledger.' });
    }
};




const GetAllLedgers = async (req, res) => {
    try {
        const { userId } = req.params; 


        const sql = `CALL GetAllLedgersFromUserId(?)`;
        const results = await query(sql, [userId]);

        if (results[0].length === 0) {
            return res.status(404).json({ message: 'No ledgers found for the specified user.' });
        }

        return res.status(200).json(results[0]);
    } catch (error) {
        console.error('Error retrieving ledgers:', error);
        return res.status(400).json({ message: error.sqlMessage || 'An error occurred while retrieving ledgers.' });
    }
};



const getLedgersByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

    
        const ledgerQuery = 'CALL GetLedgersForUsers(?)';
        const result = await query(ledgerQuery, [userId]);

        if (result[0].length === 0) {
            return res.status(404).json({ message: 'No ledgers found for this user' });
        }

        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching ledgers:', error);
        return res.status(500).json({ message: 'An error occurred while fetching ledgers.' });
    }
};


const EditLedger = async (req, res) => {
    try {
        const {  Ledger_Name } = req.body;  
        const { userId,Ledger_Id } = req.params; 

         if(!Ledger_Id|| !Ledger_Name){
  
        return res.status(400).json({ message: 'Please Provide Ledger ID and Ledger Name' });
         }
        const sql = `CALL EditLedger(?, ?, ?)`;
        await query(sql, [Ledger_Id, Ledger_Name, userId]);

        return res.status(200).json({ message: 'Ledger updated successfully.' });
    } catch (error) {
        console.error('Error updating ledger:', error);
        return res.status(400).json({ message: error.sqlMessage || 'An error occurred while updating the ledger.' });
    }
};

const DeleteLedger = async (req, res) => {
    try {
        const { userId,Ledger_Id } = req.params;  
       
        const sql = `CALL DeactiveLedger(?, ?)`;
      const rows=  await query(sql, [Ledger_Id, userId]);

        const result = rows[0]?.[0]?.message;

console.log(result)

        if (result) {
            return res.status(200).json({ message: result });
        } else {
            return res.status(404).json({ message: 'Ledger not found or already inactive.' });
        }
    } catch (error) {
        console.error('Error deleting ledger:', error);
        return res.status(400).json({ message: error.sqlMessage || 'An error occurred while deleting the ledger.' });
    }
};



















export{getAllGeneralLedger,AddLedger,GetAllLedgers,EditLedger,DeleteLedger,getLedgersByUserId}