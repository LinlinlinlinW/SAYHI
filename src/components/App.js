import React from 'react';
import "../index.css"
import MessageInputCard from "./MessageInputCard";
import MessageDisplayCard from "./MessageDisplayCard";
import Navbar from "./Navbar";
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Header />
                <Switch>
                    <Route path={"../public/index"} exact component={Home} />
                    <Route path={"../public/aboutme"} exact component={Header} />
                </Switch>
            </div>
        </Router>

    );
}

const Home = () => (
    <div>
        <MessageInputCard />
        <MessageDisplayCard />
    </div>
)

export default App;
