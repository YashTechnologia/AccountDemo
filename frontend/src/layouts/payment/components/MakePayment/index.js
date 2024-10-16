// import Card from "@mui/material/Card";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormLabel from "@mui/material/FormLabel";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput";
// import ArgonSelect from "components/ArgonSelect";

// // React Hooks
// import { useEffect, useState } from "react";

// import { getLedgerForTransaction, getUserLedger, makePayment } from "api/apis";
// import ArgonDateTimePicker from "components/ArgonDateTimePicker";

// function MakePayment() {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const [remark, setRemark] = useState('');
//   const [ledgers, setLedgers] = useState([]);
//   const [userledgers, setUserLedgers] = useState([]);
//   const [paymentType, setPaymentType] = useState("cash"); // cash or cheque
//   const [chequeNumber, setChequeNumber] = useState('');
//   const [bankName, setBankName] = useState('');

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const response = await getLedgerForTransaction();
//         if (response) {
//           setLedgers(response);
//         }
//       } catch (error) {
//         console.error("Error fetching ledgers for payment:", error);
//       }
//     };

//     fetch();
//   }, []);

//   useEffect(() => {
//     const fetchLedgers = async () => {
//       try {
//         const roleId = localStorage.getItem('roleId');
//         let response;

//         if (roleId === '2') {
//           response = await getUserLedger();
//         } else if (roleId === '1') {
//           response = await getLedgerForTransaction();
//         }

//         if (response) {
//           setUserLedgers(response);
//         }
//       } catch (error) {
//         console.error("Error fetching ledgers for payment:", error);
//       }
//     };

//     fetchLedgers();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Parse from and to values (assuming format is "FirmId-LedgerId")
//     const [fromFirmId, fromLedgerId] = from.value.split("-");
//     const [toFirmId, toLedgerId] = to.value.split("-");

//     const formattedDate = new Date(date).toISOString().slice(0, 16).replace("T", " ");

//     const paymentData = {
//       date: formattedDate,
//       amount_type: paymentType === "cash" ? "CASH" : "CHEQUE", // 1: Cash, 2: Cheque
//       transaction_type: "1",
//       amount: parseFloat(amount),
//       remark,
//       from_ledger_id: parseInt(fromLedgerId),
//       from_firm_id: parseInt(fromFirmId),
//       to_ledger_id: parseInt(toLedgerId),
//       to_firm_id: parseInt(toFirmId),
//     };

//     if (paymentType === "cheque") {
//       // Add cheque details if cheque is selected
//       paymentData.cheque_no = chequeNumber;
//       paymentData.bank_name = bankName;
//     }

//     try {
//       const response = await makePayment(paymentData);
//       console.log("Payment successful:", response.message);
//       window.location.reload();
//     } catch (error) {
//       console.error("Error making payment:", error);
//     }
//   };

//   return (
//     <Card id="make-payment">
//       <ArgonBox pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium">
//           Make Payment
//         </ArgonTypography>
//       </ArgonBox>

//       {/* Payment Form */}
//       <ArgonBox component="form" role="form" onSubmit={handleSubmit} display="flex" flexDirection="column" p={2}>

//         {/* Select From Ledger */}
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             <ArgonSelect
//               value={from}
//               onChange={(option) => setFrom(option)}
//               options={ledgers.map((ledgers) => ({
//                 value: `${ledgers.FirmId}-${ledgers.LedgerId}`,
//                 label: `${ledgers.FirmName} - ${ledgers.LedgerName}`
//               }))}
//               placeholder="Transfer From"
//             />
//           </FormControl>
//         </ArgonBox>

//         {/* Select To Ledger */}
//         <ArgonBox mb={2}>
//           <FormControl fullWidth required>
//             <ArgonSelect
//               value={to}
//               onChange={(option) => setTo(option)}
//               options={userledgers.map((ledgers) => ({
//                 value: `${ledgers.FirmId}-${ledgers.LedgerId}`,
//                 label: `${ledgers.FirmName} - ${ledgers.LedgerName}`
//               }))}
//               placeholder="Transfer To"
//             />
//           </FormControl>
//         </ArgonBox>

//         {/* Amount Field */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//             size="large"
//           />
//         </ArgonBox>

//         {/* Date Field */}
//         <ArgonBox mb={2}>
//           <ArgonDateTimePicker
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </ArgonBox>

//         {/* Remark Field */}
//         <ArgonBox mb={2}>
//           <ArgonInput
//             placeholder="Remark"
//             value={remark}
//             onChange={(e) => setRemark(e.target.value)}
//             size="large"
//           />
//         </ArgonBox>

//         {/* Payment Type: Cash or Cheque */}
//         <ArgonBox mb={2}>
//           <FormControl component="fieldset">
//             <ArgonTypography component="legend">Payment Type</ArgonTypography>
//             <RadioGroup
//               value={paymentType}
//               onChange={(e) => setPaymentType(e.target.value)}
//               row
//             >
//               <ArgonBox display="flex" alignItems="center" mr={2}>
//                 <Radio value="cash" />
//                 <ArgonTypography variant="h6" fontWeight="medium">
//                   Cash
//                 </ArgonTypography>
//               </ArgonBox>
//               <ArgonBox display="flex" alignItems="center">
//                 <Radio value="cheque" />
//                 <ArgonTypography variant="h6" fontWeight="medium">
//                   Cheque
//                 </ArgonTypography>
//               </ArgonBox>
//             </RadioGroup>
//           </FormControl>
//         </ArgonBox>

//         {/* Cheque Details (show only if Cheque is selected) */}
//         {paymentType === "cheque" && (
//           <>
//             <ArgonBox mb={2}>
//               <ArgonInput
//                 type="text"
//                 placeholder="Cheque Number"
//                 value={chequeNumber}
//                 onChange={(e) => setChequeNumber(e.target.value)}
//                 required
//                 size="large"
//               />
//             </ArgonBox>
//             <ArgonBox mb={2}>
//               <ArgonInput
//                 type="text"
//                 placeholder="Bank Name"
//                 value={bankName}
//                 onChange={(e) => setBankName(e.target.value)}
//                 required
//                 size="large"
//               />
//             </ArgonBox>
//           </>
//         )}

//         {/* Submit Button */}
//         <ArgonBox mt={2}>
//           <Button variant="contained" color="primary" type="submit">
//             Pay Now
//           </Button>
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//   );
// }

// export default MakePayment;




import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";

// React Hooks
import { useEffect, useState } from "react";

import { getLedgerForTransaction, getUserLedger, makePayment } from "api/apis";
import ArgonDateTimePicker from "components/ArgonDateTimePicker";

function MakePayment() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(() => {
    // Get current date and time in IST
    const currentDate = new Date();
    const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000; // IST is UTC+5:30
    const istDate = new Date(currentDate.getTime() + istOffset);
    return istDate.toISOString().slice(0, 16); // Format to YYYY-MM-DDTHH:MM
  });
  const [remark, setRemark] = useState('');
  const [ledgers, setLedgers] = useState([]);
  const [userledgers, setUserLedgers] = useState([]);
  const [paymentType, setPaymentType] = useState("cash"); // cash or cheque
  const [chequeNumber, setChequeNumber] = useState('');
  const [bankName, setBankName] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getLedgerForTransaction();
        if (response) {
          setLedgers(response);
        }
      } catch (error) {
        console.error("Error fetching ledgers for payment:", error);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    const fetchLedgers = async () => {
      try {
        const roleId = localStorage.getItem('roleId');
        let response;

        if (roleId === '2') {
          response = await getUserLedger();
        } else if (roleId === '1') {
          response = await getLedgerForTransaction();
        }

        if (response) {
          setUserLedgers(response);
        }
      } catch (error) {
        console.error("Error fetching ledgers for payment:", error);
      }
    };

    fetchLedgers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Parse from and to values (assuming format is "FirmId-LedgerId")
    const [fromFirmId, fromLedgerId] = from.value.split("-");
    const [toFirmId, toLedgerId] = to.value.split("-");

    const formattedDate = new Date(date).toISOString().slice(0, 16).replace("T", " ");

    const paymentData = {
      date: formattedDate,
      amount_type: paymentType === "cash" ? "CASH" : "CHEQUE", // 1: Cash, 2: Cheque
      transaction_type: "1",
      amount: parseFloat(amount),
      remark,
      from_ledger_id: parseInt(fromLedgerId),
      from_firm_id: parseInt(fromFirmId),
      to_ledger_id: parseInt(toLedgerId),
      to_firm_id: parseInt(toFirmId),
    };

    if (paymentType === "cheque") {
      // Add cheque details if cheque is selected
      paymentData.cheque_no = chequeNumber;
      paymentData.bank_name = bankName;
    }

    try {
      const response = await makePayment(paymentData);
      console.log("Payment successful:", response.message);
      window.location.reload();
    } catch (error) {
      console.error("Error making payment:", error);
    }
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

        {/* Select From Ledger */}
        <ArgonBox mb={2}>
          <FormControl fullWidth required>
            <ArgonSelect
              value={from}
              onChange={(option) => setFrom(option)}
              options={ledgers.map((ledgers) => ({
                value: `${ledgers.FirmId}-${ledgers.LedgerId}`,
                label: `${ledgers.FirmName} - ${ledgers.LedgerName}`
              }))}
              placeholder="Transfer From"
            />
          </FormControl>
        </ArgonBox>

        {/* Select To Ledger */}
        <ArgonBox mb={2}>
          <FormControl fullWidth required>
            <ArgonSelect
              value={to}
              onChange={(option) => setTo(option)}
              options={userledgers.map((ledgers) => ({
                value: `${ledgers.FirmId}-${ledgers.LedgerId}`,
                label: `${ledgers.FirmName} - ${ledgers.LedgerName}`
              }))}
              placeholder="Transfer To"
            />
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
        <FormControl required>
          <ArgonDateTimePicker
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          </FormControl>
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

        {/* Payment Type: Cash or Cheque */}
        <ArgonBox mb={2}>
          <FormControl component="fieldset">
            <ArgonTypography component="legend">Payment Type</ArgonTypography>
            <RadioGroup
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              row
            >
              <ArgonBox display="flex" alignItems="center" mr={2}>
                <Radio value="cash" />
                <ArgonTypography variant="h6" fontWeight="medium">
                  Cash
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox display="flex" alignItems="center">
                <Radio value="cheque" />
                <ArgonTypography variant="h6" fontWeight="medium">
                  Cheque
                </ArgonTypography>
              </ArgonBox>
            </RadioGroup>
          </FormControl>
        </ArgonBox>

        {/* Cheque Details (show only if Cheque is selected) */}
        {paymentType === "cheque" && (
          <>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Cheque Number"
                value={chequeNumber}
                onChange={(e) => setChequeNumber(e.target.value)}
                required
                size="large"
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
                size="large"
              />
            </ArgonBox>
          </>
        )}

        {/* Submit Button */}
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
