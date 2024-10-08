// import { forwardRef } from "react";

// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// // Custom styles for ArgonSelect
// import ArgonSelectRoot from "components/ArgonSelect/ArgonSelectRoot";

// // Argon Dashboard 2 MUI context
// import { useArgonController } from "context";

// const ArgonSelect = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <ArgonSelectRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
//   );
// });

// // Setting default values for the props of ArgonSelect
// ArgonSelect.defaultProps = {
//   size: "medium",
//   error: false,
//   success: false,
//   disabled: false,
// };

// // Typechecking props for the ArgonSelect
// ArgonSelect.propTypes = {
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   disabled: PropTypes.bool,
// };

// export default ArgonSelect;



// // ArgonSelect.js

// import { forwardRef } from "react";
// import PropTypes from "prop-types";
// import ArgonSelectRoot from "components/ArgonSelect/ArgonSelectRoot";
// import { useArgonController } from "context";

// const ArgonSelect = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <ArgonSelectRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled, darkMode }} />
//   );
// });

// ArgonSelect.defaultProps = {
//   size: "medium",
//   error: false,
//   success: false,
//   disabled: false,
// };

// ArgonSelect.propTypes = {
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   disabled: PropTypes.bool,
// };

// export default ArgonSelect;



// import { forwardRef } from 'react';
// import PropTypes from 'prop-types';
// import ArgonSelectRoot from './ArgonSelectRoot'; // Ensure correct path
// import { useArgonController } from 'context'; // Ensure correct path

// const ArgonSelect = forwardRef(({ size, error, success, disabled, ...rest }, ref) => {
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <ArgonSelectRoot
//       {...rest}
//       ref={ref}
//       ownerState={{ size, error, success, disabled, darkMode }}
//     />
//   );
// });

// ArgonSelect.defaultProps = {
//   size: 'medium',
//   error: false,
//   success: false,
//   disabled: false,
// };

// ArgonSelect.propTypes = {
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   disabled: PropTypes.bool,
// };

// export default ArgonSelect;


// import { forwardRef } from "react";
// import PropTypes from "prop-types";
// import ArgonSelectRoot from "./ArgonSelectRoot";
// import { useArgonController } from "context";

// const ArgonSelect = forwardRef(({ size, error, success, disabled, options, ...rest }, ref) => {
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <ArgonSelectRoot
//       {...rest}
//       ref={ref}
//       ownerState={{ size, error, success, disabled, darkMode }}
//       options={options}  // Pass options to react-select
//       isDisabled={disabled}
//       classNamePrefix="react-select"
//     />
//   );
// });

// ArgonSelect.defaultProps = {
//   size: "medium",
//   error: false,
//   success: false,
//   disabled: false,
//   options: [],
// };

// ArgonSelect.propTypes = {
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   disabled: PropTypes.bool,
//   options: PropTypes.arrayOf(PropTypes.object),  // Validate the options prop
// };

// export default ArgonSelect;



// index.js

import { forwardRef } from "react";
import PropTypes from "prop-types";
import ArgonSelectRoot from "./ArgonSelectRoot";
import { useArgonController } from "context";

const ArgonSelect = forwardRef(({ size, error, success, disabled, options, ...rest }, ref) => {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <ArgonSelectRoot
      {...rest}
      ref={ref}
      ownerState={{ size, error, success, disabled, darkMode }}
      options={options}  // Pass options to react-select
      isDisabled={disabled}
      classNamePrefix="react-select"
    />
  );
});

// Setting default values for the props of ArgonSelect
ArgonSelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
  options: [],
};

// Typechecking props for the ArgonSelect
ArgonSelect.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),  // Validate the options prop
};

export default ArgonSelect;
