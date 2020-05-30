import React from 'react';
import "../index.css"
import MessageInputCard from "./MessageInputCard";
import MessageDisplayCard from "./MessageDisplayCard";

import Navbar from "./Navbar";

function App(){
    return (
        <div className="App">
            <MessageInputCard />
            <MessageDisplayCard />
        </div>
    );
}

export default App;
