
// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Payment from "layouts/payment";
import Firms from "layouts/firms";
import Ledgers from "layouts/ledgers";
import Users from "layouts/users";
import Receipt from "layouts/receipt";
import Reports from "layouts/reports";
import { Auth } from "auth";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const sidebar = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  // {
  //   type: "route",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: (
  //     <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
  //   ),
  //   component: <Tables />,
  // },
  {
    type: "route",
    name: "Firms",
    key: "firms",
    route: "/firms",
    icon: (
      <ArgonBox component="i" color="secondary" fontSize="14px" className="ni ni-badge " />
    ),
    component: <Firms />,
  },
  {
    type: "route",
    name: "Ledgers",
    key: "ledgers",
    route: "/ledgers",
    icon: (
      <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-credit-card " />
    ),
    component: <Ledgers />,
  },
  {
    type: "route",
    name: "Users",
    key: "users",
    route: "/users",
    icon: (
      <ArgonBox component="i" color="default" fontSize="14px" className="ni ni-single-02 " />
    ),
    component: <Users />,
  },
  {
    type: "route",
    name: "Payment",
    key: "payment",
    route: "/payment",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Payment />,
  }, 
  {
    type: "route",
    name: "Receipt",
    key: "receipt",
    route: "/receipt",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-credit-card" />,
    component: <Receipt />,
  },
  {
    type: "route",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-collection" />,
    component: <Reports />,
  },
  {
    type: "action",
    name: "Logout",
    key: "logout",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-button-power" />,
    onClick: () => {
      Auth.logout();
      window.location.href = "/signin";  // Redirect to sign-in page after logout
    },
  },
  // {
  //   type: "route",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-credit-card" />,
  //   component: <Billing />,
  // },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "route",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
  //   component: <Profile />,
  // },
//   {
//     type: "route",
//     name: "Sign In",
//     key: "sign-in",
//     route: "/authentication/sign-in",
//     icon:<ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />,
//     component: <SignIn />,
//   },
//   {
//     type: "route",
//     name: "Sign Up",
//     key: "sign-up",
//     route: "/authentication/sign-up",
//     icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
//     component: <SignUp />,
//   },
];

export default sidebar;
