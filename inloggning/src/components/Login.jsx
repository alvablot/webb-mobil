import { useState, useEffect, useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [errorMsg, setErrorMsg] = useState("");

    const providerValue = useAuthContext();

    async function login(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth", {
                email: email,
                password: password,
            });
            providerValue.updateToken(response.data.token);
            localStorage.setItem("token", response.data.token);

        } catch (error) {
            setErrorMsg(`${error.response.data.status}: ${error.response.data.message}`);
            console.log(error.response.data);
        }
    }
    return (
        <>
            <div>{errorMsg}</div>
            <div>bob@example.com</div>
            <form onSubmit={login}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="text"
                    value={email}
                />
                <br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    value={password}
                />
                <br />
                <button>Tryck</button>
            </form>
        </>
    );
}

export default Login;
