import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { UserContext } from "./context/UserContext.js";
let token;
import axios from "axios";
import "./App.css";

function App() {
    const user = useContext(UserContext);
    return (
        <div className="App">
            <h1>{user.email}</h1>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
