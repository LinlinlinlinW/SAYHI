import React, {Component} from 'react';
import "../index.css"
import { connect } from 'react-redux';
import { addMessage } from "../actions/actions";
import nextId from "react-id-generator";


class MessageInputCard extends Component {

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
                           onChange = {this.handleNameInput}
                           value={this.props.name} />
                <textarea  id={"msger_content"}
                           placeholder={"Enter your message"}
                           onChange = {this.handleMsgInput}
                           value={this.props.msg}/>
                <button className={"button_stuff"}
                        onClick={() =>
                            this.props.addMessage({id: nextId(), name: this.state.name, msg:this.state.message, like: 0, haveRead: false})}>ADD</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    let result = { name: state.name, msg: state.msg };
    console.log(">> In Input, state is ", result);
    return result; //now it will appear as props
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (ele) => dispatch(addMessage(ele))
    }
}

// export default connect(mapStateToProps, { addMessage })(MessageInputCard);
export default connect(null, mapDispatchToProps)(MessageInputCard)

// const unsubscribe = myStore.subscribe(() => {
//     // TODO: something we do in the UI layer, some UI components should subscribe the store changes
//     console.log("store changed! ", myStore.getState())
// })

// TODO : step4: goto index.js and create a dispatch
// myStore.dispatch(addMessage({}))
//
//

//
