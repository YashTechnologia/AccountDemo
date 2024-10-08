// Argon Material UI components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput"; 
import ArgonSelect from "components/ArgonSelect";

// React Hooks
import { useState } from "react";

function MakePayment() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [remark, setRemark] = useState('');
  const [focusedField, setFocusedField] = useState(null); // Track focused field

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ from, to, amount, date, remark });
  };

  return (
    <Card id="make-payment">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Make Payment
        </ArgonTypography>
      </ArgonBox>

      {/* Payment Form */}
      <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>
        
        {/* From Select */}
        <ArgonBox mb={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="from-label">From</InputLabel>
            <ArgonSelect
              labelId="from-label"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setFocusedField('from')}
              onBlur={() => setFocusedField(null)}
              // label="From"
              placeholder="From"
              required
              size="large"
            >
              <MenuItem value={1}>Account 1</MenuItem>
              <MenuItem value={2}>Account 2</MenuItem>
              <MenuItem value={3}>Account 3</MenuItem>
            </ArgonSelect>
          </FormControl>
        </ArgonBox>

        {/* To Select */}
        <ArgonBox mb={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="to-label">To</InputLabel>
            <ArgonSelect
              labelId="to-label"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={() => setFocusedField('to')}
              onBlur={() => setFocusedField(null)}
              label="To"
              required
              size="large"
            >
              <MenuItem value={1}>Vendor 1</MenuItem>
              <MenuItem value={2}>Vendor 2</MenuItem>
              <MenuItem value={3}>Vendor 3</MenuItem>
            </ArgonSelect>
          </FormControl>
        </ArgonBox>

        {/* Amount Field */}
        <ArgonBox mb={2}>
          <ArgonInput
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            size="large"
          />
        </ArgonBox>

        {/* Date Field */}
        <ArgonBox mb={2}>
          <ArgonInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            size="large"
          />
        </ArgonBox>

        {/* Remark Field */}
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            size="large"
          />
        </ArgonBox>

        <ArgonBox mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Pay Now
          </Button>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default MakePayment;