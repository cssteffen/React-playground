import React, { Component } from "react";
import "./countrySelector.css";

/*  we can start with a class component that 
renders the select box displaying a list of 
countries passed as a prop. */

/* SPINNING LOADING feedback -- 
in the CountrySelector component we could 
conditionally show a loading spinner instead 
of the empty select box until the data is 
loaded. */

class CountrySelector extends Component {
  changeSelection(value) {
    if (value === "None") {
      this.props.changeHandler(null);
    } else {
      //find the country selected
      const country = this.props.countries.find(
        country => country.name === value
      );
      this.props.changeHandler(country);
    }
  }

  render() {
    const options = this.props.countries.map((country, i) => (
      <option value={country.name} key={i}>
        {country.name}
      </option>
    ));

    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a country:</label>
          <select
            id="country"
            name="country"
            onChange={e => this.changeSelection(e.target.value)}
          >
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );
  }
}
/* Notice that the first option in the select box is 
a placeholder option. We will have to handle this case 
when we add user interaction later. */
CountrySelector.defaultProps = {
  countries: []
};

export default CountrySelector;
