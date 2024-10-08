// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import AddUsers from "layouts/users/components/addUsers";
import ViewUsers from "layouts/users/components/viewUsers";

function Users() {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <AddUsers />
          </Card>
        </ArgonBox>
        <Card>
            <ViewUsers />
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Users;
