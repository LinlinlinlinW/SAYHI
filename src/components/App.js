import React from 'react';
import "../index.css"
import MessageInputCard from "./MessageInputCard";
import MessageDisplayCard from "./MessageDisplayCard";
import Navbar from "./Navbar";
import Header from "./Header";


function App(){
    return (
        <div className="App">
            <Navbar />
            <Header />
            <MessageInputCard />
            <MessageDisplayCard />
        </div>
    );
}

export default App;
