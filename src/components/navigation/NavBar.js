import React from "react";
import "./NavBar.css";
import "../../App.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { authErrorAlert } from "../../utils/authErrorAlert";
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
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="Home">Expense Tracker</a>
      </span>
      {isLoggedIn && (
        <button
          className="login-signup-logout-button logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}
