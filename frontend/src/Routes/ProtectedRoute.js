// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   return userRole ? children : <Navigate to="/signin" />;
// };

// export default ProtectedRoute;


// import { Navigate } from "react-router-dom";
// import { Auth } from "auth";

// const ProtectedRoute = ({ children }) => {
//   return Auth.getUserRole() ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { Auth } from "auth";
import PropTypes from "prop-types";  // Import PropTypes

const ProtectedRoute = ({ children }) => {
  return Auth.getUserRole() ? children : <Navigate to="/login" />;
};

// Define PropTypes for validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;


// import { Navigate } from "react-router-dom"
// import { Auth } from "src/auth/AuthUser"

// export const AdminPrivateRoute = ({children}) => {
    
//    return (Auth.getUserRole() === 'SchoolAdmin') ? children : <Navigate to="/login" />
// }