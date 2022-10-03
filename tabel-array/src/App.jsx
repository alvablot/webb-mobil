import { useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.css";
const url = "https://api.punkapi.com/v2/beers";

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
console.log(data[0])
  return (
    <div className="App">
      {<Table data={data} />}
    </div>
  );
}

export default App;
