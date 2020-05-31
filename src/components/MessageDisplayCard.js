import React, {Component} from 'react';
import "../index.css"
import Message from "./Message";
import {connect} from 'react-redux'

class MessageDisplayCard extends Component {
    render() {
        let reversed = this.props.messageList.reverse();
        const messages = reversed.map(
            (eachMessage) =>
                (
                    <Message key={eachMessage.id}
                          id={eachMessage.id}
                          name={eachMessage.name}
                          msg={eachMessage.msg}
                          like={eachMessage.like}
                          time={eachMessage.time} />));
        return (
            <div className={"msg_block"}>
                <h1>HISTORY</h1>
                <ul className={"msg-cards"}>
                    {messages}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messageList: state.reducers
    }
}


export default connect(mapStateToProps, null)(MessageDisplayCard);