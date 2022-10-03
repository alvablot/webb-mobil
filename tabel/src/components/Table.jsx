import React, { useState, useEffect } from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {props.people.map((people, i) => {
          return (
            <tr key={`tr${i}`}>
              <td key={`td_name${i}`}>{people.name}</td>
              <td key={`td_age${i}`}>{people.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
