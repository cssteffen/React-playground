import React from "react";
import ReactDOM from "react-dom";
import Demonym from "./demonym";
import { shallow } from "enzyme";
//import renderer from "react-test-renderer";
//import toJson from "enzyme-to-json";

describe("Demonym Component", () => {
  //array of objects each with a name & country
  const demonymProps = [
    {
      name: "Barbadian",
      country: "Barbados"
    }
  ];
  /* SMOKE TEST */

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the first prop by default", () => {
    const wrapper = shallow(<Demonym demonym={demonymProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
