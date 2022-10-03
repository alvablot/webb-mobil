import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState([
    { name: "Ryan Dahl", number: "08-666 555" },
  ]);
  const [personName, setPersonName] = useState("");
  const [personNumber, setPersonNumber] = useState("");
  const [personSearch, setPersonSearch] = useState("");
  const [printObjects, setPrintObjects] = useState([]);
  setPrintObjects([...people])
  function addPerson(e) {
    let personExits = false;
    e.preventDefault();
    personExits = people.find((element) => element.name === personName);
    if (personExits) {
      alert("Namnet finns redan");
      return;
    }
    if (personName !== "")
    setPrintObjects([...people, { name: personName, number: personNumber }]);
  }

  function sortResults() {
    let result;
    people.map((element, i) => {
      result = element.name.search(personSearch);

    });
    //const result = people.find((people) => people.name === personName);

    console.log(result);
  }

  return (
    <div>
      <h2>Telefonbok</h2>
      <form onSubmit={addPerson}>
        <div>
          Namn:
          <input
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
            name="name"
            value={personName}
          />
        </div>
        <div>
          Nummer:
          <input
            onChange={(e) => {
              setPersonNumber(e.target.value);
            }}
            name="number"
            value={personNumber}
          />
        </div>
        <div>
          Sök
          <input
            onChange={(e) => {
              setPersonSearch(e.target.value);
            }}
            name="search"
            value={personSearch}
          />
        </div>
        <div>
          <button type="submit">lägg till</button>
        </div>
      </form>
      <button onClick={sortResults}>sortera</button>
      <h2>Nummer</h2>
      {printObjects.map((element, i) => {
        return (
          <div key={`name${i}`}>
            {element.name} {element.number}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
