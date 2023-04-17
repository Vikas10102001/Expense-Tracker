import NavBar from "./components/navigation/NavBar";
import Login from "./components/auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      navigate("/home");
      const uid = user.uid;
    } else {
      navigate("/login");
    }
  });
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
