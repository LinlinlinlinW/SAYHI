import React from 'react';
import "../index.css"
import { connect } from 'react-redux';
import { addMessage } from "../actions/actions";



class MessageInputCard extends React.Component {

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
                        onClick={() => this.props.addMessage(this.props.id, this.props.name, this.props.msg, this.props.like, this.props.haveRead)}>ADD</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    let result = { name: state.name, msg: state.msg };
    console.log(">> In MessageInputCard, state is ", result);
    return result; //now it will appear as props
}

export default connect(mapStateToProps, { addMessage })(MessageInputCard);



// const unsubscribe = myStore.subscribe(() => {
//     // TODO: something we do in the UI layer, some UI components should subscribe the store changes
//     console.log("store changed! ", myStore.getState())
// })

// TODO : step4: goto index.js and create a dispatch
// myStore.dispatch(addMessage({}))
//
//

//
