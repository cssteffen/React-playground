import React, { Component } from "react";
import "./demonymApp.css";

import Demonym from "./demonym";
import CountrySelector from "./countrySelector";

/* This is the parent of the other two components 
so it will simply pass the required data down to 
the two child components. */

export default class DemonymApp extends Component {
  /* Constructor added to initialize the state. */
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  //method with the fetch api
  componentDidMount() {
    fetch("https://country.register.gov.uk/records.json?page-size=5000")
      .then(response => {
        //check if response is ok
        console.log("About to check for errors");
        if (!response.ok) {
          console.log("An error did occure, lets throw an error.");
          throw new Error("Something went wrong"); //throw an error
        }
        return response; //ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data).map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        //this catch handles the error condition
        this.setState({
          error: err.message
        });
        console.log("Handling the error here.", err);
      });
  }

  //Interactivity - select a country & see results
  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {
    //conditionally render CountrySelector if data available
    const demon = this.state.selected ? (
      <Demonym
        name={this.state.selected["citizen-names"]}
        country={this.state.selected.name}
      />
    ) : (
      <div className="demonym_app__placeholder">Select a country above</div>
    );
    //only display error message if one exists:
    const error = this.state.error ? (
      <div className="demonym_app__error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className="demonym_app">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
        />
        {demon}
      </div>
    );
  }
}
