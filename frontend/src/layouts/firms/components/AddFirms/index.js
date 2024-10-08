// Import necessary components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";

// React Hooks
import { useState } from "react";

import { CreateFirm } from "api/apis";

function AddFirm() {
  const [firmName, setFirmName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gstin, setGstin] = useState('');
  
  // Function to handle the API request
  const addFirm = async (firmData) => {
    try {
      const response = await CreateFirm(firmData);
      console.log('Firm added successfully:', response);
      window.location.reload();
    } catch (error) {
      console.error('Error adding firm:', error);
      alert(error.response.data.message)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const firmData = {
      firmName: firmName,
      firmEmail: email,
      firmGSTNO: gstin,
      firmAddress: address,
    };
    
    // Call the addFirm function to make the API request
    addFirm(firmData);
  };

  return (
    <Card id="add-firm">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Add Firm
        </ArgonTypography>
      </ArgonBox>

      {/* Form */}
      <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>
        
        {/* Firm Name */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Firm Name"
            value={firmName}
            onChange={(e) => setFirmName(e.target.value)}
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

        {/* GSTIN Number */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="GSTIN Number"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            size="large"
            required
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

export default AddFirm;
