import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [local, setLocal] = useState(0);
    

    function handleClick() {
        setCount(count + 1);
        localStorage.setItem("count", count);
        setLocal(localStorage.getItem("count"));
        console.log(local);
    }
    return (
        <div className="App">
            <button
                onClick={() => {
                    handleClick();
                }}
            >
                {local}
            </button>
        </div>
    );
}

export default App;
