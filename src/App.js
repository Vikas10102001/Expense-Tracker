import NavBar from "./components/navigation/NavBar";
import Login from "./components/auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/auth/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import HomePage from "./components/home/HomePage";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const isLoading = useSelector((state) => {
    return state.auth.isLoading;
  });
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      } else {
        localStorage.removeItem("user");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  return (
    <>
      <NavBar />
      {isLoading && (
        <div className="spinner">
          <RotatingLines strokeColor="white" height={50} width={100} />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
