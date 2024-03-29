import React, { useEffect, useReducer, useState } from "react";
import AuthBox from "../ui/AuthBox";
import CustomInput from "./customInput/CustomInput";
import { Link } from "react-router-dom";
import validatePassword from "../../utils/passwordValidator";
import validateEmail from "../../utils/emailValidator";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/thunks/login";
import { authErrorAlert } from "../../utils/alert";
import authSlice from "../../store/slice/auth";

export default function Login() {
  const dispatch = useDispatch();
  const authError = useSelector((state) => {
    return state.auth.error;
  });
  useEffect(() => {
    if (authError) {
      authErrorAlert(authError);
    }
    dispatch(authSlice.actions.clearError());
  }, [authError, dispatch]);

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
    dispatch(login({ email: enteredEmail.val, password: enteredPassword.val }));
  };
  return (
    <AuthBox handleSubmitForm={handleLogin}>
      <CustomInput
        type="text"
        id="email"
        label="Email"
        name="email"
        placeholder="provikas2001@gmail.com"
        value={enteredEmail.val}
        isValid={enteredEmail.isValid}
        onChange={handleEmailOnChange}
        onBlur={handleValidateEmail}
      />
      <CustomInput
        type="password"
        id="password"
        label="Password"
        name="password"
        placeholder="test1234"
        value={enteredPassword.val}
        isValid={enteredPassword.isValid}
        onChange={handlePasswordOnChange}
        onBlur={handleValidatePassword}
        autoComplete="off"
      />
      <div className="invalid-message">{invalidMessage}</div>
      <button
        className="login-signup-logout-button"
        type="submit"
        disabled={!formIsValid}
      >
        Login
      </button>
      <div className="redirect-link">
        <Link to="/signup">Create an account</Link>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
    </AuthBox>
  );
}
