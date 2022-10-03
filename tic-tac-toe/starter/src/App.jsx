import "./App.css";
import { useState } from "react";
function Square(props) {
  return (
    <button
      className="square"
      onClick={(e) => props.handleClick(e, props.number)}
      value={props.mark[props.number]}
    >
      {props.mark[props.number]}
    </button>
  );
}
const markArray = [];
const historyO = [];
const historyX = [];
function Board() {
  const [marks, setMarks] = useState([]);
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  let [mark, setMark] = useState("X");
  let [theHistory, setTheHistory] = useState([]);
  let [theWinner, setTheWinner] = useState(`Next up: ${mark}`);
  
  const handleClick = (e, i) => {
    if (e.target.value !== "") return;
    if (mark === "O") setMark("X");
    if (mark === "X") setMark("O");
    markArray[i] = mark;
    setMarks(markArray);
    checkWinner(i, mark);
  };

  function checkWinner(i, m) {
    setTheWinner(`Next up: ${mark}`);
    let historyElement = i + 1 + ":" + m;
    setTheHistory([...theHistory, historyElement]);
    let winner;
    if (m === "O") {
      historyO.push(i);
      for (let j = 0; j < 7; j++) {
        if (historyO[0] === 0 && historyO[j + 1] === 1 && historyO[j + 2] === 2) winner = true;
        if (historyO[0] === 0 && historyO[j + 1] === 2 && historyO[j + 2] === 1) winner = true;
        if (historyO[0] === 0 && historyO[j + 1] === 3 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 0 && historyO[j + 1] === 4 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 0 && historyO[j + 1] === 6 && historyO[j + 2] === 3) winner = true;
        if (historyO[0] === 0 && historyO[j + 1] === 8 && historyO[j + 2] === 4) winner = true;

        if (historyO[0] === 1 && historyO[j + 1] === 2 && historyO[j + 2] === 0) winner = true;
        if (historyO[0] === 1 && historyO[j + 1] === 0 && historyO[j + 2] === 2) winner = true;
        if (historyO[0] === 1 && historyO[j + 1] === 4 && historyO[j + 2] === 7) winner = true;
        if (historyO[0] === 1 && historyO[j + 1] === 7 && historyO[j + 2] === 4) winner = true;

        if (historyO[0] === 2 && historyO[j + 1] === 0 && historyO[j + 2] === 1) winner = true;
        if (historyO[0] === 2 && historyO[j + 1] === 1 && historyO[j + 2] === 0) winner = true;
        if (historyO[0] === 2 && historyO[j + 1] === 5 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 2 && historyO[j + 1] === 8 && historyO[j + 2] === 5) winner = true;
        if (historyO[0] === 2 && historyO[j + 1] === 4 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 2 && historyO[j + 1] === 6 && historyO[j + 2] === 4) winner = true;

        if (historyO[0] === 3 && historyO[j + 1] === 4 && historyO[j + 2] === 5) winner = true;
        if (historyO[0] === 3 && historyO[j + 1] === 5 && historyO[j + 2] === 4) winner = true;
        if (historyO[0] === 3 && historyO[j + 1] === 0 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 3 && historyO[j + 1] === 6 && historyO[j + 2] === 0) winner = true;

        if (historyO[0] === 4 && historyO[j + 1] === 3 && historyO[j + 2] === 5) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 5 && historyO[j + 2] === 3) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 1 && historyO[j + 2] === 7) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 7 && historyO[j + 2] === 1) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 0 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 8 && historyO[j + 2] === 0) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 2 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 4 && historyO[j + 1] === 6 && historyO[j + 2] === 2) winner = true;

        if (historyO[0] === 5 && historyO[j + 1] === 4 && historyO[j + 2] === 3) winner = true;
        if (historyO[0] === 5 && historyO[j + 1] === 3 && historyO[j + 2] === 4) winner = true;
        if (historyO[0] === 5 && historyO[j + 1] === 2 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 5 && historyO[j + 1] === 8 && historyO[j + 2] === 2) winner = true;

        if (historyO[0] === 6 && historyO[j + 1] === 7 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 6 && historyO[j + 1] === 8 && historyO[j + 2] === 7) winner = true;
        if (historyO[0] === 6 && historyO[j + 1] === 3 && historyO[j + 2] === 0) winner = true;
        if (historyO[0] === 6 && historyO[j + 1] === 0 && historyO[j + 2] === 3) winner = true;
        if (historyO[0] === 6 && historyO[j + 1] === 4 && historyO[j + 2] === 2) winner = true;
        if (historyO[0] === 6 && historyO[j + 1] === 2 && historyO[j + 2] === 4) winner = true;

        if (historyO[0] === 7 && historyO[j + 1] === 6 && historyO[j + 2] === 8) winner = true;
        if (historyO[0] === 7 && historyO[j + 1] === 8 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 7 && historyO[j + 1] === 4 && historyO[j + 2] === 1) winner = true;
        if (historyO[0] === 7 && historyO[j + 1] === 1 && historyO[j + 2] === 4) winner = true;

        if (historyO[0] === 8 && historyO[j + 1] === 7 && historyO[j + 2] === 6) winner = true;
        if (historyO[0] === 8 && historyO[j + 1] === 6 && historyO[j + 2] === 7) winner = true;
        if (historyO[0] === 8 && historyO[j + 1] === 5 && historyO[j + 2] === 2) winner = true;
        if (historyO[0] === 8 && historyO[j + 1] === 2 && historyO[j + 2] === 5) winner = true;
        if (historyO[0] === 8 && historyO[j + 1] === 4 && historyO[j + 2] === 0) winner = true;
        if (historyO[0] === 8 && historyO[j + 1] === 0 && historyO[j + 2] === 4) winner = true;
      }
    }
    if (m === "X") {
      historyX.push(i);
      for (let j = 0; j < 7; j++) {
        if (historyX[0] === 0 && historyX[j + 1] === 1 && historyX[j + 2] === 2) winner = true;
        if (historyX[0] === 0 && historyX[j + 1] === 2 && historyX[j + 2] === 1) winner = true;
        if (historyX[0] === 0 && historyX[j + 1] === 3 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 0 && historyX[j + 1] === 4 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 0 && historyX[j + 1] === 6 && historyX[j + 2] === 3) winner = true;
        if (historyX[0] === 0 && historyX[j + 1] === 8 && historyX[j + 2] === 4) winner = true;

        if (historyX[0] === 1 && historyX[j + 1] === 2 && historyX[j + 2] === 0) winner = true;
        if (historyX[0] === 1 && historyX[j + 1] === 0 && historyX[j + 2] === 2) winner = true;
        if (historyX[0] === 1 && historyX[j + 1] === 4 && historyX[j + 2] === 7) winner = true;
        if (historyX[0] === 1 && historyX[j + 1] === 7 && historyX[j + 2] === 4) winner = true;

        if (historyX[0] === 2 && historyX[j + 1] === 0 && historyX[j + 2] === 1) winner = true;
        if (historyX[0] === 2 && historyX[j + 1] === 1 && historyX[j + 2] === 0) winner = true;
        if (historyX[0] === 2 && historyX[j + 1] === 5 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 2 && historyX[j + 1] === 8 && historyX[j + 2] === 5) winner = true;
        if (historyX[0] === 2 && historyX[j + 1] === 4 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 2 && historyX[j + 1] === 6 && historyX[j + 2] === 4) winner = true;

        if (historyX[0] === 3 && historyX[j + 1] === 4 && historyX[j + 2] === 5) winner = true;
        if (historyX[0] === 3 && historyX[j + 1] === 5 && historyX[j + 2] === 4) winner = true;
        if (historyX[0] === 3 && historyX[j + 1] === 0 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 3 && historyX[j + 1] === 6 && historyX[j + 2] === 0) winner = true;

        if (historyX[0] === 4 && historyX[j + 1] === 3 && historyX[j + 2] === 5) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 5 && historyX[j + 2] === 3) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 1 && historyX[j + 2] === 7) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 7 && historyX[j + 2] === 1) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 0 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 8 && historyX[j + 2] === 0) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 2 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 4 && historyX[j + 1] === 6 && historyX[j + 2] === 2) winner = true;

        if (historyX[0] === 5 && historyX[j + 1] === 4 && historyX[j + 2] === 3) winner = true;
        if (historyX[0] === 5 && historyX[j + 1] === 3 && historyX[j + 2] === 4) winner = true;
        if (historyX[0] === 5 && historyX[j + 1] === 2 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 5 && historyX[j + 1] === 8 && historyX[j + 2] === 2) winner = true;

        if (historyX[0] === 6 && historyX[j + 1] === 7 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 6 && historyX[j + 1] === 8 && historyX[j + 2] === 7) winner = true;
        if (historyX[0] === 6 && historyX[j + 1] === 3 && historyX[j + 2] === 0) winner = true;
        if (historyX[0] === 6 && historyX[j + 1] === 0 && historyX[j + 2] === 3) winner = true;
        if (historyX[0] === 6 && historyX[j + 1] === 4 && historyX[j + 2] === 2) winner = true;
        if (historyX[0] === 6 && historyX[j + 1] === 2 && historyX[j + 2] === 4) winner = true;

        if (historyX[0] === 7 && historyX[j + 1] === 6 && historyX[j + 2] === 8) winner = true;
        if (historyX[0] === 7 && historyX[j + 1] === 8 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 7 && historyX[j + 1] === 4 && historyX[j + 2] === 1) winner = true;
        if (historyX[0] === 7 && historyX[j + 1] === 1 && historyX[j + 2] === 4) winner = true;

        if (historyX[0] === 8 && historyX[j + 1] === 7 && historyX[j + 2] === 6) winner = true;
        if (historyX[0] === 8 && historyX[j + 1] === 6 && historyX[j + 2] === 7) winner = true;
        if (historyX[0] === 8 && historyX[j + 1] === 5 && historyX[j + 2] === 2) winner = true;
        if (historyX[0] === 8 && historyX[j + 1] === 2 && historyX[j + 2] === 5) winner = true;
        if (historyX[0] === 8 && historyX[j + 1] === 4 && historyX[j + 2] === 0) winner = true;
        if (historyX[0] === 8 && historyX[j + 1] === 0 && historyX[j + 2] === 4) winner = true;
      }
    }
    if (winner) setTheWinner(`${mark} is the winner 🏆 🥳`);
  }

  return (
    <div id="content">
      <div className="status">{theWinner}</div>
      <div className="status">
        <div className="board">
          {number.map((number) => {
            return <Square key={number} number={number} mark={marks} handleClick={handleClick} />;
          })}
        </div>
        <div className="status">
          {theHistory.map((element) => {
            return <span key={element} className="history">{element}</span>;
          })}
          <br></br>
          <button
            className="reset"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
