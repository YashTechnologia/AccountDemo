// // ArgonDateTimePicker.js

// import { forwardRef } from "react";
// import PropTypes from "prop-types";
// import ArgonDateTimePickerRoot from "./ArgonDateTimePickerRoot";
// import { useArgonController } from "context"; // Assuming you have this context setup

// const ArgonDateTimePicker = forwardRef(({ error, success, disabled, ...rest }, ref) => {
//   const [controller] = useArgonController();
//   const { darkMode } = controller;

//   return (
//     <ArgonDateTimePickerRoot
//       type="datetime-local"
//       {...rest}
//       ref={ref}
//       ownerState={{ error, success, disabled, darkMode }}
//     />
//   );
// });

// // Setting default values for the props of ArgonDateTimePicker
// ArgonDateTimePicker.defaultProps = {
//   error: false,
//   success: false,
//   disabled: false,
// };

// // Typechecking props for the ArgonDateTimePicker
// ArgonDateTimePicker.propTypes = {
//   error: PropTypes.bool,
//   success: PropTypes.bool,
//   disabled: PropTypes.bool,
// };

// export default ArgonDateTimePicker;




// ArgonDateTimePicker.js

import { forwardRef } from "react";
import PropTypes from "prop-types";
import ArgonDateTimePickerRoot from "./ArgonDateTimePickerRoot";
import { useArgonController } from "context"; // Assuming you have this context setup

const ArgonDateTimePicker = forwardRef(({ error, success, disabled, ...rest }, ref) => {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <ArgonDateTimePickerRoot
      type="datetime-local"
      {...rest}
      ref={ref}
      ownerState={{ error, success, disabled, darkMode }}
      variant="outlined" // To match the input styling
    />
  );
});

// Setting default values for the props of ArgonDateTimePicker
ArgonDateTimePicker.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the ArgonDateTimePicker
ArgonDateTimePicker.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ArgonDateTimePicker;
