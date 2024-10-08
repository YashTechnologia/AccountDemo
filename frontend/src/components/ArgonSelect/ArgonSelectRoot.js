import Select from "react-select";
import { styled } from "@mui/material/styles";

const ArgonSelect = styled((props) => (
  <Select
    {...props}
    menuPortalTarget={document.body}
    styles={{
      ...props.styles,
      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      option: (provided, state) => ({
        ...provided,
        fontSize: "15px",
        backgroundColor: state.isSelected ? '#11cdef' : state.isFocused ? '#f0f8ff' : null,
        color: state.isSelected ? '#fff' : state.isFocused ? '#000' : '#000',
        ":active": {
          backgroundColor: state.isSelected ? '#11cdef' : '#f0f8ff',
        },
        cursor: 'pointer',
      }),
      control: (provided) => ({
        ...provided,
        borderColor: '#ced4da',
        "&:hover": {
          borderColor: '#11cdef',
        },
        cursor: 'pointer',
      }),
    }}
  />
))(({ theme, ownerState }) => {
  const { palette, functions, typography, borders, boxShadows } = theme;
  const { size, error, success, disabled, darkMode } = ownerState;

  const { inputColors, grey, white, text, dark } = palette;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;
  const { size: fontSize } = typography;
  const { borderRadius } = borders;

  const smallStyles = () => ({
    fontSize: fontSize.xs,
    padding: `${pxToRem(4)} ${pxToRem(12)}`,
  });

  const largeStyles = () => ({
    padding: pxToRem(12),
  });

  const errorStyles = () => ({
    borderColor: inputColors.error,
    boxShadow: `${boxShadow([0, 3], [9, 0], inputColors.error, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.error,
      0.1
    )}`,
  });

  const successStyles = () => ({
    borderColor: inputColors.success,
    boxShadow: `${boxShadow([0, 3], [9, 0], inputColors.success, 0)}, ${boxShadow(
      [3, 4],
      [8, 0],
      inputColors.success,
      0.1
    )}`,
  });

  let borderColor = inputColors.borderColor.main;
  let boxShadowValue = inputBoxShadow;

  if (error) {
    boxShadowValue = errorStyles().boxShadow;
  } else if (success) {
    boxShadowValue = successStyles().boxShadow;
  }

  return {
    backgroundColor: disabled ? `${grey[200]} !important` : white.main,
    borderColor,
    pointerEvents: disabled ? "none" : "auto",
    borderRadius: borderRadius.md,

    ...(size === "small" && smallStyles()),
    ...(size === "large" && largeStyles()),

    ".react-select__control": {
      backgroundColor: darkMode ? dark.main : white.main,
      borderColor,
      boxShadow: boxShadowValue,
      borderRadius: borderRadius.md,
      color: darkMode ? white.main : text.main,
      margin: 0,
      padding: 0,
      "&:hover": {
        borderColor: '#11cdef',
      },
    },

    ".react-select__placeholder": {
      color: darkMode ? white.gray : text.gray,
      fontSize: fontSize.sm,
    },

    ".react-select__single-value": {
      color: darkMode ? white.main : text.main,
      fontSize: fontSize.sm,
    },

    ".react-select__menu": {
      backgroundColor: darkMode ? dark.main : white.main,
      color: darkMode ? white.main : dark.main,
      fontSize: fontSize.sm, // Reduced font size for the menu items
      zIndex: 9999, // Ensure menu is on top of other elements
    },

    ".react-select__option": {
      backgroundColor: darkMode ? dark.main : white.main,
      color: darkMode ? white.main : dark.main,
      fontSize: fontSize.sm, // Reduced font size for the options
      "&:hover": {
        backgroundColor: darkMode ? dark.light : grey[200],
      },
    },

    // Selected option styling
    ".react-select__option--is-selected": {
      backgroundColor: "#11cdef",
      color: white.main, // Ensures text color contrasts with the selected option background
      "&:hover": {
        backgroundColor: "#11cdef", // Keeps the selected color on hover
      },
    },
  };
});

export default ArgonSelect;

