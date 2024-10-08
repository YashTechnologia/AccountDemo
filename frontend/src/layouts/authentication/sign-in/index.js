// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Switch from "@mui/material/Switch";
// import ArgonBox from "components/ArgonBox";
// import ArgonTypography from "components/ArgonTypography";
// import ArgonInput from "components/ArgonInput";
// import ArgonButton from "components/ArgonButton";
// import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
// import { Auth, http } from "auth";
// import { jwtDecode } from "jwt-decode";

// const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

// function Illustration() {
//   const [rememberMe, setRememberMe] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState(null);
//   const [passwordError, setPasswordError] = useState(null);
//   const navigate = useNavigate();

//   const handleSetRememberMe = () => setRememberMe(!rememberMe);

//   const validateEmail = () => email.includes("@"); // Simple email validation
//   const validatePassword = () => password.length >= 6; // Password must be at least 6 characters

//   const handleSignIn = () => {
//     setEmailError(null);
//     setPasswordError(null);

//     if (!validateEmail()) {
//       setEmailError("Please enter a valid email.");
//       return;
//     }

//     if (!validatePassword()) {
//       setPasswordError("Password must be at least 6 characters.");
//       return;
//     }

//     http.post("/login", {
//       email: email,
//       Password: password,
//     })
//       .then((response) => {
//         const { token } = response.data;

//         // Decode the token to get the payload
//         const decodedToken = jwtDecode(token);
//         const { roleId, userId } = decodedToken;

//         // Store token, roleId, and userId in local storage
//         Auth.login(token, roleId, userId);

//         navigate("/dashboard");
//       })
//       .catch((error) => {
//         console.error("Login error:", error);
//         // You may want to set an error message for the user here
//       });
//   };

//   return (
//     <IllustrationLayout
//       title="Sign In"
//       description="Enter your email and password to sign in"
//       illustration={{
//         image: bgImage,
//         title: '"Attention is the new currency"',
//         description: "The more effortless the writing looks, the more effort the writer actually put into the process.",
//       }}
//     >
//       <ArgonBox component="form" role="form" onSubmit={(e) => e.preventDefault()}>
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="email"
//             placeholder="Email"
//             size="large"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!!emailError}
//             helperText={emailError}
//           />
//         </ArgonBox>
//         <ArgonBox mb={2}>
//           <ArgonInput
//             type="password"
//             placeholder="Password"
//             size="large"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={!!passwordError}
//             helperText={passwordError}
//           />
//         </ArgonBox>
//         <ArgonBox display="flex" alignItems="center">
//           <Switch checked={rememberMe} onChange={handleSetRememberMe} />
//           <ArgonTypography
//             variant="button"
//             fontWeight="regular"
//             onClick={handleSetRememberMe}
//             sx={{ cursor: "pointer", userSelect: "none" }}
//           >
//             &nbsp;&nbsp;Remember me
//           </ArgonTypography>
//         </ArgonBox>
//         <ArgonBox mt={4} mb={1}>
//           <ArgonButton color="info" size="large" fullWidth onClick={handleSignIn}>
//             Sign In
//           </ArgonButton>
//         </ArgonBox>
//         <ArgonBox mt={3} textAlign="center">
//           <ArgonTypography variant="button" color="text" fontWeight="regular">
//             Don&apos;t have an account?{" "}
//             <ArgonTypography
//               component={Link}
//               to="/signup"
//               variant="button"
//               color="info"
//               fontWeight="medium"
//             >
//               Sign up
//             </ArgonTypography>
//           </ArgonTypography>
//         </ArgonBox>
//       </ArgonBox>
//     </IllustrationLayout>
//   );
// }

// export default Illustration;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { Auth, http } from "auth";
import { jwtDecode } from "jwt-decode";

const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const validateEmail = () => email.includes("@"); // Simple email validation
  const validatePassword = () => password.length >= 6; // Password must be at least 6 characters

  const handleSignIn = () => {
    setEmailError(null);
    setPasswordError(null);

    if (!validateEmail()) {
      setEmailError("Please enter a valid email.");
      return;
    }

    if (!validatePassword()) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    http.post("/login", {
      email: email,
      Password: password,
    })
      .then((response) => {
        const { token } = response.data;

        // Decode the token to get the payload
        const decodedToken = jwtDecode(token);
        const { roleId, userId } = decodedToken;

        // Store token, roleId, and userId in local storage
        Auth.login(token, roleId, userId);

        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login error:", error);
        // You may want to set an error message for the user here
      });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description: "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <ArgonBox component="form" role="form" onSubmit={(e) => e.preventDefault()}>
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            size="large"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth onClick={handleSignIn}>
            Sign In
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <ArgonTypography
              component={Link}
              to="/signup"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              Sign up
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
