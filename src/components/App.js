import React from 'react';
import "../index.css"
import MessageInputCard from "./MessageInputCard";
import MessageDisplayCard from "./MessageDisplayCard";

class App extends React.Component{
    constructor(props) {
        super(props);
        // prefilled messages
        this.state = {list: [
                {
                    "id": 0,
                    "name": "John Doe",
                    "msg": "Message shown here!",
                    "like" : 0,
                    "haveRead": false
                },
                {
                    "id": 1,
                    "name": "Obaseki Nosa",
                    "msg": "Message shown here!",
                    "like" : 3,
                    "haveRead": true
                }
            ]};
    }

    addToList = (name, msg) => {
        let id = this.state.list.length;
        let element ={"id":id,"name": name,"msg": msg,"like": 0, "haveRead": false};
        this.setState({list: this.state.list.push(element)});
        console.log(this.state.list)
    }



    render() {
        // return <p>
        //     The date is {this.state.date}
        // </p>;

        return (
            <div className="App">

                {/*<h1>Count {counter}</h1>*/}
                <MessageInputCard func = {this.addToList} />
                <MessageDisplayCard />
                {/*<button onClick={() => dispatch(increment(1))}> + </button>*/}
                {/*<button onClick={() => dispatch(decrement())}> - </button>*/}
            </div>
        );
    }

}

export default App;
