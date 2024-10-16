import {query }from '../utils/database.js'; 



const GetCompleteReport = async (req, res) => {
    try {
      
        const { userId } = req.params;

        if (!userId ) {
            return res.status(400).json({ message: 'Missing required parameters.' });
        }

        const sql = `CALL GetCompleteReportbyUserId(?)`;
    
        const result = await query(sql, [userId]);

        console.log('r',result)

        if (result[0].length === 0) {
            return res.status(404).json({ message: 'No transactions found for this user' });
        }

        return res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error retrieving transactions:', error);

        return res.status(500).json({ message: error.sqlMessage || 'An error occurred while retrieving transactions.' });
    }
};


// const GetCompleteReport = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         if (!userId) {
//             return res.status(400).json({ message: 'Missing required parameters.' });
//         }

//         const sql = `CALL GetCompleteReportbyUserId(?)`;
//         const result = await query(sql, [userId]);

//         if (result[0].length === 0) {
//             return res.status(404).json({ message: 'No transactions found for this user' });
//         }

//         // Format the transactionDate to `YYYY-MM-DD`
//         const formattedResult = result[0].map(transaction => ({
//             ...transaction,
//             transactionDate: format(new Date(transaction.transactionDate), 'yyyy-MM-dd')
//         }));

//         return res.status(200).json(formattedResult);
//     } catch (error) {
//         console.error('Error retrieving transactions:', error);
//         return res.status(500).json({ message: error.sqlMessage || 'An error occurred while retrieving transactions.' });
//     }
// };










const getWeeklyAndDailyTransForAdmin = async (req, res) => {
    try {
        const {userId} = req.params; 


        const getTransactionQuery = `CALL GetWeeklyAndDailyTransactionsForAdminn(?)`;

     
        const Transactions = await query(getTransactionQuery, [userId]);
 
        if (!Transactions || Transactions.length === 0) {
            return res.status(404).json({ message: 'No Transactions found for this user.' });
        }


        res.status(200).json({
            message: 'Transactions retrieved successfully.',
            Transactions: Transactions
        });
    } catch (error) {
        console.error('Error retrieving Transactions:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the Transactions.' });
    }
};


const getWeeklyAndDailyTransForUser = async (req, res) => {
    try {
        const {userId} = req.params; 


        const getTransactionQuery = `CALL GetWeeklyAndDailyTransactionsForUser(?)`;

     
        const Transactions = await query(getTransactionQuery, [userId]);
 
        if (!Transactions || Transactions.length === 0) {
            return res.status(404).json({ message: 'No Transactions found for this user.' });
        }


        res.status(200).json({
            message: 'Transactions retrieved successfully.',
            Transactions: Transactions
        });
    } catch (error) {
        console.error('Error retrieving Transactions:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the Transactions.' });
    }
};


const getFirmWiseTransactionsForAdmin  = async (req, res) => {
    const {userId} = req.params 
    try {
        const results = await query('CALL GetFirmsPaymentsReceiptsBalanceForAdmin(?)', [userId]);

        if (results[0].length === 0) {
            return res.status(404).json({ message: 'No transactions found for this user' });
        }

        return res.status(200).json({
            status: true,
            firms: results
        });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


const getFirmWiseTransactionsForUser  = async (req, res) => {
    const {userId} = req.params
    try {
        const results = await query('CALL GetFirmsPaymentsReceiptsBalanceForUser(?)', [userId]);

        if (results[0].length === 0) {
            return res.status(404).json({ message: 'No transactions found for this user' });
        }

        return res.status(200).json({
            status: true,
            firms: results
        });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



export{GetCompleteReport,getWeeklyAndDailyTransForAdmin,getWeeklyAndDailyTransForUser,getFirmWiseTransactionsForAdmin,getFirmWiseTransactionsForUser}