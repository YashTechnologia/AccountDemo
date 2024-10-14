import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { getFirm, getTransactions } from "api/apis"; // Import getTransactions

import ArgonBox from "components/ArgonBox";
import ArgonSelect from "components/ArgonSelect";
import ArgonTypography from "components/ArgonTypography";
import PaymentHistory from "../PaymentHistory";

function Transactions() {
  const [firms, setFirms] = useState([]);
  const [selectedFirm, setSelectedFirm] = useState('');
  const [transactions, setTransactions] = useState([]); // State for transactions
  const [error, setError] = useState(null); // Set error to null initially

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const response = await getFirm();
        setFirms(response.firms[0]);
      } catch (error) {
        console.error("Error fetching firms for payment:", error);
      }
    };

    fetchFirms();
  }, []);

  // Effect to fetch transactions when selectedFirm changes
  useEffect(() => {
    const fetchTransactions = async () => {
      if (selectedFirm) {
        try {
          const transactionsData = await getTransactions(selectedFirm.value, 1); // Fixed transaction type as 1
          console.log("Fetched transactions:", transactionsData);
          setTransactions(transactionsData); // Set the transactions data in state
          setError(null); // Clear error if transactions are fetched successfully
        } catch (error) {
          console.error("Error fetching transactions:", error.response?.data?.message || error.message);
          setTransactions([]); // Clear transactions on error
          setError(error.response?.data?.message || "Failed to fetch transactions. Please try again.");
        }
      }
    };

    fetchTransactions();
  }, [selectedFirm]);

  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox>
        <FormControl fullWidth required>
          <ArgonSelect
            value={selectedFirm}
            onChange={(option) => setSelectedFirm(option)}
            options={firms.map((firm) => ({
              value: `${firm.firm_id}`,
              label: `${firm.firm_name}`
            }))}
            placeholder="Select a Firm"
          />
        </FormControl>
      </ArgonBox>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize" >
          Your Payment&apos;s History
        </ArgonTypography>
        <ArgonBox display="flex" alignItems="flex-start">
          <ArgonBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </ArgonBox>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            {new Date().toLocaleDateString()} {/* Display current date */}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox
        pt={3}
        pb={2}
        px={2}
        sx={{
          maxHeight: '600px', // Set a maximum height
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {error ? (
            <ArgonTypography variant="caption" color="text" fontWeight="regular">
              {error}
            </ArgonTypography>
          ) : transactions.length > 0 ? (
            transactions.map((transaction) => (
              <PaymentHistory
                key={transaction.fromVoucherID} // Use a unique key
                color={transaction.fromAmount < 0 ? "error" : "success"} // Change color based on amount
                icon={transaction.fromAmount < 0 ? "arrow_downward" : "arrow_upward"} // Change icon based on amount
                name={`${transaction.fromFirmName} (${transaction.fromLedgerName}) to ${transaction.toFirmName} (${transaction.toLedgerName})`} // Display from/to Firm and Ledger names
                description={`${new Date(transaction.Datetime).toLocaleString()}`} // Format date
                value={`${transaction.fromAmount < 0 ? '-' : '+'} ₹${Math.abs(transaction.fromAmount).toFixed(2)}`} // Display formatted amount
              />
            ))
          ) : (
            <ArgonTypography variant="caption" color="text" fontWeight="regular">
              No transactions available.
            </ArgonTypography>
          )}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Transactions;
