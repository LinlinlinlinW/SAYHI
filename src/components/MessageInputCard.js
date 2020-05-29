import React from 'react';
import "../index.css"

import myStore from '../store'
import { connect } from 'react-redux';
import {addMessage} from "../actions/actions";




class MessageInputCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name : "",
            message: ""
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
                <textarea  id={"msger_name"} placeholder={"Enter your name"} onChange = {this.handleNameInput} value={this.state.name} />
                <textarea  id={"msger_content"} placeholder={"Enter your message"} onChange = {this.handleMsgInput} value={this.state.msg}/>
                <button className={"button_stuff"} onClick={() => this.props.func(this.state.name, this.state.msg)}>ADD</button>
            </div>
        );
    }
}

export default MessageInputCard;


// const unsubscribe = myStore.subscribe(() => {
//     // TODO: something we do in the UI layer, some UI components should subscribe the store changes
//     console.log("store changed! ", myStore.getState())
// })

// TODO : step4: goto index.js and create a dispatch
// myStore.dispatch(addMessage({}))
//
//
// const mapStateToProps = (state) => { //name is by convention
//     //state has entire state of app!!
//     return { count: state.count }; //now it will appear as props
// }
//
// export default connect(mapStateToProps, { addMessage })(MessageInputCard);