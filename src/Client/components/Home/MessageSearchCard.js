import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import { searchMessage, fetchMessage } from "../../actions/actions";
import Dropdown from "react-dropdown";
import "./dropdown.css";
import Message from "./Message";
import { getMsgList } from "./MessageDisplayCard";

class MessageSearchCard extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      mostLikes: false,
      startTime: "",
      endTime: "",
      keywords: "",
    };
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeMostLikes = this.handleChangeMostLikes.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeKeywords = this.handleChangeKeywords.bind(this);
  }

  componentDidMount = () => {
    //this.props.fetchMessageInDB();
  };

  handleClickClear = () => {
    this.refs.checkbox.checked = false;
    this.setState({
      author: "",
      mostLikes: false,
      startTime: "",
      endTime: "",
      keywords: "",
    });
  };

  handleChangeAuthor = (aauthor) => {
    this.setState({ author: aauthor.value });
  };

  handleChangeMostLikes = (event) => {
    event.preventDefault();
    this.setState({ mostLikes: true });
  };

  handleChangeStart = (sstartTime) => {
    this.setState({ startTime: sstartTime.target.value });
  };

  handleChangeEnd = (eendTime) => {
    let endT = eendTime.target.value.replace(/-/g, "");
    let startT = this.refs.startTime.value.replace(/-/g, "");

    if (endT < startT) {
      alert("time doesn't make sense");
      return null;
    }
    this.setState({ endTime: eendTime.target.value });
  };

  handleChangeKeywords = (kkeywords) => {
    this.setState({ keywords: kkeywords.target.value });
  };

  handleDisplay = () => {
    let filteredMsg = this.props.filteredMsgList;
    // console.log(">> filteredMsg is ", filteredMsg);

    if (filteredMsg) {
      let messages = filteredMsg.map((eachMessage) => (
        <Message
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
      return filteredMsg;
    }
  };

  render() {
    let opts = getMsgList();
    let defaultOption = "";

    return (
      <div className={"msg_block "}>
        <h1>SEARCH</h1>
        <div id={"searchCard"}>
          <table>
            <tbody>
              <tr>
                <th>
                  <div>Author</div>
                </th>
                <th>
                  <Dropdown
                    options={opts}
                    onChange={this.handleChangeAuthor}
                    value={defaultOption}
                    placeholder={
                      this.state.author === ""
                        ? "select an author"
                        : this.state.author
                    }
                  />
                </th>
              </tr>
              <tr></tr>
              <tr>
                <th>
                  <label>Most LIKEs</label>
                </th>
                <th>
                  <input
                    type="checkbox"
                    value={this.state.mostLikes}
                    onChange={this.handleChangeMostLikes}
                    ref="checkbox"
                  />
                </th>
              </tr>
              <tr></tr>
              <tr>
                <th>
                  <div>Create time range</div>
                </th>
                <th>
                  <input
                    type="date"
                    value={this.state.startTime}
                    onChange={this.handleChangeStart}
                    ref="startTime"
                  />
                  <input
                    type="date"
                    value={this.state.endTime}
                    onChange={this.handleChangeEnd}
                    ref="endTime"
                  />
                </th>
              </tr>
              <tr></tr>
              <tr>
                <th>
                  <label>Search key words</label>
                </th>
                <th>
                  <div>
                    <textarea
                      type="text"
                      value={this.state.keywords}
                      onChange={this.handleChangeKeywords}
                    />
                  </div>
                </th>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <button
            className={"button_stuff"}
            style={{ display: "inline-block" }}
            onClick={() => (
              this.props.searchMessage({
                author: this.state.author,
                mostLikes: this.state.mostLikes,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                keywords: this.state.keywords,
              }),
              this.handleClickClear
            )}
          >
            SEARCH
          </button>
          <button
            className={"button_stuff"}
            style={{ display: "inline-block" }}
            onClick={this.handleClickClear}
          >
            RESET
          </button>
        </div>
        <div id={"message_cards"}>{this.handleDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredMsgList: state.reducers,
  };
};

const mapActionsToProps = (dispatch) => ({
  searchMessage: (content) => {
    dispatch(searchMessage(content));
  },
});

export default connect(mapStateToProps, mapActionsToProps)(MessageSearchCard);
