import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Login from "./components/Login";
import { useAuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
    const providerValue = useAuthContext();
    return (
        <div className="App">
            <h1>Login</h1>
            <p>{providerValue.token}</p>
=======
import Login from "./components/Login"
import "./App.css";

function App() {
    return (
        <div className="App">
>>>>>>> main
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}



export default App;
