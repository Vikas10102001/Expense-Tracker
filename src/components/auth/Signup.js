import React from "react";

export default function Signup() {
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
      <button className="login-signup-logout-button">Login</button>
      <div className="redirect-link">
        <Link to="Signup">Already have an account</Link>
      </div>
    </AuthBox>
  );
}
