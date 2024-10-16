// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import FormControl from "@mui/material/FormControl";
// import Icon from "@mui/material/Icon";

// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
// import ArgonTable from "examples/Tables/Table";

// import { getLedger, getCompleteReport } from "api/apis";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// function LedgerReport() {
//     const [ledgers, setLedgers] = useState([]);
//     const [selectedLedger, setSelectedLedger] = useState('');
//     const [reports, setReports] = useState([]);


//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const response = await getLedger();
//                 console.log('Fetched data:', response);
//                 setLedgers(response);
//             } catch (error) {
//                 console.error("Error fetching ledgers:", error);
//             }
//         };
//         fetch();
//     }, []);

//     useEffect(() => {
//         const fetchReports = async () => {
//             try {
//                 const response = await getCompleteReport();
//                 console.log('Fetched reports:', response);
//                 setReports(response); // Assuming the report data is in response.data
//             } catch (error) {
//                 console.error("Error fetching reports:", error);
//             }
//         };
//         fetchReports();
//     }, []);

//     // Define the columns for the table
//     const columns = [
//         { name: "from", align: "center" },
//         { name: "to", align: "center" },
//         { name: "amount", align: "center" },
//     ];

//     // Filter reports based on selected firm
//     const filteredReports = reports.filter(report => (report.fromLedgerID === selectedLedger.value) || (report.toLedgerID === selectedLedger.value));

//     // Map the filtered reports data to table rows
//     const rows = filteredReports.map(report => ({
//         from: `${report.fromFirmName} - ${report.fromLedgerName}`,
//         to: `${report.toFirmName} - ${report.toLedgerName}`,
//         amount: (
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <span>{report.Amount}</span>
//                 <Icon color={report.Amount < 0 ? "error" : "success"} style={{ marginLeft: '5px' }}>
//                     {report.Amount < 0 ? "arrow_downward" : "arrow_upward"}
//                 </Icon>
//             </div>
//         ),
//     }));

//     return (
//         <DashboardLayout>
//             <DashboardNavbar />
//             <ArgonBox 
//                 py={3}
//                 sx={{
//                     maxHeight: '800px', // Set a maximum height
//                     overflowY: 'auto', // Enable vertical scrolling
//                 }}
//             >
//                 <ArgonBox mb={3}>
//                     <Card>
//                         <ArgonBox mb={2}>
//                             <FormControl fullWidth required>
//                                 <ArgonSelect
//                                     value={selectedLedger}
//                                     onChange={(option) => setSelectedLedger(option)}
//                                     options={ledgers.map((ledger) => ({
//                                         value: ledger.Ledger_Id,
//                                         label: ledger.Ledger_Name
//                                     }))}
//                                     placeholder="Select a Ledger"
//                                 />
//                             </FormControl>
//                         </ArgonBox>
//                         <ArgonBox>
//                             <ArgonTable columns={columns} rows={rows} />
//                         </ArgonBox>
//                     </Card>
//                 </ArgonBox>
//             </ArgonBox>
//         </DashboardLayout>
//     );
// }

// export default LedgerReport;




import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import Icon from "@mui/material/Icon";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
import ArgonTable from "examples/Tables/Table";

import { getLedger, getCompleteReport } from "api/apis";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function LedgerReport() {
    const [ledgers, setLedgers] = useState([]);
    const [selectedLedger, setSelectedLedger] = useState('');
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getLedger();
                console.log('Fetched data:', response);
                
                // Filter out repeated ledger names
                const uniqueLedgers = response.filter((ledger, index, self) =>
                    index === self.findIndex((l) => l.Ledger_Name === ledger.Ledger_Name)
                );
                setLedgers(uniqueLedgers);
            } catch (error) {
                console.error("Error fetching ledgers:", error);
            }
        };
        fetch();
    }, []);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await getCompleteReport();
                console.log('Fetched reports:', response);
                setReports(response); // Assuming the report data is in response.data
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };
        fetchReports();
    }, []);

    // Define the columns for the table
    const columns = [
        { name: "from", align: "center" },
        { name: "to", align: "center" },
        { name: "amount", align: "center" },
    ];

    // Filter reports based on selected firm
    const filteredReports = reports.filter(report => (report.reportEntry.fromLedgerName === selectedLedger.value) || (report.reportEntry.toLedgerName === selectedLedger.value));

    // Map the filtered reports data to table rows
    const rows = filteredReports.map(report => {
        const entry = report.reportEntry; // Accessing the nested reportEntry
        return {
            from: `${entry.fromFirmName} - ${entry.fromLedgerName}`,
            to: `${entry.toFirmName} - ${entry.toLedgerName}`,
            amount: (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>{entry.Amount}</span>
                    <Icon color={entry.Amount < 0 ? "error" : "success"} style={{ marginLeft: '5px' }}>
                        {entry.Amount < 0 ? "arrow_downward" : "arrow_upward"}
                    </Icon>
                </div>
            ),
        };
    });

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox 
                py={3}
                sx={{
                    maxHeight: '800px', // Set a maximum height
                    overflowY: 'auto', // Enable vertical scrolling
                }}
            >
                <ArgonBox mb={3}>
                    <Card>
                        <ArgonBox mb={2}>
                            <FormControl fullWidth required>
                                <ArgonSelect
                                    value={selectedLedger}
                                    onChange={(option) => setSelectedLedger(option)}
                                    options={ledgers.map((ledger) => ({
                                        value: ledger.Ledger_Name,
                                        label: ledger.Ledger_Name
                                    }))}
                                    placeholder="Select a Ledger"
                                />
                            </FormControl>
                        </ArgonBox>
                        <ArgonBox>
                            <ArgonTable columns={columns} rows={rows} />
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default LedgerReport;
