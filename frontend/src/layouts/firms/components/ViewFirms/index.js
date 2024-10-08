import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput"; 
import ArgonButton from "components/ArgonButton";
import ArgonDialog from "components/ArgonDialog";
import ArgonTable from "examples/Tables/Table";
import { getFirm, EditFirm, DeleteFirm } from "api/apis"; 
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

function ViewFirms() {
  const [firms, setFirms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false); // State for confirmation dialog
  const [firmToDelete, setFirmToDelete] = useState(null); // State for firm to delete

  useEffect(() => {
    const fetchFirms = async () => {
      setLoading(true);
      try {
        const response = await getFirm();
        console.log('Fetched data:', response);
        setFirms(response.firms[0]);
      } catch (error) {
        console.error("Error fetching firms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFirms();
  }, []);

  const handleEditClick = (firm) => {
    setSelectedFirm(firm);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFirm(null);
  };

  const handleSaveChanges = async () => {
    if (selectedFirm) {
      try {
        const firmData = {
          firmName: selectedFirm.firm_name,
          firmEmail: selectedFirm.firm_email,
          firmGSTNO: selectedFirm.firm_gstno,
          firmAddress: selectedFirm.firm_address
        };
        const response = await EditFirm(selectedFirm.firm_id, firmData);
        console.log('Firm edit response:', response);
        setFirms((prevFirms) =>
          prevFirms.map(firm =>
            firm.firm_id === selectedFirm.firm_id ? selectedFirm : firm
          )
        );
        handleCloseDialog();
      } catch (error) {
        console.error('Error editing firm:', error);
      }
    }
  };

  const handleDeleteClick = (firm_id) => {
    setFirmToDelete(firm_id); // Set the firm ID to delete
    setOpenConfirmDialog(true); // Open confirmation dialog
  };

  const confirmDelete = async () => {
    if (firmToDelete) {
      try {
        const response = await DeleteFirm(firmToDelete); // Call the delete API
        console.log('Firm delete response:', response);
        // Remove the firm from the state after successful deletion
        setFirms((prevFirms) => prevFirms.filter(firm => firm.firm_id !== firmToDelete));
        setOpenConfirmDialog(false); // Close the confirmation dialog
        setFirmToDelete(null); // Clear the firm to delete
      } catch (error) {
        console.error('Error deleting firm:', error);
      }
    }
  };

  const cancelDelete = () => {
    setOpenConfirmDialog(false); // Close the confirmation dialog
    setFirmToDelete(null); // Clear the firm to delete
  };

  const columns = [
    // { name: "firm_id", align: "center" },
    { name: "firm_name", align: "center" },
    { name: "firm_email", align: "center" },
    { name: "firm_gstno", align: "center" },
    { name: "firm_address", align: "center" },
    { name: "Total_Balance", align: "center" },
    // { name: "firm_status", align: "center" },
    { name: "edit", align: "center" },
    { name: "delete", align: "center" }
  ];
  
  const rows = firms.map(firm => ({
    // firm_id: firm.firm_id,
    firm_name: firm.firm_name,
    firm_email: firm.firm_email,
    firm_gstno: firm.firm_gstno,
    firm_address: firm.firm_address,
    Total_Balance: firm.total_op_balance,
    // firm_status: firm.firm_status,
    edit: (
      <ArgonTypography onClick={() => handleEditClick(firm)} variant="body2" color="dark" style={{ cursor: 'pointer' }}>
        <Tooltip title="Edit Firm" placement="top">
          <Icon>edit</Icon>
        </Tooltip>
      </ArgonTypography>
    ),
    delete: (
      <ArgonTypography onClick={() => handleDeleteClick(firm.firm_id)} variant="body2" color="error" style={{ cursor: 'pointer' }}>
        <Tooltip title="Delete Firm" placement="top">
          <Icon>delete</Icon>
        </Tooltip>
      </ArgonTypography>
    )
  }));

  return (
    <ArgonBox py={3} px={2}>
      <ArgonBox>
        <ArgonTypography variant="h6">View Firms</ArgonTypography>
        <ArgonTable columns={columns} rows={loading ? [] : rows} />
      </ArgonBox>

      {/* Edit Firm Dialog */}
      <ArgonDialog open={openDialog} title="Edit Firm">
        {selectedFirm && (
          <div>
            {/* <ArgonBox mb={2}>
            <ArgonTypography variant="h6">Firm Id</ArgonTypography>
              <ArgonInput
                label="Firm ID"
                value={selectedFirm.firm_id}
                fullWidth
                disabled
              />
            </ArgonBox> */}

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Firm Name</ArgonTypography>
              <ArgonInput
                placeholder="Firm Name"
                value={selectedFirm.firm_name}
                onChange={(e) => setSelectedFirm({ ...selectedFirm, firm_name: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Firm Email</ArgonTypography>
              <ArgonInput
                label="Firm Email"
                value={selectedFirm.firm_email}
                onChange={(e) => setSelectedFirm({ ...selectedFirm, firm_email: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
              <ArgonTypography variant="h6">Firm GST No</ArgonTypography>
              <ArgonInput
                label="Firm GST No"
                value={selectedFirm.firm_gstno}
                onChange={(e) => setSelectedFirm({ ...selectedFirm, firm_gstno: e.target.value })}
                fullWidth
              />
            </ArgonBox>

            <ArgonBox mb={2}>
            <ArgonTypography variant="h6">Firm Address</ArgonTypography>
              <ArgonInput
                label="Firm Address"
                value={selectedFirm.firm_address}
                onChange={(e) => setSelectedFirm({ ...selectedFirm, firm_address: e.target.value })}
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
        <ArgonTypography>
          Are you sure you want to delete this firm?
        </ArgonTypography>
        <ArgonBox display="flex" justifyContent="flex-end" mt={3}>
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

export default ViewFirms;
