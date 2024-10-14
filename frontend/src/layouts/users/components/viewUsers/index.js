// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import Table from "examples/Tables/Table";  // Assuming Table is a custom component for rendering tables
// import { getUser } from "api/apis";


// function ViewUsers() {
//   const [users, setUsers] = useState([]); // State to hold user data
//   const [loading, setLoading] = useState(true); // State to handle loading status
//   const [error, setError] = useState(null); // State to handle errors

// //   // Fetch user data from the backend
// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
// //         if (!response.ok) {
// //           throw new Error("Network response was not ok");
// //         }
// //         const data = await response.json();
// //         setUsers(data); // Set the fetched user data
// //       } catch (error) {
// //         setError(error.message); // Set error message if fetching fails
// //       } finally {
// //         setLoading(false); // Set loading to false after data fetching
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

//   // Define columns for the table based on user data structure
//   const userColumns = [
//     { title: "ID", field: "id" },
//     { title: "Name", field: "name" },
//     { title: "Email", field: "email" },
//     { title: "Contact", field: "contact" },
//     { title: "Address", field: "address" },
//   ];

//   if (loading) return <ArgonTypography>Loading...</ArgonTypography>; // Show loading state
//   if (error) return <ArgonTypography color="error">{error}</ArgonTypography>; // Show error message

//   return (
//     <ArgonBox py={3}>
//       <ArgonBox mb={3}>
//         <Card>
//           <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
//             <ArgonTypography variant="h6">View Users</ArgonTypography>
//           </ArgonBox>
//           <ArgonBox
//             sx={{
//               "& .MuiTableRow-root:not(:last-child)": {
//                 "& td": {
//                   borderBottom: ({ borders: { borderWidth, borderColor } }) =>
//                     `${borderWidth[1]} solid ${borderColor}`,
//                 },
//               },
//             }}
//           >
//             <Table columns={userColumns} rows={users} /> {/* Pass users data to the Table */}
//           </ArgonBox>
//         </Card>
//       </ArgonBox>
//     </ArgonBox>
//   );
// }

// export default ViewUsers;



// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import Table from "examples/Tables/Table";  // Assuming Table is a custom component for rendering tables
// import { getUser } from "api/apis"; // API call

// function ViewUsers() {
//   const [users, setUsers] = useState([]); // State to hold user data
//   const [loading, setLoading] = useState(true); // State to handle loading status
//   const [error, setError] = useState(null); // State to handle errors

//   // Fetch user data from the backend
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await getUser(); // Assuming this is the API call
//         console.log('Response:', response); // Debugging the response

//         // If response contains the users array directly
//         setUsers(response);

//         // If response contains an object with a data property
//         // setUsers(response.data);

//       } catch (error) {
//         setError(error.message); // Set error message if fetching fails
//       } finally {
//         setLoading(false); // Set loading to false after data fetching
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Define columns for the table based on user data structure
//   const userColumns = [
//     { title: "User Name", field: "UserName" },
//     { title: "User Email", field: "UserEmail" },
//     { title: "User Address", field: "UserAddress" },
//     { title: "Firm Name", field: "FirmName" },
//     { title: "Total Firm Balance", field: "TotalFirmBalance" },
//   ];

//   // Convert the data to a structure that the table expects
//   const userRows = users.map((user, index) => ({
//     UserName: user.UserName,
//     UserEmail: user.UserEmail,
//     UserAddress: user.UserAddress,
//     FirmName: user.FirmName,
//     TotalFirmBalance: user.TotalFirmBalance,
//   }));

//   if (loading) return <ArgonTypography>Loading...</ArgonTypography>; // Show loading state
//   if (error) return <ArgonTypography color="error">{error}</ArgonTypography>; // Show error message

//   return (
//     <ArgonBox py={3}>
//       <ArgonBox mb={3}>
//         <Card>
//           <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
//             <ArgonTypography variant="h6">View Users</ArgonTypography>
//           </ArgonBox>
//           <ArgonBox
//             sx={{
//               "& .MuiTableRow-root:not(:last-child)": {
//                 "& td": {
//                   borderBottom: ({ borders: { borderWidth, borderColor } }) =>
//                     `${borderWidth[1]} solid ${borderColor}`,
//                 },
//               },
//             }}
//           >
//             <Table columns={userColumns} rows={userRows} /> {/* Pass formatted data to the Table */}
//           </ArgonBox>
//         </Card>
//       </ArgonBox>
//     </ArgonBox>
//   );
// }

// export default ViewUsers;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import ArgonDialog from "components/ArgonDialog";
import ArgonTable from "examples/Tables/Table";
import ArgonSelect from "components/ArgonSelect";
import { getFirm, getUser, EditUser, DeleteUser } from "api/apis";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import { FormControl } from "@mui/material";

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [firms, setFirms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Password visibility state

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await getUser();
        console.log('Fetched user data:', response);
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchFirms = async () => {
      setLoading(true);
      try {
        const response = await getFirm();
        console.log('Fetched firms data:', response.firms[0]);
        setFirms(response.firms[0]); // Assuming response.firms is an array
      } catch (error) {
        console.error("Error fetching firms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFirms();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setSelectedFirm(user.FirmId); // Reset the selected firm to allow selection from options
    setOpenDialog(true);
  };

  const handleFirmChange = (option) => {
    setSelectedFirm(option.value);
    // setSelectedUser({ ...selectedUser, FirmId: option.value });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
  };

  const handleSaveChanges = async () => {
    if (selectedUser) {
      try {
        const userData = {
          name: selectedUser.UserName,
          email: selectedUser.UserEmail,
          password: selectedUser.UserPassword,
          contact: selectedUser.UserContact,
          address: selectedUser.UserAddress,
          newFirmId: selectedFirm, // Use the selected firm ID from the dropdown
        };
        console.log('u', selectedUser)
        const response = await EditUser(selectedUser.UserId, selectedUser.FirmId, userData);
        console.log('User edit response:', response);

        setUsers((prevUsers) =>
          prevUsers.map(user =>
            user.UserId === selectedUser.UserId ? { ...selectedUser, firmName: firms.find(firm => firm.firm_id === selectedFirm).firm_name } : user
          )
        );
        handleCloseDialog();
        window.location.reload();
      } catch (error) {
        console.error('Error editing user:', error);
      }
    }
  };

  const handleDeleteClick = (UserId) => {
    setUserToDelete(UserId);
    setOpenConfirmDialog(true);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      try {
        const response = await DeleteUser(userToDelete);
        console.log('User delete response:', response);
        setUsers((prevUsers) => prevUsers.filter(user => user.UserId !== userToDelete));
        setOpenConfirmDialog(false);
        setUserToDelete(null);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const cancelDelete = () => {
    setOpenConfirmDialog(false);
    setUserToDelete(null);
  };

  const columns = [
    { name: "User Name", align: "center" },
    { name: "Email", align: "center" },
    { name: "UserContact", align: "center" },
    { name: "Address", align: "center" },
    { name: "Firm", align: "center" },
    { name: "Total Firm Balance", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" }
  ];

  const rows = users.map(user => ({
    "User Name": user.UserName,
    Email: user.UserEmail,
    UserContact: user.UserContact,
    Address: user.UserAddress,
    Firm: user.FirmName,
    "Total Firm Balance": user.TotalFirmBalance,
    edit: (
      <ArgonTypography onClick={() => handleEditClick(user)} variant="body2" color="dark" style={{ cursor: 'pointer' }}>
        <Tooltip title="Edit User" placement="top">
          <Icon>edit</Icon>
        </Tooltip>
      </ArgonTypography>
    ),
    delete: (
      <ArgonTypography onClick={() => handleDeleteClick(user.UserId)} variant="body2" color="error" style={{ cursor: 'pointer' }}>
        <Tooltip title="Delete User" placement="top">
          <Icon>delete</Icon>
        </Tooltip>
      </ArgonTypography>
    )
  }));

  return (
    <ArgonBox py={3} px={2}>
      <ArgonBox>
        <ArgonTypography variant="h6">View Users</ArgonTypography>
        <ArgonTable columns={columns} rows={loading ? [] : rows} />
      </ArgonBox>

      {/* Edit User Dialog */}
      <ArgonDialog open={openDialog} title="Edit User">
        {selectedUser && (
          <div>
            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Name</ArgonTypography>
              <ArgonInput
                placeholder="Name"
                value={selectedUser.UserName}
                onChange={(e) => setSelectedUser({ ...selectedUser, UserName: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Email</ArgonTypography>
              <ArgonInput
                label="Email"
                value={selectedUser.UserEmail}
                onChange={(e) => setSelectedUser({ ...selectedUser, UserEmail: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Password</ArgonTypography>
              <ArgonInput
                type={showPassword ? "text" : "password"}
                label="Password"
                value={selectedUser.UserPassword}
                onChange={(e) => setSelectedUser({ ...selectedUser, UserPassword: e.target.value })}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </ArgonBox>

            {/* <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Contact</ArgonTypography>
              <ArgonInput
                label="Contact"
                value={selectedUser.UserContact}
                onChange={(e) => setSelectedUser({ ...selectedUser, UserContact: e.target.value })}
                fullWidth
              />
            </ArgonBox> */}

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Contact</ArgonTypography>
              <ArgonInput
                label="Contact"
                value={selectedUser.UserContact}
                onChange={(e) => {
                  const value = e.target.value;
                  // Only allow numbers and limit the length to 10 digits
                  if (/^\d{0,10}$/.test(value)) {
                    setSelectedUser({ ...selectedUser, UserContact: value });
                  }
                }}
                fullWidth
                inputProps={{ maxLength: 10 }} // Ensure max length is 10
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Address</ArgonTypography>
              <ArgonInput
                label="Address"
                value={selectedUser.UserAddress}
                onChange={(e) => setSelectedUser({ ...selectedUser, UserAddress: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Firm</ArgonTypography>
              <ArgonSelect
                options={firms.map((firm) => ({
                  value: firm.firm_id,
                  label: firm.firm_name,
                }))}
                value={selectedFirm ? { value: selectedFirm, label: firms.find(firm => firm.firm_id === selectedFirm)?.firm_name } : null}
                onChange={handleFirmChange}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                placeholder="Select a firm"
                fullWidth
              />
            </ArgonBox>


            <ArgonBox display="flex" justifyContent="flex-end">
              <ArgonButton onClick={handleCloseDialog} color="dark" sx={{ mr: 2 }}>
                Close
              </ArgonButton>
              <ArgonButton onClick={handleSaveChanges} color="success">
                Save Changes
              </ArgonButton>
            </ArgonBox>
          </div>
        )}
      </ArgonDialog>

      {/* Confirmation Dialog for Deletion */}
      <ArgonDialog open={openConfirmDialog} onClose={cancelDelete} title="Confirm Deletion">
        <ArgonTypography variant="body1">Are you sure you want to delete this user?</ArgonTypography>
        <ArgonBox display="flex" justifyContent="flex-end" mt={3}>
          <ArgonButton onClick={cancelDelete} color="dark" sx={{ mr: 2 }}>
            Cancel
          </ArgonButton>
          <ArgonButton onClick={confirmDelete} color="error">
            Delete
          </ArgonButton>
        </ArgonBox>
      </ArgonDialog>
    </ArgonBox>
  );
}

export default ViewUsers;




// import React, { useState, useEffect } from "react";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput";
// import ArgonButton from "components/ArgonButton";
// import ArgonDialog from "components/ArgonDialog";
// import ArgonTable from "examples/Tables/Table";
// import ArgonSelect from "components/ArgonSelect"; // Add ArgonSelect import
// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";
// import { getFirm, getUser, EditUser, DeleteUser } from "api/apis";

// function ViewFirms() {
//   const [users, setUsers] = useState([]);
//   const [firms, setFirms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedFirm, setSelectedFirm] = useState(null); // State for selected firm
//   const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const response = await getUser();
//         setUsers(response);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchFirms = async () => {
//       setLoading(true);
//       try {
//         const response = await getFirm();
//         setFirms(response);
//       } catch (error) {
//         console.error("Error fetching firms:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//     fetchFirms();
//   }, []);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setSelectedFirm(user.FirmId); // Set current firm
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedUser(null);
//     setSelectedFirm(null);
//   };

//   const handleSaveChanges = async () => {
//     if (selectedUser) {
//       try {
//         const userData = {
//           name: selectedUser.UserName,
//           email: selectedUser.UserEmail,
//           password: selectedUser.UserPassword,
//           contact: selectedUser.UserContact,
//           address: selectedUser.UserAddress,
//           newFirmId: selectedFirm // Pass the new firm ID
//         };
//         const response = await EditUser(selectedUser.UserId, userData);
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user.UserId === selectedUser.UserId ? { ...selectedUser, FirmId: selectedFirm } : user
//           )
//         );
//         handleCloseDialog();
//       } catch (error) {
//         console.error("Error editing user:", error);
//       }
//     }
//   };

//   const columns = [
//     { name: "User Name", align: "center" },
//     { name: "Email", align: "center" },
//     { name: "UserContact", align: "center" },
//     { name: "Address", align: "center" },
//     { name: "Firm", align: "center" },
//     { name: "Total Firm Balance", align: "center" },
//     { name: "edit", align: "center" },
//     { name: "delete", align: "center" }
//   ];

//   const rows = users.map((user) => ({
//     "User Name": user.UserName,
//     Email: user.UserEmail,
//     UserContact: user.UserContact,
//     Address: user.UserAddress,
//     Firm: user.FirmName,
//     "Total Firm Balance": user.TotalFirmBalance,
//     edit: (
//       <Tooltip title="Edit User" placement="top">
//         <Icon onClick={() => handleEditClick(user)} style={{ cursor: "pointer" }}>
//           edit
//         </Icon>
//       </Tooltip>
//     ),
//     delete: (
//       <Tooltip title="Delete User" placement="top">
//         <Icon onClick={() => setUserToDelete(user.UserId)} style={{ cursor: "pointer" }}>
//           delete
//         </Icon>
//       </Tooltip>
//     )
//   }));

//   return (
//     <ArgonBox py={3} px={2}>
//       <ArgonTable columns={columns} rows={loading ? [] : rows} />

//       {/* Edit User Dialog */}
//       <ArgonDialog open={openDialog} title="Edit User" onClose={handleCloseDialog}>
//         {selectedUser && (
//           <div>
//             <ArgonBox mb={2}>
//               <ArgonTypography variant="h6">Name</ArgonTypography>
//               <ArgonInput
//                 placeholder="Name"
//                 value={selectedUser.UserName}
//                 onChange={(e) => setSelectedUser({ ...selectedUser, UserName: e.target.value })}
//                 fullWidth
//               />
//             </ArgonBox>

//             <ArgonBox mb={2}>
//               <ArgonTypography variant="h6">Email</ArgonTypography>
//               <ArgonInput
//                 value={selectedUser.UserEmail}
//                 onChange={(e) => setSelectedUser({ ...selectedUser, UserEmail: e.target.value })}
//                 fullWidth
//               />
//             </ArgonBox>

//             <ArgonBox mb={2}>
//               <ArgonTypography variant="h6">Firm</ArgonTypography>
//               <ArgonSelect
//                 options={firms.map((firm) => ({ value: firm.FirmId, label: firm.FirmName }))}
//                 value={firms.find((firm) => firm.FirmId === selectedFirm)}
//                 onChange={(option) => setSelectedFirm(option.value)}
//                 fullWidth
//               />
//             </ArgonBox>

//             <ArgonBox display="flex" justifyContent="flex-end">
//               <ArgonButton onClick={handleCloseDialog} color="dark" sx={{ mr: 2 }}>
//                 Close
//               </ArgonButton>
//               <ArgonButton onClick={handleSaveChanges} color="success">
//                 Save Changes
//               </ArgonButton>
//             </ArgonBox>
//           </div>
//         )}
//       </ArgonDialog>

//       {/* Confirm Deletion Dialog */}
//       <ArgonDialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)} title="Confirm Deletion">
//         <ArgonTypography>Are you sure you want to delete this user?</ArgonTypography>
//         <ArgonBox display="flex" justifyContent="flex-end" mt={3}>
//           <ArgonButton onClick={() => setOpenConfirmDialog(false)} color="dark" sx={{ mr: 2 }}>
//             Cancel
//           </ArgonButton>
//           <ArgonButton onClick={() => { /* Confirm Delete Logic */ }} color="error">
//             Confirm Delete
//           </ArgonButton>
//         </ArgonBox>
//       </ArgonDialog>
//     </ArgonBox>
//   );
// }

// export default ViewFirms;
