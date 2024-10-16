// ArgonDateTimePickerRoot.js

// @mui material components
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export default styled(TextField)(({ theme, ownerState }) => {
  const { palette, functions, typography, borders, boxShadows } = theme;
  const { error, success, disabled, darkMode } = ownerState;

  const { inputColors, grey, white, transparent, info, text, dark } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;
  const { size: fontSize } = typography;
  const { borderRadius } = borders;

  // styles for the input with error={true}
  const errorStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
  });

  // styles for the input with success={true}
  const successStyles = () => ({
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%2366d432' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${pxToRem(12)} center`,
    backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,
  });

  let borderColor = inputColors.borderColor.main;

  if (error) {
    borderColor = inputColors.error;
  } else if (success) {
    borderColor = inputColors.success;
  }

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : grey.main,
    borderColor,
    pointerEvents: disabled ? "none" : "auto",
    borderRadius: borderRadius.md,
    boxShadow: inputBoxShadow,

    input: {
      padding: 0,
      color: darkMode ? white.main : dark.main,

      "::placeholder": {
        color: `${darkMode ? white.main : text.main} !important`,
      },
    },

    ...(error && errorStyles()),
    ...(success && successStyles()),
    
    "&.Mui-focused": {
      outline: 0,
      borderColor: info.main,
      boxShadow: boxShadow([0, 3], [9, 0], info.main, 0),
    },
  };
});




// // ArgonDateTimePickerRoot.js

// // @mui material components
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";

// export default styled(TextField)(({ theme, ownerState }) => {
//   const { palette, functions, typography, borders, boxShadows } = theme;
//   const { error, success, disabled, darkMode } = ownerState;

//   const { inputColors, grey, white, transparent, info, text, dark } = palette;
//   const { inputBoxShadow } = boxShadows;
//   const { pxToRem, boxShadow } = functions;
//   const { size: fontSize } = typography;
//   const { borderRadius } = borders;

//   // Define icon color based on dark mode
//   const iconColor = darkMode
//     ? "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fff' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fff' stroke='none'/%3E%3C/svg%3E"
//     : "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3E%3C/svg%3E";

//   let borderColor = inputColors.borderColor.main;

//   // Determine border color based on input state
//   if (error) {
//     borderColor = inputColors.error;
//   } else if (success) {
//     borderColor = inputColors.success;
//   }

//   return {
//     backgroundColor: disabled ? `${grey[200]} !important` : grey.main,
//     borderColor,
//     pointerEvents: disabled ? "none" : "auto",
//     borderRadius: borderRadius.md,
//     boxShadow: inputBoxShadow,

//     // Input field styles
//     input: {
//       padding: 0,
//       color: darkMode ? grey.main : dark.main,

//       "::placeholder": {
//         color: `${darkMode ? white.main : text.main} !important`,
//       },
//     },

//     // Set the icon as a background image
//     backgroundImage: `url("${iconColor}")`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: `right ${pxToRem(12)} center`,
//     backgroundSize: `${pxToRem(16)} ${pxToRem(16)}`,

//     // Hover effect to show pointer cursor
//     "&:hover": {
//       cursor: "pointer",
//     },

//     // Focus styles
//     "&.Mui-focused": {
//       outline: 0,
//       borderColor: info.main,
//       boxShadow: boxShadow([0, 3], [9, 0], info.main, 0),
//     },

//     // Multiline input styles
//     "&.MuiInputBase-multiline": {
//       padding: `${pxToRem(10)} ${pxToRem(12)}`,
//     },
//   };
// });

