import React, {Component} from 'react';
import "../index.css"
import Message from "./Message";
// import { connect } from 'react-redux';
// import {readMessage, likeMessage, deleteMessage} from "./actions/actions";
import myStore from "../store"
import nextId from "react-id-generator";
import {connect} from 'react-redux'

class MessageDisplayCard extends Component {
    render() {

        console.log(">> In Display, get State test: ", this.props.messageList);

        const messages = this.props.messageList.map(
            (eachMessage) =>
                (<Message key={eachMessage.id}
                          id={eachMessage.id}
                          name={eachMessage.name}
                          msg={eachMessage.msg}
                          like={eachMessage.like}
                          haveRead={eachMessage.haveRead} />));

        return (
            <div id={"msg_block_stored_msg"}>
                <h1>HISTORY</h1>
                <ul id={"msg-cards"}>
                    {messages}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // TODO might have error, why reducers?
        messageList: state.reducers
    }
}


export default connect(mapStateToProps, null)(MessageDisplayCard);