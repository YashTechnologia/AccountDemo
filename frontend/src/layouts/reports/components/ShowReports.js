import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";


import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect


import firmsTableData from "layouts/firms/components/data/viewFirmData";

function ShowReports() {
    const { columns, rows } = firmsTableData; // Import columns and rows from firmsTableData
    const [selectedReport, setSelectedReport] = useState('');

    const reports = ["Firm Report", "Ledger Report", "Cash Report", "Day Book", "Complete Report"];

    const handleReportSubmit = (event) => {
        event.preventDefault();
        console.log({ selectedReport });
    };

    return (

        <ArgonBox py={3}>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                        <ArgonTypography variant="h6"></ArgonTypography>
                    </ArgonBox>

                    <ArgonBox mb={2}>
                        <FormControl fullWidth required>
                            <InputLabel>Select Report</InputLabel>
                            <ArgonSelect
                                value={selectedReport}
                                onChange={(e) => setSelectedReport(e.target.value)}
                                size="large"
                            >
                                {reports.map((reports) => (
                                    <MenuItem key={reports} value={reports}>
                                        {reports}
                                    </MenuItem>
                                ))}
                            </ArgonSelect>
                        </FormControl>
                    </ArgonBox>
                </Card>
            </ArgonBox>
        </ArgonBox>

    );
}

export default ShowReports;
