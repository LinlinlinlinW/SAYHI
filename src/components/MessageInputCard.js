import React, {Component} from 'react';
import "../index.css"
import { connect } from 'react-redux';
import { addMessage } from "../actions/actions";
import nextId from "react-id-generator";


class MessageInputCard extends Component {
    constructor() {
        super()
        this.state = {
            name : "Guest",
            message : "The guest doesn't say anything"
        }
    }

    handleNameInput = nname => {
           this.setState({
            name : nname.target.value
        })
    }

    handleMsgInput = mmsg => {
        this.setState({
            message : mmsg.target.value
        })
    }


    render() {
        return (
            <div id={"msg_block_added_msg"}>
                <h1>WELCOME</h1>
                <textarea  id={"msger_name"}
                           placeholder={"Enter your name"}
                           required={"required"}
                           onChange = {this.handleNameInput}
                           value={this.props.name} />
                <textarea  id={"msger_content"}
                           placeholder={"Enter your message"}
                           required={"required"}
                           onChange = {this.handleMsgInput}
                           value={this.props.msg}/>
                <button className={"button_stuff"}
                        onClick={() =>
                            this.props.addMessage({
                            id: nextId(),
                            name: this.state.name,
                            msg: this.state.message,
                            like: 0,
                            haveRead: false})}>ADD</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (ele) => dispatch(addMessage(ele))
    }
}

export default connect(null, mapDispatchToProps)(MessageInputCard)
