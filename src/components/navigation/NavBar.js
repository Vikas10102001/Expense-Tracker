import React from "react";
import "./NavBar.css";
import "../../App.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate=useNavigate()
  const handleLogout = async () => {
    try
    {
    await auth.signOut()
    navigate("/login")
    }
    catch(er)
    {
      console.log(er)
    }
  };
  return (
    <div className="nav-bar">
      <span className="logo">
        <a href="Home">Expense Tracker</a>
      </span>
      <button className="login-signup-logout-button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
