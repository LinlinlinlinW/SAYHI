import React, { Component } from "react";
import "../../index.css";
import { connect } from "react-redux";
import { searchMessage, fetchMessage } from "../../actions/actions";
import Dropdown from "react-dropdown";
import "./dropdown.css";

class MessageSearchCard extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      mostLikes: false,
      startTime: "",
      endTime: "",
      keywords: "",
      selectedOption: null,
    };
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  componentDidMount = () => {
    this.props.fetchMessageInDB();
  };

  // componentDidUpdate = () => {
  //   this.props.fetchMessageInDB();
  // };

  handleClickSearch = (event) => {
    event.preventDefault();
    this.props.clickSearch();
  };

  handleChangeAuthor = (aauthor) => {
    console.log(">> Search : selected author is ", aauthor.value);
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
    this.setState({ endTime: eendTime.target.value });
  };

  handleChangeKeywords = (kkeywords) => {
    this.setState({ keywords: kkeywords.target.value });
  };

  render() {
    let options = this.props.fetchedMsgList.map((e) => e.name);
    let defaultOption = null;

    return (
      <div className={"msg_block "}>
        <h1>SEARCH</h1>
        <div id={"searchCard"}>
          <table>
            <tr>
              <th>
                <div>Author</div>
              </th>
              <th>
                <Dropdown
                  options={options}
                  onChange={this.handleChangeAuthor}
                  value={defaultOption}
                  placeholder="Select an author"
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
                />
                <input
                  type="date"
                  value={this.state.endTime}
                  onChange={this.handleChangeEnd}
                />
              </th>
            </tr>
            <tr></tr>
            <tr>
              <th>
                <label>Message key words</label>
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
          </table>
          <button
            className={"button_stuff"}
            style={{ display: "inline-block" }}
            onClick={this.handleClickSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(
    ">> in Search card->mapStateToProps, state.reducers is ",
    state.reducers
  );
  return {
    fetchedMsgList: state.reducers,
    filteredMsgList: state.reducers,
  };
};

const mapActionsToProps = (dispatch) => ({
  clickSearch: (content) => dispatch(searchMessage(content)),
  fetchMessageInDB: () => dispatch(fetchMessage()),
});

export default connect(mapStateToProps, mapActionsToProps)(MessageSearchCard);
