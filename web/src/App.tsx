import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Sample from "./routes/sample";
// import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Routes>
          <Route path="/" element={Home} />
          <Route path="/sample" element={Sample} />
        </Routes> */}
        <Home title="Home画面のprops" />
      </div>
    );
  }
}
