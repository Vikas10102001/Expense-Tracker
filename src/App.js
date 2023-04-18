import NavBar from "./components/navigation/NavBar";
import Login from "./components/auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      } else {
        console.log("here");
        localStorage.removeItem("user");
        navigate("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
