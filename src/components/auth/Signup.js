import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./customInput/CustomInput";
import AuthBox from "../ui/AuthBox";

export default function Signup() {
  const handleEmailOnChange = () => {};
  const handlePasswordOnChange = () => {};
  const handleConfirmPasswordOnChange = () => {};
  return (
    <AuthBox>
      <CustomInput
        type="text"
        id="email"
        label="Email"
        onChange={handleEmailOnChange}
      />
      <CustomInput
        type="password"
        id="password"
        label="Password"
        onChange={handlePasswordOnChange}
      />
      <CustomInput
        type="password"
        id="confirm-password"
        label="Confirm password"
        onChange={handleConfirmPasswordOnChange}
      />
      <button className="login-signup-logout-button">Signup</button>
      <div className="redirect-link">
        <Link to="/login">Already have an account?</Link>
      </div>
    </AuthBox>
  );
}
