import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home/Home";
import Calculator from "./Calculator/Calculator";
import Timer from "./Timer/Timer";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="body">
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/timer" component={Timer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
