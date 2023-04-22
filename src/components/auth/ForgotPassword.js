import React, { useState } from "react";
import AuthBox from "../ui/AuthBox";
import validateEmail from "../../utils/emailValidator";
import CustomInput from "./customInput/CustomInput";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
    setEmailIsValid(validateEmail(email));
  };
  const handlePasswordResetButton = () => {};
  return (
    <AuthBox>
      <CustomInput
        type="text"
        id="email"
        label="Enter your Email :"
        value={email}
        isValid={emailIsValid}
        onChange={handleEmailOnChange}
      />
      <button
        className="login-signup-logout-button"
        onClick={handlePasswordResetButton}
        disabled={!emailIsValid}
      >
        Reset
      </button>
    </AuthBox>
  );
}
