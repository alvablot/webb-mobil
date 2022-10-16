import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.js";
import axios from "axios";
let token;

function Login() {
    const user = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    async function login(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth", {
                email: email,
                password: password,
            });
            token = response.data.token;
            user.email = email
            user.password = password
            user.token = token
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("token", token);
            console.log(user);
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
