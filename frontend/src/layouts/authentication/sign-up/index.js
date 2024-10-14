import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import { Register } from "api/apis";  // Make sure the path is correct

// Images
const bgImage =
  "https://synder.com/blog/wp-content/uploads/sites/5/2021/06/accounting-principles-for-beginners-1024x341.jpg";

function Cover() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('f', formData)

    try {
      setLoading(true);
      const response = await Register(formData.name, formData.email, formData.password);
      setLoading(false);
      // Handle success (navigate, show message, etc.)
      console.log("User registered successfully:", response);
      navigate("/signin"); // Redirect to sign-in after successful registration
    } catch (error) {
      setLoading(false);
      console.error("Registration error:", error);
      // Handle error (show error message)
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <CoverLayout
      title="Welcome!"
      description="Use these awesome forms to login or create a new account in your project for free."
      image={bgImage}
      imgPosition="top"
    >
      <Card>
        <ArgonBox p={3} mb={1} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium">
            Register with
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox pt={2} pb={3} px={3}>
          <ArgonBox component="form" role="form" onSubmit={handleSubmit}>
            <ArgonBox mb={2}>
              <ArgonInput
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {/* <ArgonInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                size="large"
                value={formData.password}
                onChange={handleChange}
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
              /> */}
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox
                checked={formData.agreedToTerms}
                onChange={handleCheckboxChange}
              />
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </ArgonTypography>
              <ArgonTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                textGradient
              >
                Terms and Conditions
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mt={4} mb={1}>
              <ArgonButton
                type="submit"
                variant="gradient"
                color="dark"
                fullWidth
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mt={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <ArgonTypography
                  component={Link}
                  to="/signin"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
