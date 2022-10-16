import React, { useState } from "react";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";

function Login() {
    const { user, getUser } = useUserContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8080/auth", {
                email: email,
                password: password,
            });
            return response.data.token;
        } catch (axiosError) {
            if (axiosError.response.data.status === "error") {
                setError(axiosError.response.data.message);
            }
        }
    };

    const handleSubmit = async () => {
        await login();
    };

    return (
        <div>
            <div>{error}</div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleSubmit}>Logga in</button>
        </div>
    );
}

export default Login;
