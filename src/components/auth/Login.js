import React, { useEffect, useReducer, useRef, useState } from "react";
import AuthBox from "../ui/AuthBox";
import CustomInput from "./customInput/CustomInput";
import { Link } from "react-router-dom";
import validatePassword from "../../utils/passwordValidator";
import validateEmail from "../../utils/emailValidator";

export default function Login() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [enteredEmail, dispatchEmail] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT") {
        return { val: action.value, isValid: validateEmail(action.value) };
      }
      if (action.type === "INPUT_VALIDITY") {
        return { val: state.val, isValid: validateEmail(state.val) };
      }
    },
    { val: "", isValid: null }
  );
  const [enteredPassword, dispatchPassword] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT") {
        return { val: action.value, isValid: validatePassword(action.value) };
      }
      if (action.type === "INPUT_VALIDITY") {
        return { val: state.val, isValid: validatePassword(state.val) };
      }
    },
    { val: "", isValid: null }
  );
  const { isValid: emailValidity } = enteredEmail;
  const { isValid: passwordValidity } = enteredPassword;
  useEffect(() => {
    if (emailValidity === false) {
      setInvalidMessage("Please enter valid email");
    } else if (passwordValidity == false) {
      setInvalidMessage("Please enter valid password");
    } else if (emailValidity && passwordValidity) {
      setInvalidMessage("");
    }
    setFormIsValid(emailValidity && passwordValidity);
  }, [emailValidity, passwordValidity]);

  const handleEmailOnChange = (e) => {
    dispatchEmail({ type: "USER_INPUT", value: e.target.value });
  };
  const handleValidateEmail = (e) => {
    dispatchEmail({ type: "INPUT_VALIDITY" });
  };
  const handlePasswordOnChange = (e) => {
    dispatchPassword({ type: "USER_INPUT", value: e.target.value });
  };
  const handleValidatePassword = () => {
    dispatchPassword({ type: "INPUT_VALIDITY" });
  };
  return (
    <AuthBox>
      <CustomInput
        type="text"
        id="email"
        label="Email"
        value={enteredEmail.val}
        isValid={enteredEmail.isValid}
        onChange={handleEmailOnChange}
        onBlur={handleValidateEmail}
      />
      <CustomInput
        type="password"
        id="password"
        label="Password"
        value={enteredPassword.val}
        isValid={enteredPassword.isValid}
        onChange={handlePasswordOnChange}
        onBlur={handleValidatePassword}
      />
      <div className="invalid-message">{invalidMessage}</div>
      <button className="login-signup-logout-button">Login</button>
      <div className="redirect-link">
        <Link to="/signup">Create an account</Link>
      </div>
    </AuthBox>
  );
}
