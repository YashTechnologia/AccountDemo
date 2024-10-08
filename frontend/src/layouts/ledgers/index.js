// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import AddLedger from "layouts/ledgers/components/addLedger";
import ViewLedgers from "layouts/ledgers/components/viewLedgers";

function Ledgers() {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <AddLedger />
          </Card>
        </ArgonBox>
        <Card>
            <ViewLedgers />
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Ledgers;
