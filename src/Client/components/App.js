import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import HomeHeader from "./Home/Header";
import AboutHeader from "./About/Header";
import MessageInputCard from "./Home/MessageInputCard";
import Tabs from "./Home/Tabs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectTimeLine from "./About/ProjectTimeLine";

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
  <div>
    <HomeHeader />
    <MessageInputCard />
    <Tabs />
  </div>
);

const About = () => (
  <div>
    <AboutHeader />
    <ProjectTimeLine />
  </div>
);

export default App;
