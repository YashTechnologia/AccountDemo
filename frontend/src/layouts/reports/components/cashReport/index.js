import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import ArgonTable from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import ArgonBox from "components/ArgonBox";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
import { getLedger, getCompleteReport } from "api/apis";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function CashReport() {
    const [ledgers, setLedgers] = useState([]);
    const [selectedCash, setSelectedCash] = useState(null); // Set initial value to null
    const [reports, setReports] = useState([]);

    // Fetch ledgers
    useEffect(() => {
        const fetchLedgers = async () => {
            try {
                const response = await getLedger();
                console.log('Fetched ledgers:', response);
                setLedgers(response);
            } catch (error) {
                console.error("Error fetching ledgers:", error);
            }
        };
        fetchLedgers();
    }, []);

    // Fetch reports
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
    const filteredReports = selectedCash
        ? reports.filter(report => 
            report.amountType === "CASH" && 
            (`${report.fromFirmID}-${report.fromLedgerID}` === selectedCash.value || 
             `${report.toFirmID}-${report.toLedgerID}` === selectedCash.value)
          )
        : reports.filter(report => report.amountType === "CASH"); // Show all if no selection

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
                                    value={selectedCash}
                                    onChange={(option) => setSelectedCash(option)}
                                    options={ledgers.map((ledger) => ({
                                        value: `${ledger.Firm_Id}-${ledger.Ledger_Id}`,
                                        label: `${ledger.FirmName} - ${ledger.Ledger_Name}`
                                    }))}
                                    placeholder="Select a Firm-Ledger"
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

export default CashReport;
