import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Random from "./Pages/Random";

function App() {
  return (
    <Router>
      <div className="App box-border w-screen ">
        <div className="HeaderContainer  bg-gray-500">
          <header className="App-header flex flex-row justify-between md:px-2 md:py-2 ">
            <h1 className="">Pic Search</h1>
            <NavBar />
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
