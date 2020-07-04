import React, { Component } from "react";
import "../../index.css";
import Message from "./Message";
import { connect } from "react-redux";
import { clearMessage, fetchMessage } from "../../actions/actions";
import PageLoader from "./PageLoader";

class MessageDisplayCard extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      loading: true,
    };

    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleDisplay = () => {
    let sorted = this.props.messageList.sort((a, b) => b.dateNow - a.dateNow);

    if (sorted) {
      let messages = sorted.map((eachMessage) => (
        <Message
          loading={this.state.loading}
          key={eachMessage.id}
          id={eachMessage.id}
          name={eachMessage.name}
          msg={eachMessage.msg}
          like={eachMessage.like}
          time={eachMessage.time}
          haveRead={eachMessage.haveRead}
          dateNow={eachMessage.dateNow}
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

  componentDidMount = async () => {
    await setTimeout(async () => {
      await this.props.fetchMessageInDB();
      this.setState({ loading: false });
    }, 2500);
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

        <div id={"message_cards"}>
          <PageLoader loading={this.state.loading} />
          {this.handleDisplay()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  MessageDisplayCard.messageList = [
    ...new Set(state.reducers.map((e) => e.name)),
  ];

  return {
    messageList: state.reducers,
  };
};

const mapActionsToProps = (dispatch) => ({
  clickClear: () => dispatch(clearMessage()),
  fetchMessageInDB: () => dispatch(fetchMessage()),
});

export default connect(mapStateToProps, mapActionsToProps)(MessageDisplayCard);

export function getMsgList() {
  return MessageDisplayCard.messageList;
}
