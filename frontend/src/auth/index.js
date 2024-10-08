// import axios from 'axios';
// import { apiUrl } from 'api/apiUrl';

// const http = axios.create({
//   baseURL: `${apiUrl}`,
// });

// class Auth {
//   static isAuthenticated() {
//     const token = localStorage.getItem('token');
//     return token !== null;
//   }

//   static getUserRole() {
//     return localStorage.getItem('roleId');
//   }

//   static getUserId() {
//     return localStorage.getItem('userId');
//   }

//   static login(token, roleId, userId = {}) {
//     console.log('toauth',token, roleId, userId)
//     localStorage.setItem('token', token);
//     localStorage.setItem('roleId', roleId);
//     localStorage.setItem('userId', userId);
//   }

//   static logout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('roleId');
//     localStorage.removeItem('userId');
//     console.log('before',localStorage.getItem('userId'), localStorage.getItem('roleId'))
//   }
// }

// export { Auth, http };



// auth.js

import axios from 'axios';
import { apiUrl } from 'api/apiUrl';

const http = axios.create({
  baseURL: `${apiUrl}`,
});

class Auth {
  static isAuthenticated() {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  static getUserRole() {
    return localStorage.getItem('roleId');
  }

  static getUserId() {
    return localStorage.getItem('userId');
  }

  static login(token, roleId, userId = {}) {
    console.log('toauth', token, roleId, userId);
    localStorage.setItem('token', token);
    localStorage.setItem('roleId', roleId);
    localStorage.setItem('userId', userId);
    
    // Log user ID and role ID immediately after login
    console.log('User ID after login:', userId);
    console.log('Role ID after login:', roleId);
  }

  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
    localStorage.removeItem('userId');
    console.log('Logged out. User ID:', localStorage.getItem('userId'), 'Role ID:', localStorage.getItem('roleId'));
  }
}

export { Auth, http };
