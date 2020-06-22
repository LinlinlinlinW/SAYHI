import React, { Component } from "react";
import "../index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import MessageInputCard from "./Home/MessageInputCard";
import Tabs from "./Home/Tabs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  // call
  <div>
    <Header />
    <MessageInputCard />
    <Tabs />
  </div>
);

const About = () => (
  <div>
    <h1>ABOUT ME</h1>
  </div>
);

export default App;
