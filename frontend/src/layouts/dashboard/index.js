// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonSelect from "components/ArgonSelect";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import Slider from "layouts/dashboard/components/Slider";
// import SalesTable from "examples/Tables/SalesTable";
// import { Auth } from "auth";
// import { getWeeklyTransactionAdmin, getWeeklyTransactionUser, getCompleteReport, getFirm, getAllFirmTransactionAdmin, getAllFirmTransactionUser } from "api/apis";
// import salesTableData from "layouts/dashboard/data/salesTableData";

// function Default() {
//   const [transactionData, setTransactionData] = useState({
//     total_payments: "0.00",
//     total_receipts: "0.00",
//   });
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//   const [roleId, setRoleId] = useState(null);
//   const [selectedFirm, setSelectedFirm] = useState("");
//   const [firms, setFirms] = useState([]);

//   useEffect(() => {
//     const userRole = Auth.getUserRole();
//     setRoleId(userRole);
//   }, []);

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

//   // Fetch weekly transaction data based on role
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let response;
//         if (roleId === 1) {
//           response = await getWeeklyTransactionAdmin();
//         } else {
//           response = await getWeeklyTransactionUser();
//         }

//         const transaction = response.Transactions[0][0];
//         setTransactionData({
//           total_payments: transaction.total_weekly_payments,
//           total_receipts: transaction.total_weekly_receipts,
//           today_money:transaction.total_daily_net_transactions,
//         });
//       } catch (error) {
//         console.error("Error fetching weekly transactions:", error);
//       }
//     }

//     fetchData();
//   }, [roleId]);

//   // Fetch complete report and filter by firm if selected
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getCompleteReport();
//         const transactions = response;

//         // Filter transactions by selected firm
//         const filteredTransactions = selectedFirm
//           ? transactions.filter(tx => tx.fromFirmID === selectedFirm.value || tx.toFirmID === selectedFirm.value)
//           : transactions;

//         // Extract data for chart
//         const labels = filteredTransactions.map(tx => new Date(tx.transactionDate).toLocaleDateString());
//         const fromAmounts = filteredTransactions.map(tx => parseFloat(tx.fromAmount));

//         // Set the chart data
//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: "Amount",
//               color: "info",
//               data: fromAmounts,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching weekly transactions:", error);
//       }
//     }

//     fetchData();
//   }, [selectedFirm]); // Fetch data again when selectedFirm changes

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <Grid container spacing={3} mb={3}>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="Today's Money"
//               count={`₹${transactionData.today_money}`}
//               icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
//               percentage={{ color: "success", text: "since yesterday" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="Total Payment"
//               count={`-₹${transactionData.total_payments}`}
//               icon={{ color: "error", component: <i className="ni ni-world" /> }}
//               percentage={{ color: "success", text: "since last week" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="Total Receipt"
//               count={`+₹${transactionData.total_receipts}`}
//               icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
//               percentage={{ color: "error", text: "since last week" }}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={3} mb={3}>
//           <Grid item xs={12} lg={7}>
//             <div style={{ position: 'relative' }}>
//               <GradientLineChart
//                 title="Transactions Overview"
//                 chart={chartData}
//               />
//               <div style={{ position: 'absolute', top: 10, right: 10 }}>
//                 <ArgonSelect
//                   value={selectedFirm}
//                   onChange={(option) => setSelectedFirm(option)}
//                   options={firms.map((firm) => ({
//                     value: firm.firm_id,
//                     label: firm.firm_name
//                   }))}
//                   placeholder="Select a Firm"
//                 />
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={12} lg={5}>
//             <Slider />
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={12}>
//             <SalesTable title="Today's Firm Transaction" rows={salesTableData} />
//           </Grid>
//         </Grid>
//       </ArgonBox>
//     </DashboardLayout>
//   );
// }

// export default Default;



import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonSelect from "components/ArgonSelect";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Slider from "layouts/dashboard/components/Slider";
import SalesTable from "examples/Tables/SalesTable";
import { Auth } from "auth";
import { getWeeklyTransactionAdmin, getWeeklyTransactionUser, getCompleteReport, getFirm, getAllFirmTransactionAdmin, getAllFirmTransactionUser } from "api/apis";
import salesTableData from "layouts/dashboard/data/salesTableData";

function Default() {
  const [transactionData, setTransactionData] = useState({
    total_payments: "0.00",
    total_receipts: "0.00",
  });
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [roleId, setRoleId] = useState(null);
  const [selectedFirm, setSelectedFirm] = useState("");
  const [firms, setFirms] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const userRole = Auth.getUserRole();
    setRoleId(userRole);
  }, []);

  useEffect(() => {
    const fetchFirms = async () => {
      try {
        const response = await getFirm();
        setFirms(response.firms[0]);
      } catch (error) {
        console.error("Error fetching firms:", error);
      }
    };

    fetchFirms();
  }, []);

  // Fetch weekly transaction data based on role
  useEffect(() => {
    async function fetchData() {
      try {
        let response;
        if (roleId === 1) {
          response = await getWeeklyTransactionAdmin();
        } else {
          response = await getWeeklyTransactionUser();
        }

        const transaction = response.Transactions[0][0];
        setTransactionData({
          total_payments: transaction.total_weekly_payments,
          total_receipts: transaction.total_weekly_receipts,
          today_money: transaction.total_daily_net_transactions,
        });
      } catch (error) {
        console.error("Error fetching weekly transactions:", error);
      }
    }

    fetchData();
  }, [roleId]);

  // Fetch complete report and filter by firm if selected
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCompleteReport();
        const transactions = response;

        // Filter transactions by selected firm
        const filteredTransactions = selectedFirm
          ? transactions.filter(tx => tx.fromFirmID === selectedFirm.value || tx.toFirmID === selectedFirm.value)
          : transactions;

        // Extract data for chart
        const labels = filteredTransactions.map(tx => new Date(tx.transactionDate).toLocaleDateString());
        const fromAmounts = filteredTransactions.map(tx => parseFloat(tx.fromAmount));

        // Set the chart data
        setChartData({
          labels,
          datasets: [
            {
              label: "Amount",
              color: "info",
              data: fromAmounts,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching weekly transactions:", error);
      }
    }

    fetchData();
  }, [selectedFirm]); // Fetch data again when selectedFirm changes

// Fetch firm transactions based on userId
useEffect(() => {
  const userId = localStorage.getItem('userId');
  const fetchFirmTransactions = async () => {
    try {
      let response;
      if (userId === "1") {
        response = await getAllFirmTransactionAdmin();
      } else {
        response = await getAllFirmTransactionUser();
      }
      
      // Assuming the response structure aligns with your requirements
      const formattedData = response.firms[0].map(firm => ({
        firm:  firm.firm_name, // Use firm name
        payment: parseFloat(firm.total_payments), // Total payments instead of sales
        receipt: parseFloat(firm.total_receipts), // Total receipts instead of value
        balance: parseFloat(firm.total_firm_balance), // Total balance instead of bounce
      }));
      console.log('f', response.firms)
      setSalesData(formattedData); // Set the formatted sales data
    } catch (error) {
      console.error("Error fetching firm transactions:", error);
    }
  };

  fetchFirmTransactions();
}, []);


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={4}>
            <DetailedStatisticsCard
              title="Today's Money"
              count={`₹${transactionData.today_money}`}
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", text: "since last 24 hours" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailedStatisticsCard
              title="Total Payment"
              count={`-₹${transactionData.total_payments}`}
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DetailedStatisticsCard
              title="Total Receipt"
              count={`+₹${transactionData.total_receipts}`}
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "error", text: "since last week" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <div style={{ position: 'relative' }}>
              <GradientLineChart
                title="Transactions Overview"
                chart={chartData}
              />
              <div style={{ position: 'absolute', top: 10, right: 10 }}>
                <ArgonSelect
                  value={selectedFirm}
                  onChange={(option) => setSelectedFirm(option)}
                  options={firms.map((firm) => ({
                    value: firm.firm_id,
                    label: firm.firm_name
                  }))}
                  placeholder="Select a Firm"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <SalesTable title="Today's Firm Transaction" rows={salesData} />
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;




// // No dependencies, runs on component mount

// // Fetch weekly transaction data based on role
// useEffect(() => {
//   async function fetchData() {
//     try {
//       let response;
//       if (roleId === 1) {
//         response = await getWeeklyTransactionAdmin();
//       } else {
//         response = await getWeeklyTransactionUser();
//       }

//       const transaction = response.Transactions[0][0];
//       setTransactionData({
//         total_payments: transaction.total_weekly_payments,
//         total_receipts: transaction.total_weekly_receipts,
//         today_money: transaction.total_daily_net_transactions,
//       });
//     } catch (error) {
//       console.error("Error fetching weekly transactions:", error);
//     }
//   }

//   fetchData();
// }, [roleId]);

// // Fetch complete report and filter by firm if selected
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await getCompleteReport();
//       const transactions = response;

//       // Filter transactions by selected firm
//       const filteredTransactions = selectedFirm
//         ? transactions.filter(tx => tx.fromFirmID === selectedFirm.value || tx.toFirmID === selectedFirm.value)
//         : transactions;

//       // Extract data for chart
//       const labels = filteredTransactions.map(tx => new Date(tx.transactionDate).toLocaleDateString());
//       const fromAmounts = filteredTransactions.map(tx => parseFloat(tx.fromAmount));

//       // Set the chart data
//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: "Amount",
//             color: "info",
//             data: fromAmounts,
//           },
//         ],
//       });
//     } catch (error) {
//       console.error("Error fetching weekly transactions:", error);
//     }
//   }

//   fetchData();
// }, [selectedFirm]); // Fetch data again when selectedFirm changes

// return (
//   <DashboardLayout>
//     <DashboardNavbar />
//     <ArgonBox py={3}>
//       <Grid container spacing={3} mb={3}>
//         <Grid item xs={12} md={6} lg={4}>
//           <DetailedStatisticsCard
//             title="Today's Money"
//             count={`₹${transactionData.today_money}`}
//             icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
//             percentage={{ color: "success", text: "since yesterday" }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <DetailedStatisticsCard
//             title="Total Payment"
//             count={`-₹${transactionData.total_payments}`}
//             icon={{ color: "error", component: <i className="ni ni-world" /> }}
//             percentage={{ color: "success", text: "since last week" }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <DetailedStatisticsCard
//             title="Total Receipt"
//             count={`+₹${transactionData.total_receipts}`}
//             icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
//             percentage={{ color: "error", text: "since last week" }}
//           />
//         </Grid>
//       </Grid>
//       <Grid container spacing={3} mb={3}>
//         <Grid item xs={12} lg={7}>
//           <div style={{ position: 'relative' }}>
//             <GradientLineChart
//               title="Transactions Overview"
//               chart={chartData}
//             />
//             <div style={{ position: 'absolute', top: 10, right: 10 }}>
//               <ArgonSelect
//                 value={selectedFirm}
//                 onChange={(option) => setSelectedFirm(option)}
//                 options={firms.map((firm) => ({
//                   value: firm.firm_id,
//                   label: firm.firm_name
//                 }))}
//                 placeholder="Select a Firm"
//               />
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={12} lg={5}>
//           <Slider />
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={12}>
//           {/* Show sales data if userId is 1, otherwise show default salesTableData */}
//           <SalesTable
//             title="Today's Firm Transaction"
//             rows={salesData} // Conditional rendering
//           />
//         </Grid>
//       </Grid>
//     </ArgonBox>
//   </DashboardLayout>
// );
// }

// export default Default;



// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonSelect from "components/ArgonSelect"; // Import ArgonSelect
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import Slider from "layouts/dashboard/components/Slider";
// import SalesTable from "examples/Tables/SalesTable";
// import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
// import salesTableData from "layouts/dashboard/data/salesTableData";
// import categoriesListData from "layouts/dashboard/data/categoriesListData";
// import typography from "assets/theme/base/typography";
// import { Auth } from "auth";

// // Import the API function
// import { getWeeklyTransactionAdmin, getWeeklyTransactionUser, getCompleteReport, getFirm } from "api/apis";

// function Default() {
//   const [transactionData, setTransactionData] = useState({
//     total_payments: "0.00",
//     total_receipts: "0.00",
//   });
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });
//   const [roleId, setRoleId] = useState(null);
//   const [selectValue, setSelectValue] = useState(""); // State for select value

//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ];

//   const [firms, setFirms] = useState([]);
//   const [selectedFirm, setSelectedFirm] = useState("");

//   const { size } = typography;

//   useEffect(() => {
//     const userRole = Auth.getUserRole();
//     setRoleId(userRole);
//     console.log('id', userRole);
//   }, []);

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

//   // Fetch data on component mount
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let response;
//         // Check if user is admin or not
//         if (roleId === 1) {
//           response = await getWeeklyTransactionAdmin(); // Fetch admin transactions
//         } else {
//           response = await getWeeklyTransactionUser(); // Fetch user transactions
//         }

//         const transaction = response.Transactions[0][0];
//         setTransactionData({
//           total_payments: transaction.total_weekly_payments,
//           total_receipts: transaction.total_weekly_receipts,
//           today_money: transaction.total_daily_net_transactions,
//         });
//       } catch (error) {
//         console.error("Error fetching weekly transactions:", error);
//       }
//     }

//     fetchData();
//   }, [roleId]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getCompleteReport();
//         const transactions = response;

//         // Extract data for chart
//         const labels = transactions.map(tx => new Date(tx.transactionDate).toLocaleDateString());
//         const fromAmounts = transactions.map(tx => parseFloat(tx.fromAmount));

//         // Set the chart data
//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: "Amount",
//               color: "info",
//               data: fromAmounts,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching weekly transactions:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <ArgonBox py={3}>
//         <Grid container spacing={3} mb={3}>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="today's money"
//               count={`₹${transactionData.today_money}`}
//               icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
//               percentage={{ color: "success", text: "since yesterday" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="total payment"
//               count={`-₹${transactionData.total_payments}`}
//               icon={{ color: "error", component: <i className="ni ni-world" /> }}
//               percentage={{ color: "success", text: "since last week" }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6} lg={4}>
//             <DetailedStatisticsCard
//               title="total receipt"
//               count={`+₹${transactionData.total_receipts}`}
//               icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
//               percentage={{ color: "error", text: "since last week" }}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={3} mb={3}>
//           <Grid item xs={12} lg={7}>
//             <div style={{ position: 'relative' }}>
//               <GradientLineChart
//                 title="Transactions Overview"
//                 chart={chartData}
//               />
//               <div style={{ position: 'absolute', top: 10, right: 10 }}>
//                 <ArgonSelect
//                   value={selectedFirm}
//                   onChange={(option) => setSelectedFirm(option)}
//                   options={firms.map((firm) => ({
//                     value: firm.firm_id,
//                     label: firm.firm_name
//                   }))}
//                   placeholder="Select a Firm"
//                 />
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={12} lg={5}>
//             <Slider />
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={12}>
//             <SalesTable title="Firms Transaction Data" rows={salesTableData} />
//           </Grid>
//         </Grid>
//       </ArgonBox>
//     </DashboardLayout>
//   );
// }

// export default Default;
