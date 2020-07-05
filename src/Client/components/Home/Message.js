import React, { Component } from "react";
import { AiFillLike, AiFillEye, AiFillDelete } from "react-icons/ai";
import {
  likeMessage,
  deleteMessage,
  readMessage,
  editMessage,
} from "../../actions/actions";
import { connect } from "react-redux";
import "../../index.css";
import Popup from "reactjs-popup";
import "./css/Popup_window.css";
import CTE from "react-click-to-edit";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zIndex: 0,
      textAlign: "center",
      padding: "15px 40px 15px 40px",
      opacity: 0.8,
      filter: "blur(2px)",
      boxShadow: "3px 3px 0px 3px gray",
    };
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
    this.handleClickRead = this.handleClickRead.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.styleControl = this.styleControl.bind(this);
    this.mouseEnterCard = this.mouseEnterCard.bind(this);
  }

  handleClickLike = (event) => {
    event.preventDefault();
    this.props.clickLike(this.props.id);
  };

  handleClickDelete = (event) => {
    event.preventDefault();
    this.props.clickDelete(this.props.id);
  };

  handleClickRead = (event) => {
    event.preventDefault();
    this.props.clickRead(this.props.id);
  };

  handleEdit = (id, value) => {
    console.log(">> in handling edit", id, value);
    this.props.handleEdit({ id, value });
  };

  modal = (
    <Popup
      modal
      style={{ zIndex: 1 }}
      trigger={
        <button className={"button_stuff"}>
          <AiFillEye className={"button_icon"} />
        </button>
      }
    >
      {(close) => (
        <div className={"modal"}>
          <div className={"header"}> Message Details </div>

          <div className={"content"}>
            <h4> Created Time : {this.props.time.slice(0, 10)}</h4>
            <h4> Name : {this.props.name}</h4>
            <h4> Message Content : {this.props.msg}</h4>
            <h4> Number of Likes : {this.props.like}</h4>
          </div>

          <div className={"actions"}>
            <button
              className={"button_stuff"}
              onClick={() => {
                close();
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </Popup>
  );

  styleControl = () => {
    if (this.props.haveRead === true) {
      return {
        ...this.state,
        boxShadow: "3px 3px 3px 3px gray",
      };
    } else {
      return {
        ...this.state,
        boxShadow: "3px 3px 3px 3px #fbc8ec",
      };
    }
  };

  mouseEnterCard = () => {
    this.setState({
      opacity: 1,
      filter: "blur(0)",
      transition: "0.2s",
    });
  };

  mouseLeaveCard = () => {
    this.setState({
      opacity: 0.8,
      filter: "blur(2px)",
    });
  };

  render() {
    if (this.props.loading) return null;

    if (this.props.isSearchCard)
      return (
        <div
          className={"card-container"}
          style={this.styleControl()}
          onMouseEnter={this.mouseEnterCard}
          onMouseLeave={this.mouseLeaveCard}
        >
          <div>
            <div className={"card-container-first-row"}>{this.props.name}</div>
            <div className={"card-container-second-row"}>{this.props.msg}</div>
            <div className={"card-container-third-row"}>{this.modal}</div>
          </div>
        </div>
      );

    return (
      <div
        className={"card-container"}
        style={this.styleControl()}
        onMouseEnter={this.mouseEnterCard}
        onMouseLeave={this.mouseLeaveCard}
      >
        <div onClick={this.handleClickRead}>
          <div className={"card-container-first-row"}>{this.props.name}</div>

          <div className={"card-container-second-row"}>
            <CTE
              initialValue={this.props.msg}
              endEditing={(value) => this.handleEdit(this.props.id, value)}
            />
          </div>

          <div className={"card-container-third-row"}>
            <button className={"button_stuff"} onClick={this.handleClickLike}>
              <AiFillLike className={"button_icon"} />
              {this.props.like}
            </button>
            {this.modal}
            <button className={"button_stuff"} onClick={this.handleClickDelete}>
              <AiFillDelete className={"button_icon"} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = (dispatch) => ({
  clickLike: (id) => dispatch(likeMessage(id)),
  clickDelete: (id) => dispatch(deleteMessage(id)),
  clickRead: (id) => dispatch(readMessage(id)),
  handleEdit: ({ id, value }) => (
    dispatch(editMessage({ id, value })), console.log("herererererere!!!!")
  ),
});

export default connect(null, mapActionsToProps)(Message);
