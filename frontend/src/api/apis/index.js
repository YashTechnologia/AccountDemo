// api.js

import axios from "axios";
import { apiUrl } from "api/apiUrl";

// // Helper function to fetch user ID from cache
// const getUserIdFromCache = async () => {
//     const cache = await caches.open('authCache');
//     const cachedResponse = await cache.match('authData');
//     if (cachedResponse) {
//         const data = await cachedResponse.json();
//         return data.userId;
//     }
//     return null; // Return null if not found in cache
// };

// const userId = await getUserIdFromCache(); // Fetch user ID from cache

// Register
export const Register = async (name, email, password) => {
    console.log('Registering with:', name, email, password);
    try {
        const response = await axios.post(`${apiUrl}/register`, {
            name,
            email,
            Password: password,
        });
        return response.data; 
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};

// Firm
export const CreateFirm = async (firmData) => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.post(`${apiUrl}/addFirm/${userId}`, firmData);
        console.log('Firm creation response:', response);
        return response.data.message;
    } catch (error) {
        console.error('Error creating firm:', error);
        throw error;
    }
};

export const getFirm = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_All_Firm/${userId}`);
        console.log('Fetched firms:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching firm:', error);
        throw error;
    }
};

export const EditFirm = async (firmId, firmData) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('data', firmData);
        const response = await axios.put(`${apiUrl}/Edit_Firm/${userId}/${firmId}`, firmData);
        console.log('Firm edit response:', response);
        return response.data; 
    } catch (error) {
        console.error('Error editing firm:', error);
        throw error;
    }
};

export const DeleteFirm = async (firmId) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('firmId:', firmId);
        const response = await axios.delete(`${apiUrl}/Delete_Firm/${userId}/${firmId}`);
        console.log('Firm delete response:', response);
        return response.data;
    } catch (error) {
        console.error('Error deleting firm:', error);
        throw error;
    }
};

// General Ledger
export const getGL = async () => {
    try {
        const response = await axios.get(`${apiUrl}/Get_All_Gl_Ledger`);
        console.log('Fetched gerenal ledgers:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching general ledgers:', error);
        throw error;
    }
};

// Ledger
export const CreateLedger = async (ledgerData) => {
    const userId = localStorage.getItem('userId'); 
    console.log('data',ledgerData)
    try {
        const response = await axios.post(`${apiUrl}/AddLedger/${userId}`, ledgerData);
        console.log('Ledger creation response:', response);
        return response.data.message;
    } catch (error) {
        console.error('Error creating Ledger:', error.response.data.message);
        throw error;
    }
};

export const getLedger = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_All_Ledger/${userId}`);
        console.log('Fetched ledgers:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching ledgers:', error);
        throw error;
    }
};

export const EditLedger = async (ledgerId, ledgerData) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('data', ledgerData);
        const response = await axios.put(`${apiUrl}/Edit_Ledger/${userId}/${ledgerId}`, ledgerData);
        console.log('Ledger edit response:', response);
        return response.data; 
    } catch (error) {
        console.error('Error editing ledger:', error);
        throw error;
    }
};

export const DeleteLedger = async (ledgerId) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('LedgerId:', ledgerId);
        const response = await axios.delete(`${apiUrl}/Delete_Ledger/${userId}/${ledgerId}`);
        console.log('Ledger delete response:', response);
        return response.data;
    } catch (error) {
        console.error('Error deleting ledger:', error);
        throw error;
    }
};

// User
export const AddUser = async (data) => {
    const userId = localStorage.getItem('userId');
    console.log('Add User:', data);
    try {
        const response = await axios.post(`${apiUrl}/AddUserWithFirm/${userId}`, data);
        return response.data; 
    } catch (error) {
        console.error('Error Adding User:', error);
        throw error;
    }
};

export const getUser = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_All_Users_With_Firms/${userId}`);
        console.log('Fetched users:', response.data);
        return response.data[0]; 
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const EditUser = async (id, firmId, data) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('ids', userId,  id, firmId);
        console.log('data', data);
        const response = await axios.put(`${apiUrl}/Edit_User_With_Firm/${userId}/${id}/${firmId}`, data);
        console.log('User edit response:', response);
        return response.data; 
    } catch (error) {
        console.error('Error editing User:', error);
        throw error;
    }
};

export const DeleteUser = async (id) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('Id:', id);
        const response = await axios.delete(`${apiUrl}/Delete_User/${userId}/${id}`);
        console.log('id delete response:', response);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

// Payment

export const getLedgerForTransaction = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_All_ledgers_For_Transaction/${userId}`);
        console.log('Fetched ledgers for payment:', response.data.ledgers);
        return response.data.ledgers; 
    } catch (error) {
        console.error('Error fetching ledgers for payment:', error);
        throw error;
    }
};

export const getUserLedger = async () => {
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_Ledgers_For_Users/${userId}`);
        console.log('Fetched user ledgers:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching user ledgers:', error);
        throw error;
    }
};

export const makePayment = async (data) => {
    const userId = localStorage.getItem('userId');
    console.log('Make Payment:', data);
    try {
        const response = await axios.post(`${apiUrl}/Transactions/${userId}`, data);
        return response.data; 
    } catch (error) {
        console.error('Error making payment:', error);
        throw error;
    }
};

export const getTransactions = async (firmId, transaction_type) => {
    console.log('api', firmId, transaction_type)
    const userId = localStorage.getItem('userId'); 
    try {
        const response = await axios.get(`${apiUrl}/Get_Transactions_From_Firm/${firmId}/${transaction_type}`);
        console.log('Fetched transactions for payment:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching transactions for payment:', error);
        throw error;
    }
};

export const getCompleteReport = async () => {
    const userId = localStorage.getItem('userId');
    console.log('user', userId) 
    try {
        const response = await axios.get(`${apiUrl}/Get_Complete_Report/${userId}`);
        console.log('Fetched complete report:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error fetching complete report:', error);
        throw error;
    }
};


export const getProfileDetails = async () => {
    const userId = localStorage.getItem('userId');
    console.log('user', userId) 
    try {
        const response = await axios.get(`${apiUrl}/Get_User_Info/${userId}`);
        console.log('Fetched profile:', response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

export const EditProfile = async (data) => {
    const userId = localStorage.getItem('userId');
    try {
        console.log('data', data);
        const response = await axios.put(`${apiUrl}/Edit_User/${userId}`, data);
        console.log('User edit response:', response);
        return response.data; 
    } catch (error) {
        console.error('Error editing User:', error);
        throw error;
    }
};

// Dashboard

export const getWeeklyTransactionAdmin = async () => {
    const userId = localStorage.getItem('userId');
    try {
        const response = await axios.get(`${apiUrl}/Get_WeeklyDaily_Trans_For_Admin/${userId}`);
        console.log('Fetched weekly transactions:', response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching weekly transactions:', error);
        throw error;
    }
};

export const getWeeklyTransactionUser = async () => {
    const userId = localStorage.getItem('userId');
    try {
        const response = await axios.get(`${apiUrl}/Get_WeeklyDaily_Trans_For_User/${userId}`);
        console.log('Fetched weekly transactions:', response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching weekly transactions:', error);
        throw error;
    }
};

export const getAllFirmTransactionAdmin = async () => {
    const userId = localStorage.getItem('userId');
    try {
        const response = await axios.get(`${apiUrl}/Get_FirmWise_Trans_For_Admin/${userId}`);
        console.log('Fetched transactions:', response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};

export const getAllFirmTransactionUser = async () => {
    const userId = localStorage.getItem('userId');
    try {
        const response = await axios.get(`${apiUrl}/Get_FirmWise_Trans_For_User/${userId}`);
        console.log('Fetched transactions:', response);
        return response.data; 
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
    }
};