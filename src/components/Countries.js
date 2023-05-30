import React from "react";
import { v4 as uuidv4 } from 'uuid';
const Countries = ({ countries }) => (
    <>
      {countries.map((country) => (
        <p key={uuidv4()}>{country.name.common}</p>
      ))}
    </>
  );

export default Countries;
