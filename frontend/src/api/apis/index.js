// import axios from "axios";
// import { apiUrl } from "api/apiUrl";
// import { Auth } from "auth";

// export const userId = Auth.getUserId();
// export const roleId = Auth.getUserRole();

// console.log('User ID:', userId, 'Role ID:', roleId);

// export const Register = async (name, email, password) => {
//     console.log('Registering with:', name, email, password);
//     try {
//         const response = await axios.post(`${apiUrl}/register`, {
//             name,
//             email,
//             Password: password,
//         });
//         return response.data; 
//     } catch (error) {
//         console.error('Error registering:', error);
//         throw error;
//     }
// };

// export const CreateFirm = async (firmData) => {
//     try {
//         const response = await axios.post(`${apiUrl}/addFirm/${userId}`, firmData);
//         console.log('Firm creation response:', response);
//         return response.data.message;
//     } catch (error) {
//         console.error('Error creating firm:', error);
//         throw error;
//     }
// };

// export const getFirm = async () => {
//     try {
//         const response = await axios.get(`${apiUrl}/Get_All_Firm/${userId}`);
//         console.log('Fetched firms:', response.data); 
//         return response.data; 
//     } catch (error) {
//         console.error('Error fetching firm:', error);
//         throw error;
//     }
// };

// export const EditFirm = async (firmId, firmData) => {
//     try {
//         console.log('data',firmData)
//         const response = await axios.put(`${apiUrl}/Edit_Firm/${userId}/${firmId}`, firmData);
//         console.log('Firm edit response:', response);
//         return response.data; 
//     } catch (error) {
//         console.error('Error editing firm:', error);
//         throw error;
//     }
// };

// export const DeleteFirm = async (firmId) => {
//     try {
//         console.log('fir',firmId)
//         const response = await axios.delete(`${apiUrl}/Delete_Firm/${userId}/${firmId}`);
//         console.log('Firm delete response:', response);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting firm:', error);
//         throw error;
//     }
// };

// api.js

import axios from "axios";
import { apiUrl } from "api/apiUrl";

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