import React, {Component} from 'react';
import "../index.css";
import Message from "./Message";

class ViewDetail extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className={"card-container"}>
                <h3>Details</h3>
                <p>Name: {this.props.name}</p>
                <p>Message: {this.props.msg}</p>
                <p>Like: {this.props.like}</p>
                <p>Time: {this.props.time}</p>
            </div>


        )
    }
}

export default ViewDetail;