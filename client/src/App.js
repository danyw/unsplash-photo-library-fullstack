import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Random from "./Pages/Random";
import MyCollections from "./Pages/MyCollections";

function App() {
  return (
    <Router>
      <div className="box-border w-full pb-2 ">
        <div className="HeaderContainer  bg-gray-500 z-10 sticky top-0 left-0 mb-2 ">
          <header className="App-header flex-col flex md:flex-row justify-between md:px-4 md:py-2">
            <h1 className="font-serif font-bold text-2xl md:text-6xl my-auto text-center">Pic Search</h1>

            <NavBar />
          </header>
        </div>
        <div className="px-2 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<Random />} />
            <Route path="/mycollections" element={<MyCollections />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
