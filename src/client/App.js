import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import GistList from "./components/GistList";

class App extends Component {

  render() {
    return (
      <div>
          <h1 className="hello">Hello!</h1>
          <GistList />
      </div>
    );
  }
}

export default App;
