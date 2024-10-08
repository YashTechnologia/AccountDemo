// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";

// // Argon Dashboard 2 MUI example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


// // Overview page components
// import Header from "layouts/profile/components/Header";

// const bgImage =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

// function Overview() {
//   return (
//     <DashboardLayout
//       // sx={{
//       //   backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
//       //     `${linearGradient(
//       //       rgba(gradients.info.main, 0.6),
//       //       rgba(gradients.info.state, 0.6)
//       //     )}, url(${bgImage})`,
//       //   backgroundPositionY: "50%",
//       // }}
//     >
//       <Header />

//     </DashboardLayout>
//   );
// }

// export default Overview;



// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


// Overview page components
import Header from "layouts/profile/components/Header";

function Overview() {
  return (
    <DashboardLayout>
      <ArgonBox>
        <Header />
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Overview;
