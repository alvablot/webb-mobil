import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login"
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}



export default App;
