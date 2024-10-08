// // @mui material components
// import Card from "@mui/material/Card";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";

// // Argon Dashboard 2 MUI examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import AddFirm from "layouts/firms/components/AddFirms";
// import ViewFirms from "layouts/firms/components/ViewFirms";

// import { Auth } from "auth";

// const roleId = Auth.getUserRole();

// console.log('id', roleId)

// function Firms() {


//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <ArgonBox mb={3}>
//           <Card>
//             {/* <AddFirm /> */}
//             {roleId === '1' && <AddFirm />} 
//           </Card>
//         </ArgonBox>
//         <Card>
//             <ViewFirms />
//         </Card>
//       </ArgonBox>
//     </DashboardLayout>
//   );
// }

// export default Firms;



import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import AddFirm from "layouts/firms/components/AddFirms";
import ViewFirms from "layouts/firms/components/ViewFirms";
import { Auth } from "auth";

function Firms() {
  const [roleId, setRoleId] = useState(null);

  useEffect(() => {
    const userRole = Auth.getUserRole();
    setRoleId(userRole);
    console.log('id', userRole);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        {/* py={3} */}
        <ArgonBox mb={3}>
          <Card>
            {roleId === '1' && <AddFirm />}
          </Card>
        </ArgonBox>
        <Card >
          <ViewFirms />
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Firms;
