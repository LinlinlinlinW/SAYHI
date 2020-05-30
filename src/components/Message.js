import React, {Component} from 'react';
import "../index.css";
import { AiFillLike, AiFillEye, AiFillDelete } from 'react-icons/ai'
import { likeMessage, deleteMessage } from "../actions/actions"
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Guest",
            id: -1,
            msg: "The guest doesn't say anything",
            like: 0,
            time: new Date().toLocaleString()
        }
        console.log(">> local time is ", this.state.time)
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickLike = this.handleClickLike.bind(this);
    }

    handleClickLike = (event) => {
        event.preventDefault();
        this.props.clickLike(this.props.id);
    }

    handleClickDelete = (event) => {
        event.preventDefault();
        this.props.clickDelete(this.props.id);
    }


    render(){
        return(
            <div className={"card-container"} onClick={this.handleViewDetail}>
                <div className={"card-container-first-row"}>{this.props.name}</div>
                <div className={"card-container-second-row"}>{this.props.msg}</div>
                <div className={"card-container-third-row"}>
                    <button className={"button_stuff"} onClick={this.handleClickLike}>
                        <AiFillLike className={"button_icon"} />
                        {this.props.like}
                    </button>
                    <button className={"button_stuff"} onClick={this.handleClickDelete}>
                        <AiFillDelete className={"button_icon"} />
                    </button>
                    <Popup className={"pop_up_window"}
                           trigger={<button className={"button_stuff"}><AiFillEye className={"button_icon"} /></button>}
                           position="right center">
                        <div>Name: {this.props.name}</div>
                        <div>Message: {this.props.msg}</div>
                        <div>Like: {this.props.like}</div>
                        <div>Time: {this.props.time}</div>
                    </Popup>

                </div>
            </div>
        )
    }
}

const mapActionsToProps =(dispatch)=> ({
    clickLike: (id) => dispatch(likeMessage(id)),
    clickDelete: (id) => dispatch(deleteMessage(id)),
})

export default connect(null, mapActionsToProps)(Message);