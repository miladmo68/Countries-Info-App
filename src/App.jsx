import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetaile from "./pages/CountryDetaile";
import FavariteCountries from "./pages/FavariteCountries";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className=" flex flex-col items-center m-auto pb-10 bg-gray-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CountryDetaile" element={<CountryDetaile />} />
          <Route path="/favorite" element={<FavariteCountries />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
