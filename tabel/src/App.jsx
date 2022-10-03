import { useState } from "react";
import Table from "./components/Table";
import "./App.css";

function App() {
  const people = [
    {
      name: "Ryan",
      age: 41,
    },
    {
      name: "Bryan",
      age: 68,
    },
    {
      name: "Petter",
      age: 666,
    },
  ];

  return (
    <div className="App">
      <Table people={people} />
    </div>
  );
}

export default App;
