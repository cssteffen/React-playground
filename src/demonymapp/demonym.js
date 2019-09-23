import React from "react";
import "./demonym.css";

//why is this a function & not class & why Capitalized?
/* create a Component that accepts two props named 
name and country and simply renders the 
"A Barbadian come from Barbados" string. */
export default function Demonym(props) {
  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  );
}

/*
const demonymProps = [
    {
      name: "Barbadian",
      country: "Barbados"
    }
  ];
  */
