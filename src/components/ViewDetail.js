import React, {Component} from 'react';
import "../index.css";

class ViewDetail extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className={"msg_block"}>
                <h1>DETAILS</h1>
                <div className={"msg-cards"}>
                    <p>Name: {this.props.name}</p>
                    <p>Message: {this.props.msg}</p>
                    <p>Like: {this.props.like}</p>
                    <p>Time: {this.props.time}</p>
                </div>
            </div>


        )
    }
}

export default ViewDetail;