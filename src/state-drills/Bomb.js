import React from "react";

class Bomb extends React.Component {
  state = {
    count: 0
  };

  bombWord() {
    const { count } = this.state;
    if (count >= 8) {
      clearInterval(this.interval); //why won't this clear the interval??
      return "BOOM!!!!";
    } else if (count % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  }

  componentDidMount() {
    //console.log("componentDidMount");
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnount() {
    clearInterval(this.interval);
    //this.setState({ count: 0 });
    //this.componentDidMount();
  }

  render() {
    return (
      <div>
        <p>{this.bombWord()}</p>
      </div>
    );
  }
}

export default Bomb;
