import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Navbar } from "./Components/Navbar";

const App = () => (
  <div className="App">
    <header className=".App-header">
      <Navbar />
      <Routes>
        <Route exact path="/Dashboard" element={<Dashboard />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </header>
  </div>
);

export default App;