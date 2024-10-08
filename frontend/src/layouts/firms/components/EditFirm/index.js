// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { EditFirm, getFirm } from "api/apis"; // Import the API functions
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput"; // Ensure you have a suitable input component
// import ArgonButton from "components/ArgonButton"; // Ensure you have a button component

// function EditFirmComponent() {
//     const { userId, firmId } = useParams(); // Get userId and firmId from the URL parameters
//     const [firmData, setFirmData] = useState({
//         firmName: "",
//         firmEmail: "",
//         firmGSTNO: "",
//         firmAddress: "",
//     });
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate(); // For navigation after edit

//     useEffect(() => {
//         const fetchFirm = async () => {
//             try {
//                 const response = await getFirm(); // Assuming this fetches the firm list
//                 const firm = response.firms.find((f) => f.firm_id === parseInt(firmId)); // Find the firm by ID
//                 if (firm) {
//                     setFirmData({
//                         firmName: firm.firm_name,
//                         firmEmail: firm.firm_email,
//                         firmGSTNO: firm.firm_gstno,
//                         firmAddress: firm.firm_address,
//                     });
//                 }
//             } catch (error) {
//                 console.error("Error fetching firm for edit:", error);
//             } finally {
//                 setLoading(false); // Set loading to false after fetching
//             }
//         };

//         fetchFirm();
//     }, [firmId]); // Run when firmId changes

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFirmData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await EditFirm(userId, firmId, firmData); // Call the edit API
//             navigate("/firms"); // Navigate back to the firms list after successful edit
//         } catch (error) {
//             console.error("Error editing firm:", error);
//         }
//     };

//     if (loading) return <ArgonTypography variant="body1">Loading...</ArgonTypography>;

//     return (
//         <ArgonBox py={3}>
//             <ArgonTypography variant="h6">Edit Firm</ArgonTypography>
//             <form onSubmit={handleSubmit}>
//                 <ArgonBox mb={2}>
//                     <ArgonInput
//                         name="firmName"
//                         value={firmData.firmName}
//                         onChange={handleChange}
//                         label="Firm Name"
//                         required
//                     />
//                 </ArgonBox>
//                 <ArgonBox mb={2}>
//                     <ArgonInput
//                         name="firmEmail"
//                         value={firmData.firmEmail}
//                         onChange={handleChange}
//                         label="Firm Email"
//                         type="email"
//                         required
//                     />
//                 </ArgonBox>
//                 <ArgonBox mb={2}>
//                     <ArgonInput
//                         name="firmGSTNO"
//                         value={firmData.firmGSTNO}
//                         onChange={handleChange}
//                         label="Firm GST No."
//                         required
//                     />
//                 </ArgonBox>
//                 <ArgonBox mb={2}>
//                     <ArgonInput
//                         name="firmAddress"
//                         value={firmData.firmAddress}
//                         onChange={handleChange}
//                         label="Firm Address"
//                         required
//                     />
//                 </ArgonBox>
//                 <ArgonButton type="submit">Update Firm</ArgonButton>
//             </form>
//         </ArgonBox>
//     );
// }

// export default EditFirmComponent;



// Add prop types to the Example function
export default function Example({ open, onClose, firm }) {
    const classes = useStyles();
  
    return (
      <>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <div className={classes.dialogHeader}>
            <Typography
              variant="h5"
              component="h5"
              className={classes.dialogTitle}
            >
              Edit Firm: {firm ? firm.firm_name : 'Loading...'}
            </Typography>
            <IconButton onClick={onClose}>
              <Clear />
            </IconButton>
          </div>
          <DialogContent>
            {/* Add fields to display/edit firm details based on the firm data */}
            <Typography variant="body1">Firm ID: {firm?.firm_id}</Typography>
            <Typography variant="body1">Firm Email: {firm?.firm_email}</Typography>
            {/* Add more fields as needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="secondary" variant="contained">
              Close
            </Button>
            <Button onClick={onClose} color="primary" variant="contained">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
  