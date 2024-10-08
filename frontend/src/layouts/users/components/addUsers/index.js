// // Import necessary components
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import Select from "@mui/material/Select"; // Importing Select for multi-select
// import MenuItem from "@mui/material/MenuItem"; // MenuItem for Select options
// import FormControl from "@mui/material/FormControl"; // FormControl for better styling
// import InputLabel from "@mui/material/InputLabel"; // InputLabel for Select

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput"; 
// import ArgonMultiSelect from "components/ArgonMultiSelect";

// // React Hooks
// import { useState } from "react";
// import { Checkbox } from "@mui/material";

// function AddUsers() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [contact, setContact] = useState('');
//   const [address, setAddress] = useState('');
//   const [firms, setFirms] = useState([]); // State for selected firms

//   // Sample options for the firms, replace with your data source
//   const firmOptions = [
//     { id: 1, name: "Firm A" },
//     { id: 2, name: "Firm B" },
//     { id: 3, name: "Firm C" },
//   ];

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log({ name, email, password, contact, address, firms });
//   };

//   return (
//     <Card id="add-user">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Add User
//         </ArgonTypography>
//       </ArgonBox>

//       {/* Form */}
//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>

//         {/* Name */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Email */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Password */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Contact */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Contact Number"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Address */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Firms Multi-Select */}
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             <InputLabel id="firms-select-label">Firms</InputLabel>
//             <Select
//               labelId="firms-select-label"
//               multiple
//               value={firms}
//               onChange={(e) => setFirms(e.target.value)}
//               renderValue={(selected) => selected.join(', ')} // Display selected values
//             >
//               {firmOptions.map((firm) => (
//                 <MenuItem key={firm.id} value={firm.name}>
//                   <Checkbox checked={firms.indexOf(firm.name) > -1} />
//                   {firm.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </ArgonBox>

//         {/* Submit Button */}
//         <ArgonBox mt={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Create
//           </Button>
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//   );
// }

// export default AddUsers;


// // Import necessary components
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput";
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect component

// import { getFirm, AddUser } from "api/apis";

// // React Hooks
// import { useState, useEffect } from "react";

// function AddUsers() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [contact, setContact] = useState('');
//   const [address, setAddress] = useState('');
//   const [firms, setFirms] = useState([]); // State for selected firms
//   const [firmOptions, setFirmOptions] = useState([]); // State for fetched firms
//   const [isSelectOpen, setIsSelectOpen] = useState(false); // State for controlling dropdown visibility

//   // Fetch firms when the component mounts
//   useEffect(() => {
//     const fetchFirms = async () => {
//       try {
//         const response = await getFirm(); // Assuming this returns an array of firms
//         setFirmOptions(response.firms[0]); // Set the fetched firms to state
//       } catch (error) {
//         console.error("Error fetching firms:", error);
//       }
//     };

//     fetchFirms();
//   }, []);

//   // Prepare options for ArgonSelect
//   const options = firmOptions.map(firm => ({
//     value: firm.firm_name,
//     label: firm.firm_name,
//   }));

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log({ name, email, password, contact, address, firms });
//   };

//   return (
//     <Card id="add-user">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Add User
//         </ArgonTypography>
//       </ArgonBox>

//       {/* Form */}
//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>

//         {/* Name */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Email */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Password */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Contact */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Contact Number"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Address */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Firms Multi-Select */}
//         <ArgonBox mb={2}>
//           <ArgonSelect
//             options={firmOptions.map((firm) => ({ value: firm.firm_name, label: firm.firm_name }))}
//             isMulti
//             onChange={(selectedOptions) => {
//               setFirms(selectedOptions.map(option => option.value));
//             }}
//             menuIsOpen={isSelectOpen} // Keep the menu open
//             onMenuOpen={() => setIsSelectOpen(true)} // Handle menu opening
//             onMenuClose={() => setIsSelectOpen(false)} // Handle menu closing
//             closeMenuOnSelect={false} // Prevent closing on select
//           />
//         </ArgonBox>

//         {/* Submit Button */}
//         <ArgonBox mt={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Create
//           </Button>
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//   );
// }

// export default AddUsers;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect component
import { getFirm, AddUser } from "api/apis";

function AddUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [firms, setFirms] = useState([]); // State for selected firms
  const [firmOptions, setFirmOptions] = useState([]); // State for fetched firms
  const [isSelectOpen, setIsSelectOpen] = useState(false); // State for controlling dropdown visibility

  // Fetch firms when the component mounts
  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const response = await getFirm(); // Assuming this returns an array of firms
        setFirmOptions(response.firms[0]); // Set the fetched firms to state
      } catch (error) {
        console.error("Error fetching firms:", error);
      }
    };

    fetchFirms();
  }, []);

  // Prepare options for ArgonSelect
  const options = firmOptions.map(firm => ({
    value: firm.firm_id, // Assuming `firm` has an `id` field
    label: firm.firm_name,
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare data for submission
    const data = {
      name,
      email,
      password,
      contact,
      address,
      firmIds: firms, // Assuming `firms` contains IDs of selected firms
    };

    console.log('Submitting User Data:', data);
    
    try {
      const result = await AddUser(data); // Call AddUser function
      console.log('User added successfully:', result);
      window.location.reload();
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <Card id="add-user">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Add User
        </ArgonTypography>
      </ArgonBox>

      {/* Form */}
      <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>

        {/* Name */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* Email */}
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* Password */}
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* Contact */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* Address */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* Firms Multi-Select */}
        <ArgonBox mb={2}>
          <ArgonSelect
            options={options}
            isMulti
            onChange={(selectedOptions) => {
              setFirms(selectedOptions.map(option => option.value)); // Store the firm IDs
            }}
            menuIsOpen={isSelectOpen} // Keep the menu open
            onMenuOpen={() => setIsSelectOpen(true)} // Handle menu opening
            onMenuClose={() => setIsSelectOpen(false)} // Handle menu closing
            closeMenuOnSelect={false} // Prevent closing on select
          />
        </ArgonBox>

        {/* Submit Button */}
        <ArgonBox mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default AddUsers;
