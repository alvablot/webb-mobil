import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext";

=======
import { LoginProvider } from "./context/UserContext";
>>>>>>> main
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
<<<<<<< HEAD
        <AuthProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
=======
        <LoginProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoginProvider>
>>>>>>> main
    </React.StrictMode>
);
