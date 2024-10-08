import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Define columns for the firms table
const columns = [
  { name: "id", align: "center" },
  { name: "name", align: "center" },
  { name: "email", align: "center" },
  { name: "address", align: "center" },
  { name: "gstin", align: "center" },
];

// Mock data for firms
const rows = [
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        1
      </ArgonTypography>
    ),
    name: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm A
      </ArgonTypography>
    ),
    email: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        firmA@example.com
      </ArgonTypography>
    ),
    address: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        123 Street A
      </ArgonTypography>
    ),
    gstin: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        GSTIN1234A
      </ArgonTypography>
    ),
  },
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        2
      </ArgonTypography>
    ),
    name: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm B
      </ArgonTypography>
    ),
    email: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        firmB@example.com
      </ArgonTypography>
    ),
    address: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        456 Street B
      </ArgonTypography>
    ),
    gstin: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        GSTIN5678B
      </ArgonTypography>
    ),
  },
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        3
      </ArgonTypography>
    ),
    name: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm C
      </ArgonTypography>
    ),
    email: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        firmC@example.com
      </ArgonTypography>
    ),
    address: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        789 Street C
      </ArgonTypography>
    ),
    gstin: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        GSTIN9012C
      </ArgonTypography>
    ),
  },
];

export default { columns, rows };
