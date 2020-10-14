import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Marcin" />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.name}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "Good m";
    return (
      <h1>
        {timeOfDay} and {hours}
      </h1>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
