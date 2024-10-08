import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonDialog from "components/ArgonDialog";
import ArgonTable from "examples/Tables/Table";
import { getFirm, getLedger, EditLedger, DeleteLedger } from "api/apis";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";

function ViewLedgers() {
  const [ledgers, setLedgers] = useState([]); // State to hold ledger data
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLedger, setSelectedLedger] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [ledgerToDelete, setLedgerToDelete] = useState(null);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const [firms, setFirms] = useState([]);

  useEffect(() => {
    const fetchLedgers = async () => {
      setLoading(true);
      try {
        const response = await getLedger(); // Adjust this to your actual API endpoint
        console.log('Fetched data:', response);
        setLedgers(response); // Assuming response is directly the ledgers array
      } catch (error) {
        console.error("Error fetching ledgers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLedgers();
  }, []);

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const response = await getFirm();
        if (response && response.firms) {
          setFirms(response.firms[0]); // Assuming firms is an array, no need for [0]
        }
      } catch (error) {
        console.error("Error fetching firms:", error);
      }
    };

    fetchFirms();
  }, []);

  const handleEditClick = (ledger) => {
    setSelectedLedger(ledger);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedLedger(null);
  };

  const handleSaveChanges = async () => {
    if (selectedLedger) {
      try {
        const ledgerData = {
          Ledger_Name: selectedLedger.Ledger_Name,
        };
        const response = await EditLedger(selectedLedger.Ledger_Id, ledgerData);
        console.log('Ledger edit response:', response);
        setLedgers((prevLedgers) =>
          prevLedgers.map(ledger =>
            ledger.Ledger_Id === selectedLedger.Ledger_Id ? selectedLedger : ledger
          )
        );
        handleCloseDialog();
      } catch (error) {
        console.error('Error editing ledger:', error);
      }
    }
  };

  const handleDeleteClick = (ledger_id) => {
    setLedgerToDelete(ledger_id);
    setOpenConfirmDialog(true);
  };

  const confirmDelete = async () => {
    if (ledgerToDelete) {
      try {
        const response = await DeleteLedger(ledgerToDelete); // Call the delete API
        console.log('Ledger deleted:', ledgerToDelete);
        setLedgers((prevLedgers) => prevLedgers.filter(ledger => ledger.Ledger_Id !== ledgerToDelete));
        setOpenConfirmDialog(false);
        setLedgerToDelete(null);
      } catch (error) {
        console.error('Error deleting ledger:', error);
      }
    }
  };

  const cancelDelete = () => {
    setOpenConfirmDialog(false);
    setLedgerToDelete(null);
  };

  // Define display names for your ledger columns
  const columns = [
    { name: "General Ledger Name", align: "center" },
    { name: "Firm Name", align: "center" },
    { name: "Ledger Name", align: "center" },
    { name: "Ledger Balance", align: "center" },
    { name: "Is Cash", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" },
  ];

  const filteredRows = ledgers
  .filter(ledger => selectedFirm ? ledger.Firm_Id === selectedFirm.value : true)
  .map(ledger => {
    const firmMatches = selectedFirm && selectedFirm.label === ledger.FirmName; // Comparison logic

    return {
      "General Ledger Name": ledger.General_Ledger_Name,
      "Firm Name": (
        <span>
          {ledger.FirmName} {firmMatches}
        </span>
      ),
      "Ledger Name": ledger.Ledger_Name,
      "Ledger Balance": ledger.Ledger_Balance,
      "Is Cash": ledger.Balance_Type === 1 ? "Yes" : "No",
      edit: (
        <ArgonTypography onClick={() => handleEditClick(ledger)} variant="body2" color="dark" style={{ cursor: 'pointer' }}>
          <Tooltip title="Edit Ledger" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </ArgonTypography>
      ),
      delete: (
        <ArgonTypography onClick={() => handleDeleteClick(ledger.Ledger_Id)} variant="body2" color="error" style={{ cursor: 'pointer' }}>
          <Tooltip title="Delete Ledger" placement="top">
            <Icon>delete</Icon>
          </Tooltip>
        </ArgonTypography>
      )
    };
  });


  return (
    <ArgonBox py={3} px={2}>
      <ArgonBox>
        <ArgonTypography variant="h6" mb={2}>View Ledgers</ArgonTypography>

        <ArgonBox mb={3}>
        <ArgonSelect
          value={selectedFirm}
          onChange={(option) => setSelectedFirm(option)}
          options={firms.map((firm) => ({
            value: firm.firm_id,
            label: firm.firm_name
          }))}
          placeholder="Select a Firm"
        />
        </ArgonBox>

        <ArgonTable columns={columns} rows={loading ? [] : filteredRows} />
      </ArgonBox>

      {/* Edit Ledger Dialog */}
      <ArgonDialog open={openDialog} title="Edit Ledger">
        {selectedLedger && (
          <div>
            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Ledger Name</ArgonTypography>
              <ArgonInput
                placeholder="Ledger Name"
                value={selectedLedger.Ledger_Name}
                onChange={(e) => setSelectedLedger({ ...selectedLedger, Ledger_Name: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Firm Name</ArgonTypography>
              <ArgonInput
                placeholder="Firm Name"
                value={selectedLedger.FirmName}
                onChange={(e) => setSelectedLedger({ ...selectedLedger, FirmName: e.target.value })}
                fullWidth
                disabled
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Ledger Balance</ArgonTypography>
              <ArgonInput
                type="number"
                value={selectedLedger.Ledger_Balance}
                onChange={(e) => setSelectedLedger({ ...selectedLedger, Ledger_Balance: e.target.value })}
                fullWidth
                disabled
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Balance Type</ArgonTypography>
              <ArgonInput
                placeholder="Balance Type (1 for Cash, 0 for Not Cash)"
                value={selectedLedger.Balance_Type}
                onChange={(e) => setSelectedLedger({ ...selectedLedger, Balance_Type: e.target.value })}
                fullWidth
                disabled
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
        <ArgonTypography>
          Are you sure you want to delete this ledger?
        </ArgonTypography>
        <ArgonBox display="flex" justifyContent="flex-end" mt={2}>
          <ArgonButton onClick={cancelDelete} color="dark" sx={{ mr: 2 }}>
            Cancel
          </ArgonButton>
          <ArgonButton onClick={confirmDelete} color="error">
            Confirm Delete
          </ArgonButton>
        </ArgonBox>
      </ArgonDialog>
    </ArgonBox>
  );
}

export default ViewLedgers;
