import React, { useEffect, useReducer, useState } from "react";
import AuthBox from "../ui/AuthBox";
import CustomInput from "./customInput/CustomInput";
import { Link } from "react-router-dom";
import validatePassword from "../../utils/passwordValidator";
import validateEmail from "../../utils/emailValidator";
import { useDispatch } from "react-redux";
import { login } from "../../store/thunks/login";

export default function Login() {
  const dispatch = useDispatch();
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
    const timeout = setTimeout(() => {
      if (emailValidity === false) {
        setInvalidMessage("Please enter valid email");
      } else if (passwordValidity === false) {
        setInvalidMessage("Please enter valid password");
      }
    }, 1500);
    if (
      (emailValidity && passwordValidity) ||
      (emailValidity && passwordValidity === null) ||
      (passwordValidity && emailValidity === null)
    ) {
      setInvalidMessage("");
    }

    setFormIsValid(emailValidity && passwordValidity);

    return () => {
      clearTimeout(timeout);
    };
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

  const handleLogin = () => {
    console.log(enteredEmail.val, enteredPassword.val);
    dispatch(login({ email: enteredEmail.val, password: enteredPassword.val }));
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
      <button
        className="login-signup-logout-button"
        onClick={handleLogin}
        disabled={!formIsValid}
      >
        Login
      </button>
      <div className="redirect-link">
        <Link to="/signup">Create an account</Link>
      </div>
    </AuthBox>
  );
}
