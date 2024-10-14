// import { useState, useEffect } from "react";

// // @mui material components
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";

// // Argon Dashboard 2 MUI example components
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// // Argon Dashboard 2 MUI base styles
// import breakpoints from "assets/theme/base/breakpoints";  


// function Header() {
//   const [tabsOrientation, setTabsOrientation] = useState("horizontal");
//   const [isEditing, setIsEditing] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const [profile, setProfile] = useState({
//     name: "Alex Thompson",
//     email: "alex.thompson@example.com",
//     contact: "+1234567890",
//     password: "password123",
//     address: "123 Street, City",
//   });

//   useEffect(() => {
//     function handleTabsOrientation() {
//       return window.innerWidth < breakpoints.values.sm
//         ? setTabsOrientation("vertical")
//         : setTabsOrientation("horizontal");
//     }

//     window.addEventListener("resize", handleTabsOrientation);
//     handleTabsOrientation();

//     return () => window.removeEventListener("resize", handleTabsOrientation);
//   }, [tabsOrientation]);

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [name]: value,
//     }));
//   };

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   return (
//     <ArgonBox position="relative">
//       <DashboardNavbar absolute light />
//       <ArgonBox height="220px" />
//       <Card
//         sx={{
//           py: 3,
//           px: 2,
//           boxShadow: ({ boxShadows: { md } }) => md,
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         <Grid container spacing={3} alignItems="center" justifyContent="center">
//           <Grid item xs={12} sm={8} md={6}>
//             <ArgonBox height="100%" mt={0.5} lineHeight={1}>
//               <Grid container spacing={2} direction="column" alignItems="center">
//                 <Grid item>
//                   <ArgonTypography variant="h5" fontWeight="medium">
//                     {isEditing ? (
//                       <TextField
//                         fullWidth
//                         name="name"
//                         value={profile.name}
//                         onChange={handleChange}
//                         label="Name"
//                         variant="outlined"
//                       />
//                     ) : (
//                       profile.name
//                     )}
//                   </ArgonTypography>
//                 </Grid>
//                 <Grid item>
//                   <ArgonTypography variant="body1" align="center">
//                     Email: {isEditing ? (
//                       <TextField
//                         fullWidth
//                         name="email"
//                         value={profile.email}
//                         onChange={handleChange}
//                         label="Email"
//                         variant="outlined"
//                       />
//                     ) : (
//                       profile.email
//                     )}
//                   </ArgonTypography>
//                 </Grid>
//                 <Grid item>
//                   <ArgonTypography variant="body1" align="center">
//                     Contact: {isEditing ? (
//                       <TextField
//                         fullWidth
//                         name="contact"
//                         value={profile.contact}
//                         onChange={handleChange}
//                         label="Contact"
//                         variant="outlined"
//                       />
//                     ) : (
//                       profile.contact
//                     )}
//                   </ArgonTypography>
//                 </Grid>
//                 <Grid item>
//                   <ArgonTypography variant="body1" align="center">
//                     Address: {isEditing ? (
//                       <TextField
//                         fullWidth
//                         name="address"
//                         value={profile.address}
//                         onChange={handleChange}
//                         label="Address"
//                         variant="outlined"
//                       />
//                     ) : (
//                       profile.address
//                     )}
//                   </ArgonTypography>
//                 </Grid>
//                 <Grid item>
//                   <ArgonTypography variant="body1" align="center">
//                     Password: {isEditing ? (
//                       <TextField
//                         type={showPassword ? "text" : "password"}
//                         fullWidth
//                         name="password"
//                         value={profile.password}
//                         onChange={handleChange}
//                         label="Password"
//                         variant="outlined"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               <IconButton
//                                 onClick={handleTogglePasswordVisibility}
//                                 edge="end"
//                               >
//                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                               </IconButton>
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                     ) : (
//                       "********"
//                     )}
//                   </ArgonTypography>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="contained" color="primary" onClick={handleEditClick}>
//                     {isEditing ? "Save" : "Edit"}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </ArgonBox>
//           </Grid>
//         </Grid>
//       </Card>
//     </ArgonBox>
//   );
// }

// export default Header;


import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonDialog from "components/ArgonDialog";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import breakpoints from "assets/theme/base/breakpoints";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import { getProfileDetails, EditProfile } from "api/apis";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getProfileDetails();
        const userData = response.user[0];
        setProfile({
          name: userData.userName,
          email: userData.userEmail,
          contact: userData.userContact || "",
          address: userData.userAddress || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleEditClick = () => {
    setIsEditing(true);
    setOpenDialog(true);
  };

  const handleCloseDialog = async () => {
    try {
      const userData = {
        userName: profile.name,
        userEmail: profile.email,
        userContact: profile.contact,
        userAddress: profile.address,
      };

      // Call the EditProfile API with the constructed data
      const response = await EditProfile(userData);
      console.log('Edit Profile response:', response);

      // Close the dialog and reset editing state
      setIsEditing(false);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving profile changes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      if (/^\d{0,10}$/.test(value)) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value,
        }));
      }
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  return (
    <ArgonBox position="relative">
      <DashboardNavbar absolute light />
      <ArgonBox height="220px" />
      <Card
        sx={{
          py: 3,
          px: 2,
          maxWidth: '800px',
          boxShadow: ({ boxShadows: { md } }) => md,
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <ArgonBox height="100%" mt={0.5} lineHeight={1}>
              <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <ArgonTypography variant="h5" fontWeight="medium">
                        {profile.name}
                      </ArgonTypography>
                    </Grid>
                    <Grid item>
                      <ArgonTypography onClick={handleEditClick} variant="contained" color="primary">
                        <Tooltip title="Edit Profile" placement="top">
                          <Icon> edit </Icon>
                        </Tooltip>
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body1" align="center">
                    {profile.email}
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body1" align="center">
                    {profile.contact}
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body1" align="center">
                    {profile.address}
                  </ArgonTypography>
                </Grid>
              </Grid>
            </ArgonBox>
          </Grid>
        </Grid>
      </Card>

      {/* Edit Profile Dialog */}
      <ArgonDialog open={openDialog} title="Edit Profile">
        <ArgonBox mb={2}>
          <ArgonTypography variant="h6">
            Name
          </ArgonTypography>
          <ArgonInput
            fullWidth
            name="name"
            label="Name"
            value={profile.name}
            onChange={handleChange}
            variant="outlined"
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonTypography variant="h6">
            Email
          </ArgonTypography>
          <ArgonInput
            fullWidth
            name="email"
            label="Email"
            value={profile.email}
            onChange={handleChange}
            variant="outlined"
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonTypography variant="h6">
            Contact
          </ArgonTypography>
          <ArgonInput
            fullWidth
            name="contact"
            label="Contact"
            value={profile.contact}
            onChange={handleChange}
            variant="outlined"
            inputProps={{ maxLength: 10 }} // Optional: To restrict input length
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonTypography variant="h6">
            Address
          </ArgonTypography>
          <ArgonInput
            fullWidth
            name="address"
            label="Address"
            value={profile.address}
            onChange={handleChange}
            variant="outlined"
          />
        </ArgonBox>
        <ArgonBox display="flex" justifyContent="flex-end">
          <ArgonButton onClick={handleCloseDialog} color="dark" sx={{ mr: 2 }}>
            Cancel
          </ArgonButton>
          <ArgonButton onClick={handleCloseDialog} color="success">
            Save Changes
          </ArgonButton>
        </ArgonBox>
      </ArgonDialog>
    </ArgonBox>
  );
}

export default Header;
