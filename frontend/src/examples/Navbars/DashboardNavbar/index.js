// import { useState, useEffect } from "react";

// // react-router components
// import { useLocation, Link } from "react-router-dom";

// // prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// import Switch from "@mui/material/Switch";

// // @mui core components
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import Icon from "@mui/material/Icon";

// // Argon Dashboard 2 MUI components
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput";

// // Argon Dashboard 2 MUI example components
// import Breadcrumbs from "examples/Breadcrumbs";
// import NotificationItem from "examples/Items/NotificationItem";

// // Custom styles for DashboardNavbar
// import {
//   navbar,
//   navbarContainer,
//   navbarRow,
//   navbarIconButton,
//   navbarDesktopMenu,
//   navbarMobileMenu,
// } from "examples/Navbars/DashboardNavbar/styles";

// // Argon Dashboard 2 MUI context
// import {
//   useArgonController,
//   setTransparentNavbar,
//   setMiniSidenav,
//   setOpenConfigurator,
//   setDarkSidenav,
//   setDarkMode,
// } from "context";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

// function DashboardNavbar({ absolute, light, isMini }) {
//   const [navbarType, setNavbarType] = useState();
//   const [controller, dispatch] = useArgonController();
//   const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
//   const [openMenu, setOpenMenu] = useState(false);
//   const route = useLocation().pathname.split("/").slice(1);

//   const handleDarkMode = () => {
//     setDarkSidenav(dispatch, !darkMode);
//     setDarkMode(dispatch, !darkMode);
//   };

//   useEffect(() => {
//     // Setting the navbar type
//     if (fixedNavbar) {
//       setNavbarType("sticky");
//     } else {
//       setNavbarType("static");
//     }

//     // A function that sets the transparent state of the navbar.
//     function handleTransparentNavbar() {
//       setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
//     }

//     /** 
//      The event listener that's calling the handleTransparentNavbar function when 
//      scrolling the window.
//     */
//     window.addEventListener("scroll", handleTransparentNavbar);

//     // Call the handleTransparentNavbar function to set the state with the initial value.
//     handleTransparentNavbar();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("scroll", handleTransparentNavbar);
//   }, [dispatch, fixedNavbar]);

//   const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
//   const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
//   const handleCloseMenu = () => setOpenMenu(false);

//   // Render the notifications menu
//   const renderMenu = () => (
//     <Menu
//       anchorEl={openMenu}
//       anchorReference={null}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//       open={Boolean(openMenu)}
//       onClose={handleCloseMenu}
//       sx={{ mt: 2 }}
//     >
//       <NotificationItem
//         image={<img src={team2} alt="person" />}
//         title={["New message", "from Laur"]}
//         date="13 minutes ago"
//         onClick={handleCloseMenu}
//       />
//       <NotificationItem
//         image={<img src={logoSpotify} alt="person" />}
//         title={["New album", "by Travis Scott"]}
//         date="1 day"
//         onClick={handleCloseMenu}
//       />
//       <NotificationItem
//         color="secondary"
//         image={
//           <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
//             payment
//           </Icon>
//         }
//         title={["", "Payment successfully completed"]}
//         date="2 days"
//         onClick={handleCloseMenu}
//       />
//     </Menu>
//   );

//   return (
//     <AppBar
//       position={absolute ? "absolute" : navbarType}
//       color="inherit"
//       sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
//     >
//       <Toolbar sx={(theme) => navbarContainer(theme, { navbarType })}>
//         <ArgonBox
//           color={light && transparentNavbar ? "white" : "dark"}
//           mb={{ xs: 1, md: 0 }}
//           sx={(theme) => navbarRow(theme, { isMini })}
//         >
//           <Breadcrumbs
//             icon="home"
//             title={route[route.length - 1]}
//             route={route}
//             light={transparentNavbar ? light : false}
//           />
//           <Icon fontSize="medium" sx={navbarDesktopMenu} onClick={handleMiniSidenav}>
//             {miniSidenav ? "menu_open" : "menu"}
//           </Icon>
//         </ArgonBox>
//         {isMini ? null : (
//           <ArgonBox sx={(theme) => navbarRow(theme, { isMini })}>
//             <ArgonBox display="flex" justifyContent="space-between" lineHeight={1}>
//               <ArgonTypography variant="h6">Light / Dark</ArgonTypography>

//               <Switch checked={darkMode} onChange={handleDarkMode} />
//             </ArgonBox>
//             <ArgonBox color={light ? "white" : "inherit"}>
//               <IconButton
//                 size="small"
//                 color={light && transparentNavbar ? "white" : "dark"}
//                 sx={navbarMobileMenu}
//                 onClick={handleMiniSidenav}
//               >
//                 <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
//               </IconButton>
//               <IconButton
//                 size="small"
//                 color={light && transparentNavbar ? "white" : "dark"}
//                 sx={navbarIconButton}
//                 onClick={handleConfiguratorOpen}
//               >
//                 <Icon>settings</Icon>
//               </IconButton>
//               <IconButton
//                 size="small"
//                 color={light && transparentNavbar ? "white" : "dark"}
//                 sx={navbarIconButton}
//                 aria-controls="notification-menu"
//                 aria-haspopup="true"
//                 variant="contained"
//                 onClick={handleOpenMenu}
//               >
//                 <Icon>notifications</Icon>
//               </IconButton>
//               {renderMenu()}
//             </ArgonBox>
//           </ArgonBox>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// // Setting default values for the props of DashboardNavbar
// DashboardNavbar.defaultProps = {
//   absolute: false,
//   light: true,
//   isMini: false,
// };

// // Typechecking props for the DashboardNavbar
// DashboardNavbar.propTypes = {
//   absolute: PropTypes.bool,
//   light: PropTypes.bool,
//   isMini: PropTypes.bool,
// };

// export default DashboardNavbar;


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import Avatar from "@mui/material/Avatar"; // Import Avatar
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";
import {
  useArgonController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
  setDarkSidenav,
  setDarkMode,
} from "context";

import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

import Profile from "layouts/profile";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  // Add state for user avatar
  const [userAvatar, setUserAvatar] = useState("path/to/user/avatar.jpg"); // Replace with actual path or state

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(dispatch, JSON.parse(savedDarkMode));
      setDarkSidenav(dispatch, JSON.parse(savedDarkMode));
    }
  }, [dispatch]);

  // const handleDarkMode = () => {
  //   setDarkSidenav(dispatch, !darkMode);
  //   setDarkMode(dispatch, !darkMode);
  // };

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkSidenav(dispatch, newDarkMode);
    setDarkMode(dispatch, newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode)); // Save the value in localStorage
  };

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme, { navbarType })}>
        <ArgonBox
          color={light && transparentNavbar ? "white" : "dark"}
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={transparentNavbar ? light : false}
          />
          <Icon fontSize="medium" sx={navbarDesktopMenu} onClick={handleMiniSidenav}>
            {miniSidenav ? "menu_open" : "menu"}
          </Icon>
        </ArgonBox>
        {isMini ? null : (
          <ArgonBox sx={(theme) => navbarRow(theme, { isMini })}>
            <ArgonBox display="flex" justifyContent="space-between" lineHeight={1}>
              <ArgonTypography variant="h6">Light / Dark</ArgonTypography>
              <Switch checked={darkMode} onChange={handleDarkMode} />
            </ArgonBox>
            <ArgonBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                color={light && transparentNavbar ? "white" : "dark"}
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
              {/* <IconButton
                size="small"
                color={light && transparentNavbar ? "white" : "dark"}
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton> */}
              <IconButton
                size="small"
                color={light && transparentNavbar ? "white" : "dark"}
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon>notifications</Icon>
              </IconButton>
              {renderMenu()}
              {/* Avatar Display */}
              <IconButton
                size="small"
                sx={navbarIconButton}
                href="/profile"
              >
                <Avatar src={userAvatar} /> {/* alt="User Avatar" */}
              </IconButton>
            </ArgonBox>
          </ArgonBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: true,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
