import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "./customInput/CustomInput";
import AuthBox from "../ui/AuthBox";
import validateEmail from "../../utils/emailValidator";
import validatePassword from "../../utils/passwordValidator";
import { signup } from "../../store/thunks/signup";
import { useDispatch, useSelector } from "react-redux";
import { authErrorAlert } from "../../utils/alert";
import authSlice from "../../store/slice/auth";
export default function Signup() {
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
    const timeout = setTimeout(() => {
      if (emailValidity === false) {
        //this condition is false initially because null===false is false so the message will not appear if the fields are untouched
        setInvalidMessage("Please enter valid email");
      } else if (passwordValidity === false) {
        setInvalidMessage("Password must contain atleast 8 character");
      } else if (confirmPasswordValidity === false) {
        setInvalidMessage("Password does not match!");
      } else {
        setInvalidMessage("");
      }
    }, 1500);

    setFormIsValid(
      emailValidity && passwordValidity && confirmPasswordValidity
    );

    return () => {
      clearTimeout(timeout);
    };
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
  const handleSignUp = () => {
    dispatch(
      signup({ email: enteredEmail.val, password: enteredPassword.val })
    );
  };
  return (
    <AuthBox handleSubmitForm={handleSignUp}>
      <CustomInput
        type="text"
        id="email"
        name="email"
        label="Email"
        value={enteredEmail.val}
        isValid={enteredEmail.isValid}
        onChange={handleEmailOnChange}
        onBlur={handleValidateEmail}
      />
      <CustomInput
        type="password"
        id="password"
        name="password"
        label="Password"
        value={enteredPassword.val}
        isValid={enteredPassword.isValid}
        onChange={handlePasswordOnChange}
        onBlur={handleValidatePassword}
        autoComplete="off"
      />
      <CustomInput
        type="password"
        name="password"
        id="confirm-password"
        label="Confirm password"
        onChange={handleConfirmPasswordOnChange}
        onBlur={handleValidateConfirmPassword}
        isValid={enteredConfirmPassword.isValid}
        value={enteredConfirmPassword.val}
        autoComplete="off"
      />
      <div className="invalid-message">{invalidMessage}</div>
      <button
        className="login-signup-logout-button"
        disabled={!formIsValid}
        type="submit"
      >
        Signup
      </button>
      <div className="redirect-link">
        <Link to="/login">Already have an account?</Link>
      </div>
    </AuthBox>
  );
}
