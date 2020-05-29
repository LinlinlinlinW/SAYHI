import React from 'react';
import "../index.css"
import Message from "./Message";
import store from "../store";




// import { connect } from 'react-redux';
// import {readMessage, likeMessage, deleteMessage} from "./actions/actions";


class MessageDisplayCard extends React.Component {
    render() {
       // const messageList = store.getState();
        let messageList = [
                    {
                        "id": 0,
                        "name": "John Doe",
                        "msg": "Message shown here!",
                        "like" : 0,
                        "haveRead": false
                    },
                    {
                        "id": 1,
                        "name": "Obaseki Nosa",
                        "msg": "Message shown here!",
                        "like" : 3,
                        "haveRead": true
                    }
                ];
        console.log(">> messageList is ", JSON.stringify(messageList));

        const messages = messageList.map(
            (eachMessage) =>
                (<Message id={eachMessage.id} name={eachMessage.name} msg={eachMessage.msg} like={eachMessage.like} haveRead={eachMessage.haveRead} />)
            );

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

export default MessageDisplayCard;

export const preFilledMsg = () => {
    return
}


// myStore.dispatch(readMessage(2));
//
// const mapStateToProps = (state) => { //name is by convention
//     //state has entire state of app!!
//     return { count: state.count }; //now it will appear as props
// }
//
// export default connect(mapStateToProps, { readMessage, likeMessage, deleteMessage })(MessageDisplayCard);

// class Tweet {
//     // data that we want to display when the component is rendered
//     state = {};
//
//     // describe what the UI should looks like, it's an react element
//     render(){
//         return (
//             // JSX -> Babel -> plain javascript
//             <label className="msg_block_header text">WELCOME</label>
//
//     //         < form
//     //     id = "msg_form" >
//     //         < label
//     //     className = "label text"
//     //     htmlFor = "msger_name" > Name < /label><br>
//     //     <textarea className="msg_text_area text" id="msger_name" placeholder="Enter your name"></textarea> < br >
//     //
//     //     < label
//     //     className = "label text"
//     //     htmlFor = "msger_content" > Message *
//     // </label><br>
//     // <textarea className = "msg_text_area text" id = "msger_content" placeholder="Enter your message" required = "required"></textarea><br>
//     //
//     // <button className = "button_stuff" id = "submit_msg">submit</button>
//     // <button className = "button_stuff" id = "clean_msg"> clean </button>
//     // </form>
//         )
//     }
// }

