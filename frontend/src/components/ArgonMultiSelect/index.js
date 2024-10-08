import { forwardRef } from "react";
import PropTypes from "prop-types";
import ArgonMultiSelectRoot from "./ArgonMultiSelectRoot";
import { useArgonController } from "context";

const ArgonMultiSelect = forwardRef(({ size, error, success, disabled, options, value, onChange, ...rest }, ref) => {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value); // Pass selected values back to the parent
  };

  return (
    <ArgonMultiSelectRoot
      {...rest}
      ref={ref}
      ownerState={{ size, error, success, disabled, darkMode }}
      options={options}
      value={value} // Pass the selected value
      onChange={handleChange} // Handle value changes
      classNamePrefix="react-select"
    />
  );
});

// Setting default values for the props of ArgonMultiSelect
ArgonMultiSelect.defaultProps = {
  size: "medium",
  error: false,
  success: false,
  disabled: false,
  options: [],
  value: [], // Default value
  onChange: () => {}, // Default change handler
};

// Typechecking props for the ArgonMultiSelect
ArgonMultiSelect.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.array, // Value should be an array for multi-select
  onChange: PropTypes.func, // Handler for value changes
};

export default ArgonMultiSelect;
