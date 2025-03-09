import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import Verify from "./pages/Verify";
import "./App.css"; // Import external CSS for background animation

const App = () => {
  const { showLogin, setShowLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-animation" />

      {/* Debugging showLogin state */}
      {console.log("showLogin state:", showLogin)}

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen">
        <ToastContainer position="bottom-right" />
        <Navbar />

        {/* Login Popup */}
        {showLogin && <Login />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
