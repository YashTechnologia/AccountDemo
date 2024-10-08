// // @mui material components
// import Grid from "@mui/material/Grid";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";

// // Billing page components
// import BaseLayout from "layouts/payment/components/BaseLayout";
// import MakePayment from "layouts/payment/components/MakePayment";
// import Transactions from "layouts/billing/components/Transactions";

// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// function Payment() {
//     return (
//         <DashboardLayout>
//             <DashboardNavbar>
//                 {/* <BaseLayout stickyNavbar> */}
//                     <ArgonBox mt={4}>
//                         <ArgonBox mb={3}>
//                             <Grid container spacing={3}>
//                                 <Grid item xs={12} md={7}>
//                                     <MakePayment />
//                                 </Grid>
//                                 <Grid item xs={12} md={5}>
//                                     <Transactions />
//                                 </Grid>
//                             </Grid>
//                         </ArgonBox>
//                     </ArgonBox>
//                 {/* </BaseLayout> */}
//             </DashboardNavbar>
//         </DashboardLayout>
//     );
// }

// export default Payment;





// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MakePayment from "layouts/payment/components/MakePayment";
import Transactions from "layouts/payment/components/Transactions";
import { Grid } from "@mui/material";

function Payment() {


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox mt={4}>
                <ArgonBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <MakePayment />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Transactions />
                        </Grid>
                    </Grid>
                </ArgonBox>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default Payment;
