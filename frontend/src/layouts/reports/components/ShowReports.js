import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect"; // Import your custom ArgonSelect

import { getFirm } from "api/apis";
import { getLedger } from "api/apis";

function ShowReports() {
    const [selectedReport, setSelectedReport] = useState('');
    const [firms, setFirms] = useState([]);
    const [selectedFirm, setSelectedFirm] = useState('');
    const [ledgers, setLedgers] = useState([]);
    const [selectedLedger, setSelectedLedger] = useState('');
    const [selectedCash, setSelectedCash] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedComplete, setSelectedComplete] = useState('');

    // Define reports with IDs
    const reports = [
        { id: 1, name: "Firm Report" },
        { id: 2, name: "Ledger Report" },
        { id: 3, name: "Cash Report" },
        { id: 4, name: "Day Book" },
        { id: 5, name: "Complete Report" }
    ];

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getFirm();
                console.log('Fetched data:', response);
                setFirms(response.firms[0]);
            } catch (error) {
                console.error("Error fetching firms:", error);
            }
        };
        fetch();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await getLedger();
                console.log('Fetched data:', response);
                setLedgers(response);
            } catch (error) {
                console.error("Error fetching ledgers:", error);
            }
        };
        fetch();
    }, []);

    const handleReportSubmit = (event) => {
        event.preventDefault();
        console.log({ selectedReport });
    };

    return (
        <ArgonBox py={3}>
            <ArgonBox mb={3}>
                <Card>
                    <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                        <ArgonTypography variant="h6">Select a Report</ArgonTypography>
                    </ArgonBox>

                    <ArgonBox mb={2}>
                        <FormControl fullWidth required>
                            <ArgonSelect
                                value={selectedReport}
                                onChange={(option) => setSelectedReport(option)}
                                options={reports.map((report) => ({
                                    value: report.id, // Set the report ID as the value
                                    label: report.name // Display the report name
                                }))}
                                placeholder="Select a Report"
                            />
                        </FormControl>
                    </ArgonBox>
                    {selectedReport.value == "1" && (
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
                    )}
                    {selectedReport.value == "2" && (
                        <ArgonBox mb={2}>
                            <FormControl fullWidth required>
                                <ArgonSelect
                                    value={selectedLedger}
                                    onChange={(option) => setSelectedLedger(option)}
                                    options={ledgers.map((ledger) => ({
                                        value: ledger.Ledger_Id,
                                        label: ledger.Ledger_Name
                                    }))}
                                    placeholder="Select a Ledger"
                                />
                            </FormControl>
                        </ArgonBox>
                    )}
                    {selectedReport.value == "3" && (
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
                    )}
                    {selectedReport.value == "4" && (
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
                    )}
                    {selectedReport.value == "5" && (
                        <ArgonBox mb={2}>
                            <FormControl fullWidth required>
                                <ArgonSelect
                                    value={selectedComplete}
                                    onChange={(option) => setSelectedComplete(option)}
                                    options={firms.map((firm) => ({
                                        value: firm.firm_id,
                                        label: firm.firm_name
                                    }))}
                                    placeholder="Select a Firm"
                                />
                            </FormControl>
                        </ArgonBox>
                    )}

                </Card>
            </ArgonBox>
        </ArgonBox>
    );
}

export default ShowReports;
