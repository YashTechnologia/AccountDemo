// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MakeReceipt from "layouts/receipt/components/MakeReceipt";
import Transactions from "layouts/receipt/components/Transactions";
import { Grid } from "@mui/material";

function Payment() {


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox mt={4}>
                <ArgonBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <MakeReceipt />
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