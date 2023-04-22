import React from "react";
import "./NavBar.css";
import "../../App.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { authErrorAlert } from "../../utils/alert";
export default function NavBar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (er) {
      authErrorAlert(er);
    }
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="home">Expense Tracker</a>
      </span>
      {isLoggedIn ? (
        <button
          className="login-signup-logout-button logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <div>
          <button
            className="login-signup-logout-button logout-button"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="login-signup-logout-button logout-button"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
}
