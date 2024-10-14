// import { useState, useEffect, lazy } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";

// // Argon Dashboard 2 MUI example components
// import Sidenav from "examples/Sidenav";
// import Configurator from "examples/Configurator";

// // Argon Dashboard 2 MUI themes
// import theme from "assets/theme";
// import themeDark from "assets/theme-dark";

// // Argon Dashboard 2 MUI routes
// import sidebar from "sidebar";

// // Argon Dashboard 2 MUI contexts
// import { useArgonController, setMiniSidenav } from "context";

// // Images
// import brand from "assets/images/logo.png";
// import brandDark from "assets/images/logo.png";

// // Icon Fonts
// import "assets/css/nucleo-icons.css";
// import "assets/css/nucleo-svg.css";

// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// import Profile from "layouts/profile";
// import Firm from "layouts/firms";

// export default function Router() {
//   const [controller, dispatch] = useArgonController();
//   const { miniSidenav, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
//     controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const { pathname } = useLocation(); // Access the current path

//   // Open sidenav when mouse enters mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leaves mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };


//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }

//       return null;
//     });

//   const hideSidebarPaths = ["/authentication/sign-up", "/authentication/sign-in", "/signin", "/signup"];

//   return (
//     <ThemeProvider theme={darkMode ? themeDark : theme}>
//       <CssBaseline />
//       {layout === "dashboard" && !hideSidebarPaths.includes(pathname) && (

//         <>
//           <Sidenav
//             color={sidenavColor}
//             brand={darkSidenav || darkMode ? brand : brandDark}
//             brandName="Tekhno Accounting"
//             routes={sidebar}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//         </>
//       )}
//       {layout === "vr" && <Configurator />}
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/firms" element={<Firm />} />

//         {getRoutes(sidebar)}

//         {/* Dashboard route */}
//         <Route path="/dashboard" element={<Navigate to="/dashboard" />} />

//         <Route path="*" element={<SignIn />} />

//       </Routes>
//     </ThemeProvider>
//   );
// }



// import { useState, useEffect, lazy } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";

// // Argon Dashboard 2 MUI example components
// import Sidenav from "examples/Sidenav";
// import Configurator from "examples/Configurator";

// // Argon Dashboard 2 MUI themes
// import theme from "assets/theme";
// import themeDark from "assets/theme-dark";

// // Argon Dashboard 2 MUI routes
// import sidebar from "sidebar";

// // Argon Dashboard 2 MUI contexts
// import { useArgonController, setMiniSidenav } from "context";

// // Images
// import brand from "assets/images/logo.png";
// import brandDark from "assets/images/logo.png";

// // Icon Fonts
// import "assets/css/nucleo-icons.css";
// import "assets/css/nucleo-svg.css";

// import Dashboard from "layouts/dashboard";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// import Profile from "layouts/profile";
// import Firm from "layouts/firms";

// import ProtectedRoute from "./ProtectedRoute";  // Import your ProtectedRoute component
// import Ledgers from "layouts/ledgers";
// import Users from "layouts/users";
// import Payment from "layouts/payment";
// import Receipt from "layouts/receipt";
// import Reports from "layouts/reports";
// import FirmReport from "layouts/reports/components/firmReport";
// import LedgerReport from "layouts/reports/components/ledgerReport";
// import CashReport from "layouts/reports/components/cashReport";
// import DayBook from "layouts/reports/components/dayBook";
// import CompleteReport from "layouts/reports/components/completeReport";

// export default function Router() {
//   const [controller, dispatch] = useArgonController();
//   const { miniSidenav, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
//     controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const { pathname } = useLocation(); // Access the current path

//   // Open sidenav when mouse enters mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leaves mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };


//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }

//       return null;
//     });

//   const hideSidebarPaths = ["/authentication/sign-up", "/authentication/sign-in", "/signin", "/signup"];

//   return (
//     <ThemeProvider theme={darkMode ? themeDark : theme}>
//       <CssBaseline />
//       {layout === "dashboard" && !hideSidebarPaths.includes(pathname) && (

//         <>
//           <Sidenav
//             color={sidenavColor}
//             brand={darkSidenav || darkMode ? brand : brandDark}
//             brandName="Tekhno Accounting"
//             routes={sidebar}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//         </>
//       )}
//       {layout === "vr" && <Configurator />}
      
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />

//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/firms" element={<ProtectedRoute><Firm /></ProtectedRoute>} />
//         <Route path="/ledgers" element={<ProtectedRoute><Ledgers /></ProtectedRoute>} />
//         <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
//         <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
//         <Route path="/receipt" element={<ProtectedRoute><Receipt /></ProtectedRoute>} />
//         <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
//         <Route path="/reports/firmReport" element={<ProtectedRoute><FirmReport /></ProtectedRoute>} />
//         <Route path="/reports/ledgerReport" element={<ProtectedRoute><LedgerReport /></ProtectedRoute>} />
//         <Route path="/reports/cashReport" element={<ProtectedRoute><CashReport /></ProtectedRoute>} />
//         <Route path="/reports/dayBook" element={<ProtectedRoute><DayBook /></ProtectedRoute>} />
//         <Route path="/reports/completeReport" element={<ProtectedRoute><CompleteReport /></ProtectedRoute>} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />

//         {getRoutes(sidebar)}

//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />

//         <Route path="*" element={<SignIn />} />
//       </Routes>

//     </ThemeProvider>
//   );
// }



// import { useState, useEffect, lazy, useMemo } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";

// // Argon Dashboard 2 MUI example components
// import Sidenav from "examples/Sidenav";
// import Configurator from "examples/Configurator";

// // Argon Dashboard 2 MUI themes
// import theme from "assets/theme";
// import themeDark from "assets/theme-dark";

// // Argon Dashboard 2 MUI routes
// import sidebar from "sidebar";

// // Argon Dashboard 2 MUI contexts
// import { useArgonController, setMiniSidenav } from "context";

// // Images
// import brand from "assets/images/logo.png";
// import brandDark from "assets/images/logo.png";

// // Icon Fonts
// import "assets/css/nucleo-icons.css";
// import "assets/css/nucleo-svg.css";

// import Dashboard from "layouts/dashboard";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
// import Profile from "layouts/profile";
// import Firm from "layouts/firms";

// import ProtectedRoute from "./ProtectedRoute";  // Import your ProtectedRoute component
// import Ledgers from "layouts/ledgers";
// import Users from "layouts/users";
// import Payment from "layouts/payment";
// import Receipt from "layouts/receipt";
// import Reports from "layouts/reports";
// import FirmReport from "layouts/reports/components/firmReport";
// import LedgerReport from "layouts/reports/components/ledgerReport";
// import CashReport from "layouts/reports/components/cashReport";
// import DayBook from "layouts/reports/components/dayBook";
// import CompleteReport from "layouts/reports/components/completeReport";

// export default function Router() {
//   const [controller, dispatch] = useArgonController();
//   const { miniSidenav, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
//     controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const { pathname } = useLocation(); // Access the current path

//   // Open sidenav when mouse enters mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leaves mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };


//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) => {
//     return useMemo(() => 
//       allRoutes.map((route) => {
//         if (route.collapse) {
//           return getRoutes(route.collapse);
//         }
  
//         if (route.route) {
//           return (
//             <Route exact path={route.route} element={route.component} key={route.key} />
//           );
//         }
  
//         return null;
//       }), [allRoutes]);
//   };

//   const hideSidebarPaths = ["/authentication/sign-up", "/authentication/sign-in", "/signin", "/signup"];

//   return (
//     <ThemeProvider theme={darkMode ? themeDark : theme}>
//       <CssBaseline />
//       {layout === "dashboard" && !hideSidebarPaths.includes(pathname) && (

//         <>
//           <Sidenav
//             color={sidenavColor}
//             brand={darkSidenav || darkMode ? brand : brandDark}
//             brandName="Tekhno Accounting"
//             routes={sidebar}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//         </>
//       )}
//       {layout === "vr" && <Configurator />}
      
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />

//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//         <Route path="/firms" element={<ProtectedRoute><Firm /></ProtectedRoute>} />
//         <Route path="/ledgers" element={<ProtectedRoute><Ledgers /></ProtectedRoute>} />
//         <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
//         <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
//         <Route path="/receipt" element={<ProtectedRoute><Receipt /></ProtectedRoute>} />
//         <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
//         <Route path="/reports/firmReport" element={<ProtectedRoute><FirmReport /></ProtectedRoute>} />
//         <Route path="/reports/ledgerReport" element={<ProtectedRoute><LedgerReport /></ProtectedRoute>} />
//         <Route path="/reports/cashReport" element={<ProtectedRoute><CashReport /></ProtectedRoute>} />
//         <Route path="/reports/dayBook" element={<ProtectedRoute><DayBook /></ProtectedRoute>} />
//         <Route path="/reports/completeReport" element={<ProtectedRoute><CompleteReport /></ProtectedRoute>} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />

//         {getRoutes(sidebar)}

//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />

//         <Route path="*" element={<SignIn />} />
//       </Routes>

//     </ThemeProvider>
//   );
// }




import { useState, useEffect, lazy, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Argon Dashboard 2 MUI themes
import theme from "assets/theme";
import themeDark from "assets/theme-dark";

// Argon Dashboard 2 MUI routes
import sidebar from "sidebar"; // Ensure this is imported from the right location

// Argon Dashboard 2 MUI contexts
import { useArgonController, setMiniSidenav } from "context";

// Images
import brand from "assets/images/logo.png";
import brandDark from "assets/images/logo.png";

// Icon Fonts
import "assets/css/nucleo-icons.css";
import "assets/css/nucleo-svg.css";

import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Profile from "layouts/profile";
import Firm from "layouts/firms";

import ProtectedRoute from "./ProtectedRoute";  // Import your ProtectedRoute component
import Ledgers from "layouts/ledgers";
import Users from "layouts/users";
import Payment from "layouts/payment";
import Receipt from "layouts/receipt";
import Reports from "layouts/reports";
import FirmReport from "layouts/reports/components/firmReport";
import LedgerReport from "layouts/reports/components/ledgerReport";
import CashReport from "layouts/reports/components/cashReport";
import DayBook from "layouts/reports/components/dayBook";
import CompleteReport from "layouts/reports/components/completeReport";

// Function to filter sidebar items based on user role
const filterRoutesByRole = (routes) => {
  const roleId = localStorage.getItem('roleId');
  console.log('role', roleId);
  
  return routes.filter(route => {
    if (route.key === "users") {
      return roleId === "1"; // Only allow users route for roleId 1
    }
    return true; // Show other routes for all roles
  });
};

export default function Router() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation(); // Access the current path

  // Open sidenav when mouse enters mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leaves mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) => {
    return useMemo(() => 
      allRoutes.map((route) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return (
            <Route exact path={route.route} element={route.component} key={route.key} />
          );
        }

        return null;
      }), [allRoutes]);
  };

  const filteredRoutes = filterRoutesByRole(sidebar);
  
  const hideSidebarPaths = ["/authentication/sign-up", "/authentication/sign-in", "/signin", "/signup"];

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && !hideSidebarPaths.includes(pathname) && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={darkSidenav || darkMode ? brand : brandDark}
            brandName="Tekhno Accounting"
            routes={filteredRoutes} // Pass filtered routes to the sidebar
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
        </>
      )}
      {layout === "vr" && <Configurator />}
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/firms" element={<ProtectedRoute><Firm /></ProtectedRoute>} />
        <Route path="/ledgers" element={<ProtectedRoute><Ledgers /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/receipt" element={<ProtectedRoute><Receipt /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/reports/firmReport" element={<ProtectedRoute><FirmReport /></ProtectedRoute>} />
        <Route path="/reports/ledgerReport" element={<ProtectedRoute><LedgerReport /></ProtectedRoute>} />
        <Route path="/reports/cashReport" element={<ProtectedRoute><CashReport /></ProtectedRoute>} />
        <Route path="/reports/dayBook" element={<ProtectedRoute><DayBook /></ProtectedRoute>} />
        <Route path="/reports/completeReport" element={<ProtectedRoute><CompleteReport /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        {getRoutes(filteredRoutes)} {/* Render filtered routes here */}

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="*" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}
