import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Define columns for the ledger table
const ledgerColumns = [
  { name: "id", align: "center" },
  { name: "ledgerName", align: "center" },
  { name: "openingBalance", align: "center" },
  { name: "isCash", align: "center" },
  { name: "firmName", align: "center" },
];

// Mock data for ledgers
const ledgerRows = [
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        1
      </ArgonTypography>
    ),
    ledgerName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Ledger A
      </ArgonTypography>
    ),
    openingBalance: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        $500
      </ArgonTypography>
    ),
    isCash: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Yes
      </ArgonTypography>
    ),
    firmName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm A
      </ArgonTypography>
    ),
  },
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        2
      </ArgonTypography>
    ),
    ledgerName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Ledger B
      </ArgonTypography>
    ),
    openingBalance: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        $300
      </ArgonTypography>
    ),
    isCash: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        No
      </ArgonTypography>
    ),
    firmName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm B
      </ArgonTypography>
    ),
  },
  {
    id: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        3
      </ArgonTypography>
    ),
    ledgerName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Ledger C
      </ArgonTypography>
    ),
    openingBalance: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        $700
      </ArgonTypography>
    ),
    isCash: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Yes
      </ArgonTypography>
    ),
    firmName: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Firm C
      </ArgonTypography>
    ),
  },
];

export default { ledgerColumns, ledgerRows };
