import NavBar from "./components/navigation/NavBar";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
