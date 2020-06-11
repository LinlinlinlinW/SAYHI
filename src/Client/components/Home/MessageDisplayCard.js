import React, { Component } from "react";
import "../../index.css";
import Message from "./Message";
import { connect } from "react-redux";
import { clearMessage } from "../../actions/actions";

class MessageDisplayCard extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };

    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleDisplay = () => {
    let sorted = this.props.messageList.sort(
      // (a, b) => b.id.replace(/^id+/i, "") - a.id.replace(/^id+/i, "")
      (a, b) => b.time - a.time
    );

    if (sorted) {
      let messages = sorted.map((eachMessage) => (
        <Message
          key={eachMessage.id}
          id={eachMessage.id}
          name={eachMessage.name}
          msg={eachMessage.msg}
          like={eachMessage.like}
          time={eachMessage.time}
          haveRead={eachMessage.haveRead}
        />
      ));
      return messages;
    } else {
      return sorted;
    }
  };

  handleClickClear = (event) => {
    event.preventDefault();
    this.props.clickClear();
  };

  componentDidMount = () => {
    // this.props.fetchPrefilledMsg()
  };

  render() {
    return (
      <div className={"msg_block row_column"}>
        <h1>HISTORY</h1>
        <div>
          <button
            className={"button_stuff"}
            style={{ display: "inline-block" }}
            onClick={this.handleClickClear}
          >
            CLEAR ALL MESSAGES
          </button>
        </div>

        <div id={"message_cards"}>{this.handleDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messageList: state.reducers,
  };
};

const mapActionsToProps = (dispatch) => ({
  clickClear: () => dispatch(clearMessage()),
  // fetchPrefilledMsg: () => dispatch(fetchMessage())
});

export default connect(mapStateToProps, mapActionsToProps)(MessageDisplayCard);
