import React, {Component} from 'react';
import "../index.css"
import Message from "./Message";
import ViewDetail from "./ViewDetail";
import {connect} from 'react-redux'

class MessageDisplayCard extends Component {
    render() {
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
                <ul className={"msg-cards"}>
                    {messages}
                </ul>
                <ViewDetail />
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