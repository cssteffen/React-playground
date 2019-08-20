import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = { count: 0 };
    //this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  /*======== ???????????????? ============*/
  //Make a number prop called step.
  //The step prop can control how much we add to the count
  //each time the button is clicked.
  //Don't forget to setup a default (static defaultProps)
  //for the step prop with the number 1.
  static defaultProps = {
    step: 1
  };

  //When adding an event listener function to a React class,
  //use an arrow function to make sure that this is
  //referring to the class instance.
  handleButtonClick = () => {
    console.log("props in handleButtonClick", this.props);
    console.log("state in handleButtonClick", this.state);
    const step = this.props.step;
    const newCount = this.state.count + step;
    this.setState({ count: newCount });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
