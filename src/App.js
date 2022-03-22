import React from "react";
import Navbar from "./components/navbar";
import Main from "./main";
import "../src/App.css"
export default class App extends React.Component {

  render() {
    return (
      <div className="bg-app">
        
        <Navbar />
        <Main />
      </div>
    )
  }
}