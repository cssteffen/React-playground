import React from "react";

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  };

  static defaultProps = {
    bulletInChamber: 8
  };

  handleButtonClick = () => {
    console.log("Trigger Pulled");
    this.setState({
      spinningTheChamber: true
    });
    // TimeOUT interval (2sec) //
    this.timeout = setTimeout(() => {
      console.log("setTimeout");
      // get random number between (1-8) //
      const randomNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false
      });
    }, 2000);
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  rouletteMessage() {
    const { chamber, spinningTheChamber } = this.state;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber === true) {
      return "spinning the chamber and pulling the trigger!...";
    } else if (chamber === bulletInChamber) {
      return "BANG!!!!";
    } else {
      return "you're safe!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.rouletteMessage()}</p>
        <button onClick={this.handleButtonClick}>"Pull the trigger"</button>
      </div>
    );
  }
}

export default RouletteGun;
