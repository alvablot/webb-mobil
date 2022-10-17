<<<<<<< HEAD

import { useState, useEffect, useContext } from "react";
import { useAuthContext } from "../context/AuthContext";

=======
import { useState, useEffect, useContext, useReducer } from "react";
import { UserContext } from "../context/UserContext";
import { reducer } from "../reducers/red";
>>>>>>> main
import axios from "axios";

function Login() {
<<<<<<< HEAD
=======
    const [state, dispatch] = useReducer(reducer, { tkn: "" });
    const user = useContext(UserContext);
>>>>>>> main
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
<<<<<<< HEAD
            providerValue.updateToken(response.data.token);
            localStorage.setItem("token", response.data.token);

=======
            token = response.data.token;
            localStorage.setItem("token", token);
            state.tkn = token;
            dispatch({ type: "incremented_tkn" });
>>>>>>> main
        } catch (error) {
            setErrorMsg(`${error.response.data.status}: ${error.response.data.message}`);
            console.log(error.response);
            throw error;
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
                <button>Login</button>
            </form>
            <p>TOKEN: {state.tkn}.</p>
        </>
    );
}

export default Login;
