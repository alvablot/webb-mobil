import React, { useState, useEffect } from "react";

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((element, i) => {
          return (
            <tr key={`tr${i}`}>
              <td key={`td_image${i}`}><img src={`${element.image_url}`} /></td>
              <td key={`td_name${i}`}>{element.name}</td>
              <td key={`td_decription${i}`}>{element.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
