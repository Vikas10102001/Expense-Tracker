import React from "react";
import AuthBox from "../ui/AuthBox";
import CustomInput from "./customInput/CustomInput";
import { Link } from "react-router-dom";

export default function Login() {
const handleEmailOnChange = () => {};
const handlePasswordOnChange = () => {};
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

      <button className="login-signup-logout-button">Login</button>
      <div className="redirect-link">
        <Link to="/signup">Create an account</Link>
      </div>
    </AuthBox>
  );
}
