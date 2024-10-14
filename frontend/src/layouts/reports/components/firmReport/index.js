// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import FormControl from "@mui/material/FormControl";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect

// import { getFirm, getCompleteReport } from "api/apis";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import ArgonTable from "examples/Tables/Table";
// import Icon from "@mui/material/Icon";

// function FirmReport() {
//     const [firms, setFirms] = useState([]);
//     const [selectedFirm, setSelectedFirm] = useState('');
//     const [reports, setReports] = useState([]);

//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const response = await getFirm();
//                 console.log('Fetched data:', response);
//                 setFirms(response.firms[0]);
//             } catch (error) {
//                 console.error("Error fetching firms:", error);
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

//     // Map the reports data to table rows
//     const rows = reports.map(report => ({
//         from: `${report.fromFirmName} - ${report.fromLedgerName}`,
//         to: `${report.toFirmName} - ${report.toLedgerName}`,
//         amount: (
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <span>{report.fromAmount}</span>
//                 <Icon color={report.fromAmount < 0 ? "error" : "success"} style={{ marginLeft: '5px' }}>
//                     {report.fromAmount < 0 ? "arrow_downward" : "arrow_upward"}
//                 </Icon>
//             </div>
//         ),
//     }));

//     return (
//         <DashboardLayout>
//             <DashboardNavbar />
//             <ArgonBox py={3}>
//                 <ArgonBox mb={3}>
//                     <Card>
//                         <ArgonBox mb={2}>
//                             <FormControl fullWidth required>
//                                 <ArgonSelect
//                                     value={selectedFirm}
//                                     onChange={(option) => setSelectedFirm(option)}
//                                     options={firms.map((firm) => ({
//                                         value: firm.firm_id,
//                                         label: firm.firm_name
//                                     }))}
//                                     placeholder="Select a Firm"
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

// export default FirmReport;



import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
import { getFirm, getCompleteReport } from "api/apis";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTable from "examples/Tables/Table";
import Icon from "@mui/material/Icon";

function FirmReport() {
    const [firms, setFirms] = useState([]);
    const [selectedFirm, setSelectedFirm] = useState('');
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getFirm();
                console.log('Fetched data:', response);
                setFirms(response.firms[0]); // Ensure this sets the array correctly
            } catch (error) {
                console.error("Error fetching firms:", error);
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
    const filteredReports = reports.filter(report => (report.fromFirmID === selectedFirm.value) || (report.toFirmID === selectedFirm.value));

    // Map the filtered reports data to table rows
    const rows = filteredReports.map(report => ({
        from: `${report.fromFirmName} - ${report.fromLedgerName}`,
        to: `${report.toFirmName} - ${report.toLedgerName}`,
        amount: (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>{report.fromAmount}</span>
                <Icon color={report.fromAmount < 0 ? "error" : "success"} style={{ marginLeft: '5px' }}>
                    {report.fromAmount < 0 ? "arrow_downward" : "arrow_upward"}
                </Icon>
            </div>
        ),
    }));

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
                                    value={selectedFirm}
                                    onChange={(option) => setSelectedFirm(option)}
                                    options={firms.map((firm) => ({
                                        value: firm.firm_id,
                                        label: firm.firm_name
                                    }))}
                                    placeholder="Select a Firm"
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

export default FirmReport;
