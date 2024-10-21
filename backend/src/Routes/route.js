import express from 'express';
import { registerUser,loginUser,AddUserWithFirm,GetUsersWithFirms,UpdateUserAndFirm,DeactivateUser,getUserInfo,updateUserInfo } from '../controllers/userController.js'; // Correct import

import { addFirm,getAllFirm,editFirm,deleteFirm} from '../controllers/FirmController.js'; 

import{getAllGeneralLedger,AddLedger,GetAllLedgers,EditLedger,DeleteLedger,getLedgersByUserId} from '../controllers/LedgerController.js'

import{GetAllLedgersByUserId,Transactions,GetTransactionsFromFirmID} from '../controllers/TransactionController.js'

import{GetCompleteReport,getWeeklyAndDailyTransForAdmin,getWeeklyAndDailyTransForUser,getFirmWiseTransactionsForAdmin,getFirmWiseTransactionsForUser,GetCompleteReportForuser} from '../controllers/ReportController.js'

const router = express.Router();


router.post('/register', registerUser);
router.post('/Login', loginUser);

router.get('/Get_User_Info/:userId', getUserInfo);
router.put('/Edit_User/:userId', updateUserInfo);



router.post('/AddFirm/:userId', addFirm);

router.get('/Get_All_Firm/:userId', getAllFirm);

router.put('/Edit_Firm/:userId/:firm_id', editFirm);


router.delete('/Delete_Firm/:userId/:firm_id', deleteFirm);


router.get('/Get_All_Gl_Ledger', getAllGeneralLedger);

router.get('/Get_Ledgers_For_Users/:userId', getLedgersByUserId);



router.post('/AddLedger/:userId',AddLedger);

router.get('/Get_All_Ledger/:userId', GetAllLedgers);


router.put('/Edit_Ledger/:userId/:Ledger_Id', EditLedger);

router.delete('/Delete_Ledger/:userId/:Ledger_Id', DeleteLedger);


router.post('/AddUserWithFirm/:userId', AddUserWithFirm);

router.get('/Get_All_Users_With_Firms/:userId', GetUsersWithFirms);


router.put('/Edit_User_With_Firm/:adminId/:userId/:firmId', UpdateUserAndFirm);

router.delete('/Delete_User/:adminId/:userId', DeactivateUser);





router.get('/Get_All_ledgers_For_Transaction/:userId', GetAllLedgersByUserId);

router.post('/Transactions/:userId', Transactions);


router.get('/Get_Transactions_From_Firm/:firm_id/:transaction_type', GetTransactionsFromFirmID);



router.get('/Get_Complete_Report/:userId', GetCompleteReport);


router.get('/Get_Complete_Report_For_User/:userId', GetCompleteReportForuser);



router.get('/Get_WeeklyDaily_Trans_For_Admin/:userId', getWeeklyAndDailyTransForAdmin);

router.get('/Get_WeeklyDaily_Trans_For_User/:userId', getWeeklyAndDailyTransForUser);

router.get('/Get_FirmWise_Trans_For_Admin/:userId', getFirmWiseTransactionsForAdmin);


router.get('/Get_FirmWise_Trans_For_User/:userId', getFirmWiseTransactionsForUser);

export default router;






// import express from 'express';
// import { registerUser } from '../controllers/userController.js'; // Correct import

// // Initialize the router
// const router = express.Router();

// // Public routes
// router.post('/register', registerUser);

// // Export the router using ES module syntax
// export default router;
























// const firmController = require('../controllers/firmController');

// const geneLedgerController = require('../controllers/geneLedController');

// const firmGenLedPairController = require('../controllers/firmGenLedPairController');

// const paymentController = require('../controllers/paymentController');
// const receiptController = require('../controllers/receiptController');
// const firmAllTransactionsController = require('../controllers/firmAllTransactionsController');
// const dayBookController = require('../controllers/dayBookController');
// const ledgerReportController = require('../controllers/ledgerReportController');
// const cashReportController = require('../controllers/cashReportController');


// APIs for Users
// publicRoutes.post('/add_user', userController.addUserHandler);
// publicRoutes.get('/user_details/:user_id', userController.userDetailsHandler);
// publicRoutes.put('/update_user_details/:user_id', userController.updateUserDetailsHandler);
// publicRoutes.delete('/delete_user/:user_id', userController.deleteUserHandler);
// publicRoutes.post('/assign_firm_to_user', userController.assignFirmToUserHandler);
// publicRoutes.get('/show_firm_user/:uf_id', userController.firmUserHandler); //This is unnecessary API
// publicRoutes.put('/update_firm_user/:user_id', userController.updateFirmUserHandler);
// publicRoutes.delete('/delete_firm_user/:uf_id', userController.deleteFirmUserHandler);
// publicRoutes.get('/users_added_by_user/:user_id', userController.usersAddedByUserHandler);



// APIs for firms

// publicRoutes.post('/create_firm/:user_id', firmController.createFirmHandler);
// publicRoutes.get('/get_firm_details/:firm_id', firmController.getFirmHandler);
// publicRoutes.get('/get_all_firms', firmController.getAllFirmsHandler); // Useless
// publicRoutes.get('/get_all_firms_by_user/:user_id', firmController.getFirmsByUserHandler);
// publicRoutes.get('/get_all_firms_by_adding_user/:user_id', firmController.getFirmsByAddingUserHandler);
// publicRoutes.put('/update_firm_details/:firm_id', firmController.updateFirmHandler);
// publicRoutes.delete('/delete_firm/:firm_id', firmController.deleteFirmHandler);
// publicRoutes.get('/total_bal_of_all_firms/:user_id', firmController.getTotalBalanceByUserHandler);



// // APIs for firms_users
// publicRoutes.post('/assign_firm_to_user', userController.assign_firm_to_user);
// publicRoutes.get('/firm_user/:uf_id', userController.firm_user);
// publicRoutes.put('/update_firm_user/:uf_id', userController.update_firm_user);
// publicRoutes.delete('/delete_firm_user/:uf_id', userController.delete_firm_user);


// // APIs for General_Ledgers
// publicRoutes.post('/create_general_ledgers/:firm_id', geneLedgerController.createGeneralLedgerHandler); 
// publicRoutes.get('/get_general_ledgers/:firm_id', geneLedgerController.getGeneralLedgersHandler);
// publicRoutes.put('/update_general_ledgers/:firm_id/:gl_id', geneLedgerController.updateGeneralLedgerHandler);
// publicRoutes.delete('/delete_general_ledgers/:firm_id/:gl_id', geneLedgerController.deleteGeneralLedgerHandler);


// publicRoutes.get('/firm_ledger_pairs/:user_id', firmGenLedPairController.getFirmAndGeneralLedgerPairsHandler);
// publicRoutes.get('/firm_ledger_pairs_by_adding_user/:user_id', firmGenLedPairController.getFirmAndGeneralLedgerPairsByAddingUserHandler);
// publicRoutes.get('/cash_firm_ledger_pairs/:user_id', firmGenLedPairController.getFirmAndCash_GeneralLedgerPairsHandler);


// // APIs for Payment
// publicRoutes.post('/payment/:user_id', paymentController.createPaymentHandler );
// publicRoutes.get('/show_payment_transac/:from_firm_id', paymentController.getTransactionsByFirmIdHandler );
// publicRoutes.get('/show_payment_details/:transaction_id', paymentController.getPaymentHandler); //Useless
// publicRoutes.get('/firm_total_bal/:firm_id', paymentController.getTotalBalanceByFirmIdHandler);
// publicRoutes.get('/ledger_total_bal/:gl_id', paymentController.getTotalBalanceByGlIdHandler);



// // APIs for Receipt

// publicRoutes.post('/receipt/:user_id', receiptController.createReceipt);
// publicRoutes.get('/show_receipt_transactions/:to_firm_id', receiptController.getReceiptsByFirm);
// // publicRoutes.put('/update_sub_ledgers/:lgr_id', userController.update_sub_ledgers);
// // publicRoutes.delete('/delete_sub_ledgers/:lgr_id', userController.delete_sub_ledgers);
// publicRoutes.get('/show_firm_all_transactions/:firm_id/transactions', firmAllTransactionsController.getAllFirmTransactionsHandler);
// // publicRoutes.get('/show_day_book_transactions/:firm_id', dayBookController.dayBookHandler);
// publicRoutes.get('/show_day_book_transactions/:user_id', dayBookController.dayBookHandler);

// publicRoutes.get('/ledger_report/:firm_id/:gl_id', ledgerReportController.getLedgerReportHandler);

// // publicRoutes.get('/cash_report/:firm_id/:gl_id', cashReportController.getCashReportHandler);
// publicRoutes.get('/cash_report_by_user/:user_id', cashReportController.getCashReportHandler);

// publicRoutes.get('/show_total_payment_amt/:user_id', paymentController.getTotalPaymentAmtHandler);
// publicRoutes.get('/show_total_receipt_amt/:user_id', receiptController.getTotalReceiptAmtHandler);


// publicRoutes.post('/create_transactions', createTransaction);
// publicRoutes.get('/fetch_transactions/:firm_id', getTransactions);
// publicRoutes.put('/update_transactions/:transaction_id', updateTransaction);
// publicRoutes.delete('delete_/transactions/:transaction_id', deleteTransaction);


// Protected routes
// protectedRoutes.get('/', userController.getAllUsers);
// protectedRoutes.post('/create', userController.createUser);

