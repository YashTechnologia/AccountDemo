// import React, { useState, useEffect } from "react";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
// import Card from "@mui/material/Card";
// import FormControl from "@mui/material/FormControl";
// import { getFirm, getCompleteReport } from "api/apis";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import ArgonTable from "examples/Tables/Table";
// import Icon from "@mui/material/Icon";
// import ArgonButton from "components/ArgonButton";

// function CompleteReport() {
//     const [firms, setFirms] = useState([]);
//     const [selectedComplete, setSelectedComplete] = useState('');
//     const [reports, setReports] = useState([]);

//     useEffect(() => {
//         const fetchFirms = async () => {
//             try {
//                 const response = await getFirm();
//                 console.log('Fetched firms:', response);
//                 setFirms(response.firms[0]);
//             } catch (error) {
//                 console.error("Error fetching firms:", error);
//             }
//         };
//         fetchFirms();
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
//         // { name: "direction", align: "center" },
//     ];

//     // Map the reports data to table rows
//     const rows = reports.map(report => ({
//         from: `${report.fromFirmName} - ${report.fromLedgerName}`,
//         to: `${report.toFirmName} - ${report.toLedgerName}`,
//         // amount: report.fromAmount,
//         // direction: (
//         //     <Icon color={report.fromAmount < 0 ? "error" : "success"}>
//         //         {report.fromAmount < 0 ? "arrow_downward" : "arrow_upward"}
//         //     </Icon>
//         // ),
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
//                         <ArgonBox>
//                             <ArgonTable columns={columns} rows={rows} />
//                         </ArgonBox>
//                     </Card>
//                 </ArgonBox>
//             </ArgonBox>
//         </DashboardLayout>
//     );
// }

// export default CompleteReport;



import React, { useState, useEffect } from "react";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
import Card from "@mui/material/Card";
import { getFirm, getCompleteReport } from "api/apis";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTable from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import ArgonButton from "components/ArgonButton";

function CompleteReport() {
    const [firms, setFirms] = useState([]);
    const [selectedComplete, setSelectedComplete] = useState('');
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchFirms = async () => {
            try {
                const response = await getFirm();
                console.log('Fetched firms:', response);
                setFirms(response.firms[0]);
            } catch (error) {
                console.error("Error fetching firms:", error);
            }
        };
        fetchFirms();
    }, []);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await getCompleteReport();
                console.log('Fetched reports:', response);
                setReports(response); // Assuming the report data is in response
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

    // Map the reports data to table rows
    const rows = reports.map(report => {
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
                        <ArgonBox>
                            <ArgonTable columns={columns} rows={rows} />
                        </ArgonBox>
                    </Card>
                </ArgonBox>
            </ArgonBox>
        </DashboardLayout>
    );
}

export default CompleteReport;


// import React, { useEffect, useState } from "react";
// import { FormControl } from "@mui/material";
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import { getFirm, getCompleteReport } from "api/apis"; // Assuming getCompleteReport is an API call

// import ArgonBox from "components/ArgonBox";
// import ArgonSelect from "components/ArgonSelect";
// import ArgonTypography from "components/ArgonTypography";
// import ReportHistory from "layouts/payment/components/PaymentHistory"
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// function CompleteReport() {
//   const [firms, setFirms] = useState([]);
//   const [selectedFirm, setSelectedFirm] = useState('');
//   const [reports, setReports] = useState([]); // State for complete reports
//   const [error, setError] = useState(null); // Set error to null initially

//   useEffect(() => {
//     const fetchFirms = async () => {
//       try {
//         const response = await getFirm();
//         setFirms(response.firms[0]);
//       } catch (error) {
//         console.error("Error fetching firms:", error);
//       }
//     };

//     fetchFirms();
//   }, []);

//   // Effect to fetch complete reports when selectedFirm changes
//   useEffect(() => {
//     const fetchReports = async () => {
//         try {
//             const response = await getCompleteReport();
//             console.log('Fetched reports:', response);
//             setReports(response); // Assuming the report data is in response.data
//         } catch (error) {
//             console.error("Error fetching reports:", error);
//         }
//     };
//     fetchReports();
// }, []);

//   return (
//     <DashboardLayout>
//         <DashboardNavbar/>
//     <Card sx={{ height: "100%" }}>
//       <ArgonBox>
//         <FormControl fullWidth required>
//           <ArgonSelect
//             value={selectedFirm}
//             onChange={(option) => setSelectedFirm(option)}
//             options={firms.map((firm) => ({
//               value: `${firm.firm_id}`,
//               label: `${firm.firm_name}`
//             }))}
//             placeholder="Select a Firm"
//           />
//         </FormControl>
//       </ArgonBox>
//       <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
//         <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
//           Complete Report
//         </ArgonTypography>
//         <ArgonBox display="flex" alignItems="flex-start">
//           <ArgonBox color="text" mr={0.5} lineHeight={0}>
//             <Icon color="inherit" fontSize="small">
//               date_range
//             </Icon>
//           </ArgonBox>
//           <ArgonTypography variant="button" color="text" fontWeight="regular">
//             {new Date().toLocaleDateString()} {/* Display current date */}
//           </ArgonTypography>
//         </ArgonBox>
//       </ArgonBox>
//       <ArgonBox
//         pt={3}
//         pb={2}
//         px={2}
//         sx={{
//           maxHeight: '600px', // Set a maximum height
//           overflowY: 'auto', // Enable vertical scrolling
//         }}
//       >
//         <ArgonBox
//           component="ul"
//           display="flex"
//           flexDirection="column"
//           p={0}
//           m={0}
//           sx={{ listStyle: "none" }}
//         >
//           {error ? (
//             <ArgonTypography variant="caption" color="text" fontWeight="regular">
//               {error}
//             </ArgonTypography>
//           ) : reports.length > 0 ? (
//             reports.map((report) => (
//               <ReportHistory
//                 key={report.reportID} // Use a unique key
//                 color={report.amount < 0 ? "error" : "success"} // Change color based on amount
//                 icon={report.amount < 0 ? "arrow_downward" : "arrow_upward"} // Change icon based on amount
//                 name={`${report.firmName} (${report.ledgerName})`} // Display Firm and Ledger names
//                 description={`${new Date(report.dateTime).toLocaleString()}`} // Format date
//                 value={`${report.amount < 0 ? '-' : '+'} ₹${Math.abs(report.amount).toFixed(2)}`} // Display formatted amount
//               />
//             ))
//           ) : (
//             <ArgonTypography variant="caption" color="text" fontWeight="regular">
//               No reports available.
//             </ArgonTypography>
//           )}
//         </ArgonBox>
//       </ArgonBox>
//     </Card>
//     </DashboardLayout>
//   );
// }

// export default CompleteReport;
