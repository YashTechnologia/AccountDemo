// // Import necessary components
// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import FormControlLabel from "@mui/material/FormControlLabel";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput"; 
// import ArgonCheckbox from "components/ArgonCheckbox"; // Import ArgonCheckbox
// import ArgonSelect from "components/ArgonSelect";

// // React Hooks
// import { useState } from "react";

// // Argon Dashboard 2 MUI context
// import { useArgonController } from "context";

// function AddLedger() {
//   const [ledgerName, setLedgerName] = useState(''); // New state for ledger name
//   const [openingBalance, setOpeningBalance] = useState(''); // New state for opening balance
//   const [isCash, setIsCash] = useState(false); // New state for cash option
//   const [selectedFirm, setSelectedFirm] = useState(''); // New state for selected firm

//   const firms = [
//     "Firm A",
//     "Firm B",
//     "Firm C",
//   ]; // Sample firm options; replace with actual data as needed

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission here
//     console.log({ selectedFirm, ledgerName, openingBalance, isCash });
//   };

//   // Accessing darkMode from context
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <Card id="add-firm">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Add Ledger
//         </ArgonTypography>
//       </ArgonBox>

//       {/* Form */}
//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>

//         {/* Firm Selection */}
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             <InputLabel>Firm</InputLabel>
//             <ArgonSelect
//               value={selectedFirm}
//               onChange={(e) => setSelectedFirm(e.target.value)}
//               size="large"
//             >
//               {firms.map((firm) => (
//                 <MenuItem key={firm} value={firm}>
//                   {firm}
//                 </MenuItem>
//               ))}
//             </ArgonSelect>
//           </FormControl>
//         </ArgonBox>

//         {/* Ledger Name */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Ledger Name"
//             value={ledgerName}
//             onChange={(e) => setLedgerName(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Opening Balance */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="number"
//             placeholder="Opening Balance"
//             value={openingBalance}
//             onChange={(e) => setOpeningBalance(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         {/* Is it Cash Option */}
//         <ArgonBox mb={2}>
//           <FormControlLabel
//             control={
//               <ArgonCheckbox
//                 checked={isCash}
//                 onChange={(e) => setIsCash(e.target.checked)}
//                 darkMode={darkMode} // Pass darkMode prop here
//               />
//             }
//             label="Is this Cash?"
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

// export default AddLedger;


// // AddLedger.js

// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import MenuItem from "@mui/material/MenuItem";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput"; 
// import ArgonCheckbox from "components/ArgonCheckbox"; // Import ArgonCheckbox
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect

// import { useState } from "react";
// import { useArgonController } from "context";

// function AddLedger() {
//   const [ledgerName, setLedgerName] = useState('');
//   const [openingBalance, setOpeningBalance] = useState('');
//   const [isCash, setIsCash] = useState(false);
//   const [selectedFirm, setSelectedFirm] = useState('');

//   const firms = ["Firm A", "Firm B", "Firm C"];

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ selectedFirm, ledgerName, openingBalance, isCash });
//   };

//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <Card id="add-firm">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Add Ledger
//         </ArgonTypography>
//       </ArgonBox>

//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             <InputLabel>Firm</InputLabel>
//             <ArgonSelect
//               value={selectedFirm}
//               onChange={(e) => setSelectedFirm(e.target.value)}
//               size="large"
//             >
//               {firms.map((firm) => (
//                 <MenuItem key={firm} value={firm}>
//                   {firm}
//                 </MenuItem>
//               ))}
//             </ArgonSelect>
//           </FormControl>
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Ledger Name"
//             value={ledgerName}
//             onChange={(e) => setLedgerName(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="number"
//             placeholder="Opening Balance"
//             value={openingBalance}
//             onChange={(e) => setOpeningBalance(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <FormControlLabel
//             control={
//               <ArgonCheckbox
//                 checked={isCash}
//                 onChange={(e) => setIsCash(e.target.checked)}
//                 darkMode={darkMode}
//               />
//             }
//             label="Is this Cash?"
//           />
//         </ArgonBox>

//         <ArgonBox mt={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Create
//           </Button>
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//   );
// }

// export default AddLedger;


// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import MenuItem from "@mui/material/MenuItem";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput"; 
// import ArgonCheckbox from "components/ArgonCheckbox"; // Import ArgonCheckbox
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect

// import { useState } from "react";

// function AddLedger() {
//   const [ledgerName, setLedgerName] = useState('');
//   const [openingBalance, setOpeningBalance] = useState('');
//   const [isCash, setIsCash] = useState(false);
//   const [selectedFirm, setSelectedFirm] = useState('');

//   const firms = ["Firm A", "Firm B", "Firm C"];

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ selectedFirm, ledgerName, openingBalance, isCash });
//   };


//   return (
//     <Card id="add-firm">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Add Ledger
//         </ArgonTypography>
//       </ArgonBox>

//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             {/* <InputLabel>Firm</InputLabel> */}
//             <ArgonSelect
//               value={selectedFirm}
//               onChange={(option) => setSelectedFirm(option ? option.value : '')} // ArgonSelect uses option.value
//               options={firms.map((firm) => ({ value: firm, label: firm }))} // Map firms to ArgonSelect options format
//               placeholder="Select a Firm"
//             />
//           </FormControl>
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Ledger Name"
//             value={ledgerName}
//             onChange={(e) => setLedgerName(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="number"
//             placeholder="Opening Balance"
//             value={openingBalance}
//             onChange={(e) => setOpeningBalance(e.target.value)}
//             size="large"
//             required
//           />
//         </ArgonBox>

//         <ArgonBox mb={2}>
//           <FormControlLabel
//             control={
//               <ArgonCheckbox
//                 checked={isCash}
//                 onChange={(e) => setIsCash(e.target.checked)}
//               />
//             }
//             label="Is this Cash?"
//           />
//         </ArgonBox>

//         <ArgonBox mt={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Create
//           </Button>
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//   );
// }

// export default AddLedger;


import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react"; // Import useEffect
import Checkbox from "@mui/material/Checkbox";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";

import { getFirm, getGL, CreateLedger } from "api/apis";

function AddLedger() {
  const [ledgerName, setLedgerName] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [isCash, setIsCash] = useState(false);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const [firms, setFirms] = useState([]);
  const [selectedGl, setSelectedGl] = useState(null);
  const [gl, setGl] = useState([]);

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const response = await getFirm();
        if (response && response.firms) {
          setFirms(response.firms[0]);
        }
      } catch (error) {
        console.error("Error fetching firms:", error);
      }
    };

    fetchFirms();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getGL();
        if (response && response.Gl) {
          setGl(response.Gl[0]);
        }
      } catch (error) {
        console.error("Error fetching GL:", error);
      }
    };

    fetch();
  }, []);

  const addLedger = async (data) => {
    try {
      const response = await CreateLedger(data);
      console.log('Ledger added successfully:', response);
      window.location.reload();
    } catch (error) {
      console.error('Error adding Ledger:', error);
      alert(error.response.data.message)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      glId: selectedGl.value,
      firmId: selectedFirm.value,
      ledgerName: ledgerName,
      openingBalance: openingBalance,
      cashORonline: isCash ? 1 : 0,
    };

    addLedger(data);
  };

  return (
    <Card id="add-firm">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Add Ledger
        </ArgonTypography>
      </ArgonBox>

      <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>
        <ArgonBox mb={2}>
          <FormControl fullWidth required>
            <ArgonSelect
              value={selectedGl}
              onChange={(option) => setSelectedGl(option)}
              options={gl.map((gl) => ({
                value: gl.GLId,
                label: gl.glName
              }))}
              placeholder="Select a General Ledger"
            />
          </FormControl>
        </ArgonBox>

        <ArgonBox mb={2}>
          <FormControl fullWidth required>
            <ArgonSelect
              value={selectedFirm}
              onChange={(option) => setSelectedFirm(option)}
              options={firms.map((firm) => ({
                value: firm.firm_id,
                label: firm.firm_name
              }))}
              placeholder="Select a Firm"
            />
          </FormControl>
        </ArgonBox>

        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Ledger Name"
            value={ledgerName}
            onChange={(e) => setLedgerName(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        <ArgonBox mb={2}>
          <ArgonInput
            type="number"
            placeholder="Opening Balance"
            value={openingBalance}
            onChange={(e) => setOpeningBalance(e.target.value)}
            size="large"
            required
          />
        </ArgonBox>

        {/* <ArgonBox mb={2}>
          <FormControlLabel
            control={
              <ArgonCheckBox
                checked={isCash}
                onChange={(e) => setIsCash(e.target.checked)}
              />
            }
            label="Is this Cash?"
          />
        </ArgonBox> */}

        <ArgonBox mb={2} display="flex" alignItems="center">
          <Checkbox
            checked={isCash}
            onChange={(e) => setIsCash(e.target.checked)}
          />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            Is this Cash ?
          </ArgonTypography>
        </ArgonBox>

        {/* <ArgonCheckBox
          checked={isCash}
          onChange={(e) => setIsCash(e.target.checked)}
          disabled={false} // You can set this to true to disable the checkbox
        /> */}

        <ArgonBox mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default AddLedger;
