
import {query} from '../utils/database.js'


const GetAllLedgersByUserId = async (req, res) => {
    try {
   
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: 'Missing userId.' });
        }

        const sql = `CALL GetAllLedgersByUserId(?)`;

        const results = await query(sql, [userId]);
  
        if (results[0].length === 0) {
            return res.status(404).json({ message: 'No ledgers found for this user.' });
        }

        return res.status(200).json({ ledgers: results[0] });

    } catch (error) {
        console.error('Error fetching ledgers:', error);
        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while fetching the ledgers.' });
    }
};

const Transactions = async (req, res) => {
    try {
        const {  date,  amount_type,  transaction_type,  amount,  remark,  from_ledger_id,  to_ledger_id,  from_firm_id,  to_firm_id,  bank_name,  cheque_no  } = req.body;
        
        const { userId } = req.params;

        console.log(date)


        if ( !date || !amount_type || !transaction_type || !amount || !remark || !from_ledger_id || !to_ledger_id || !userId || !from_firm_id || !to_firm_id ) 
            {
            return res.status(400).json({ message: 'Missing required fields.' });
        }

  
        const sql = `CALL Transactions(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        await query(sql, [ date, amount_type, transaction_type, amount, remark, userId, from_ledger_id, to_ledger_id, from_firm_id, to_firm_id, bank_name, cheque_no ]);

        return res.status(201).json({ message: 'Voucher and transactions added successfully.' });
    } catch (error) {
        console.error('Error adding voucher and transactions:', error);

        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while adding the voucher and transactions.' });
    }
};


const GetTransactionsFromFirmID = async (req, res) => {
    try {
      
        const { firm_id, transaction_type } = req.params;

        if (!firm_id || !transaction_type) {
            return res.status(400).json({ message: 'Missing required parameters.' });
        }

        const sql = `CALL GetTransactionsFromFirmID(?, ?)`;
    
        const result = await query(sql, [firm_id, transaction_type]);

        if (result[0].length === 0) {
            return res.status(404).json({ message: 'No transactions found for this firm' });
        }

        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error retrieving transactions:', error);

        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while retrieving transactions.' });
    }
};



export{GetAllLedgersByUserId,Transactions,GetTransactionsFromFirmID}