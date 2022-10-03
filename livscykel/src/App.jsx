import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputType, setInputType] = useState("hidden");

  useEffect(() => {
    timeCounter;
  }, []);

  const handleClick = (e) => {
    e.target.checked ? setInputType("button") : setInputType("hidden");
  };

  const timeCounter = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div className="App">
      <p>
        <input type={inputType} value={count}></input>
      </p>
      <p>
        <input type="checkbox" onClick={handleClick}></input>
      </p>
    </div>
  );
}

export default App;
