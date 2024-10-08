import React from 'react';
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import PropTypes from "prop-types";
import { useArgonController } from "context"; // Importing the context to access dark mode

const ArgonDialog = ({ open, onClose, title, children }) => {
  const [controller] = useArgonController(); // Accessing the Argon controller
  const { darkMode } = controller; // Getting the dark mode state

  if (!open) return null; // If the dialog is not open, return null

  return (
    <>
      {/* Full-screen overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          zIndex: 1000, // Ensure the overlay is above all other content
        }}
      />

      {/* Dialog box */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: darkMode ? '#2C2C2C' : 'white', // Change background for dark mode
          color: darkMode ? 'white' : 'black', // Change text color for dark mode
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          zIndex: 1100, // Ensure the dialog is above the overlay
          maxWidth: '90%', // Ensure dialog is responsive
          width: '400px', // Set dialog width
        }}
      >
        <ArgonTypography variant="h5" mb={2}>
          {title}
        </ArgonTypography>
        <ArgonBox mb={3}>{children}</ArgonBox>
      </div>
    </>
  );
};

ArgonDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ArgonDialog;
