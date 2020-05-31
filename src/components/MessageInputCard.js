import React, {Component} from 'react';
import "../index.css"
import { connect } from 'react-redux';
import { addMessage } from "../actions/actions";
import nextId from "react-id-generator";


class MessageInputCard extends Component {
    constructor() {
        super()
        this.state = {
            id:"",
            name : "",
            msg : "",
            like: 0,
            time: ""
        }
    }

    handleNameInput = nname => {
           this.setState({
               name: nname.target.value
        })
    }

    handleMsgInput = mmsg => {
        this.setState({
            msg : mmsg.target.value
        })
    }

    render() {
        return (
            <div className={"msg_block"}>
                <h1>WELCOME</h1>
                <textarea  id={"msger_name"}
                           placeholder={"Enter your name"}
                           required={"required"}
                           onChange = {this.handleNameInput}
                           value={this.state.name} />
                <textarea  id={"msger_content"}
                           placeholder={"Enter your message"}
                           required={"required"}
                           onChange = {this.handleMsgInput}
                           value={this.state.msg}/>
                <button className={"button_stuff"}
                        onClick={() => (
                            this.setState({
                                id:"",
                                name : "",
                                msg : "",
                                like: 0,
                                time: ""
                            }),
                            (this.props.addMessage({
                                id: nextId(),
                                name: this.state.name? this.state.name:"Guest",
                                msg: this.state.msg? this.state.msg:"The guest doesn't say anything",
                                like: 0,
                                time: new Date().toLocaleString()}))
                        )
                        }>ADD</button>
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
