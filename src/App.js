//RUNNING SMOKE TEST EXAMPLE
import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Playground + Drills!</h1>
        <div>
          <h3>HelloWorld Component</h3>
          <HelloWorld />
        </div>
        <div>
          <h3>TheDate Component</h3>
          <TheDate />
        </div>
        <div>
          <h3>Counter Component</h3>
          <Counter count={123} />
        </div>
        <div>
          <h3>Bomb Component</h3>
          <Bomb />
        </div>
        <div>
          <h3>RouletteGun Component</h3>
          <RouletteGun />
        </div>
        <div>
          <h3>Messages Component</h3>
          <Messages name="Messages" unread={0} />
          <Messages name="Notifications" unread={10} />
        </div>
      </div>
    );
  }
}

export default App;

//ORIGINAL CODE BELOW
/*
import React from "react";
import Split from "./composition/Split";
import "./App.css";
import Tooltip from "./composition/Tooltip";
import "./Split.css";

// make 2 tooltips here and another inside the add directly
const firstTooltip = (
  <Tooltip color="hotpink" message="tooltip message">
    Lorem ipsum..
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color="#126BCC" message="another tooltip message">
    officiajl...
  </Tooltip>
);

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis="2">
        This is the content for the left `Split`. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Incidunt ex velit suscipit facere
        officia?
        {/* make another tooltip directly inside the App *}
        <Tooltip message="one more tooltip message">Necessitatibus....</Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
*/