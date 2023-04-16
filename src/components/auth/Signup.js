import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "./customInput/CustomInput";
import AuthBox from "../ui/AuthBox";
import validateEmail from "../../utils/emailValidator";
import validatePassword from "../../utils/passwordValidator";

export default function Signup() {
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
  const [enteredConfirmPassword, dispatchConfirmPassword] = useReducer(
    (state, action) => {
      if (action.type === "USER_INPUT") {
        return {
          val: action.value,
          isValid:
            validatePassword(action.value) &&
            enteredPassword.val === action.value,
        };
      }
      if (action.type === "INPUT_VALIDITY") {
        return {
          val: state.val,
          isValid:
            validatePassword(state.val) && enteredPassword.val === state.val,
        };
      }
    },
    { val: "", isValid: null }
  );
  const { isValid: emailValidity } = enteredEmail;
  const { isValid: passwordValidity } = enteredPassword;
  const { isValid: confirmPasswordValidity } = enteredConfirmPassword;
  useEffect(() => {
    if (emailValidity === false) {
      //this condition is false initially because null===false is true so the message will not appear if the fields are untouched
      setInvalidMessage("Please enter valid email");
    } else if (passwordValidity == false) {
      setInvalidMessage("Password must contain atleast 8 character");
    } else if (confirmPasswordValidity === false) {
      setInvalidMessage("Password does not match!");
    } else if (emailValidity && passwordValidity && confirmPasswordValidity) {
      setInvalidMessage("");
    }
    setFormIsValid(
      emailValidity && passwordValidity && confirmPasswordValidity
    );
  }, [emailValidity, passwordValidity, confirmPasswordValidity]);

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
  const handleConfirmPasswordOnChange = (e) => {
    dispatchConfirmPassword({ type: "USER_INPUT", value: e.target.value });
  };
  const handleValidateConfirmPassword = () => {
    dispatchConfirmPassword({ type: "INPUT_VALIDITY" });
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
      <CustomInput
        type="password"
        id="confirm-password"
        label="Confirm password"
        onChange={handleConfirmPasswordOnChange}
        onBlur={handleValidateConfirmPassword}
        isValid={enteredConfirmPassword.isValid}
        value={enteredConfirmPassword.val}
      />
      <div className="invalid-message">{invalidMessage}</div>
      <button className="login-signup-logout-button">Signup</button>
      <div className="redirect-link">
        <Link to="/login">Already have an account?</Link>
      </div>
    </AuthBox>
  );
}
