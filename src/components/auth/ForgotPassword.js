import React, { useState } from "react";
import AuthBox from "../ui/AuthBox";
import validateEmail from "../../utils/emailValidator";
import CustomInput from "./customInput/CustomInput";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { dispatchAlert } from "../../utils/alert";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
    setEmailIsValid(validateEmail(email));
  };
  const handlePasswordResetButton = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        dispatchAlert("Password reset email sent successfully", "success");
      })
      .catch((error) => {
        // Error occurred while sending password reset email
        dispatchAlert(error.code, "error");
      });
    setEmail("");
  };
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
