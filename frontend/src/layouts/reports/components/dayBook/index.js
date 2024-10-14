import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import ArgonBox from "components/ArgonBox";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect
import { getFirm, getCompleteReport } from "api/apis";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTable from "examples/Tables/Table";
import Icon from "@mui/material/Icon";

function DayBook() {
    const [firms, setFirms] = useState([]);
    const [selectedDay, setSelectedDay] = useState('');
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getFirm();
                console.log('Fetched firms:', response);
                setFirms(response.firms[0]); // Assuming the firms array is the first element
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

    // Get today's date in the required format (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];

    

    // Filter reports based on today's date and selected firm
    const filteredReports = reports.filter(report => {
        const reportDate = new Date(report.transactionDate).toISOString().split('T')[0];
        console.log('today', today, reportDate)
        const isToday = (reportDate === today);
        const isFirmSelected = selectedDay ? 
            (report.fromFirmID === selectedDay.value || report.toFirmID === selectedDay.value) : true;

        return isToday && isFirmSelected;
    });

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
                                    value={selectedDay}
                                    onChange={(option) => setSelectedDay(option)}
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

export default DayBook;
