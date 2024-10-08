import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const ArgonMultiSelectRoot = styled((props) => (
  <Select
    {...props}
    multiple
    renderValue={(selected) => selected.map((value) => value.name).join(', ')} // Change value.label to value.name
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 48 * 4.5 + 8, // Limit height for scroll
          width: 250,
        },
      },
    }}
  >
    {props.options.map((option) => (
      <MenuItem key={option.id} value={option}> {/* Change option.value to option.id */}
        <Checkbox checked={props.value.some(val => val.id === option.id)} /> {/* Check if the option is selected */}
        <ListItemText primary={option.name} /> {/* Change option.label to option.name */}
      </MenuItem>
    ))}
  </Select>
))(({ theme }) => ({
  // Custom styles here
  backgroundColor: theme.palette.background.paper,
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
  },
}));

export default ArgonMultiSelectRoot;
