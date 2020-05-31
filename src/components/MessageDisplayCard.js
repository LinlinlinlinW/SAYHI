import React, {Component} from 'react';
import "../index.css"
import Message from "./Message";
import {connect} from 'react-redux'

class MessageDisplayCard extends Component {
    render() {
        let reversed = this.props.messageList.reverse();
        let sorted = this.props.messageList.sort((a, b) => a.key - b.key);
        console.log("sorted array is ",sorted);
        const messages = sorted.map(
            (eachMessage) =>
                (
                    <Message key={eachMessage.id}
                             id={eachMessage.id}
                             name={eachMessage.name}
                             msg={eachMessage.msg}
                             like={eachMessage.like}
                             time={eachMessage.time} />
                    ));
        return (
            <div className={"msg_block row_column"}>
                <h1>HISTORY</h1>
                <div id={"message_cards"}>{messages}</div>
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