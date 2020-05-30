import React, {Component} from 'react';
import "../index.css";
import { AiFillLike } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { likeMessage, deleteMessage } from "../actions/actions"
import { connect } from 'react-redux';


class Message extends Component{
    constructor(props){
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickLike = this.handleClickLike.bind(this);
    }

    handleClickLike = (event) => {
        event.preventDefault();
        this.props.clickLike(this.props.id);
    }

    handleClickDelete = (event) => {
        event.preventDefault();
        console.log(">> in handleClickDelete, id is ", this.props.id)
        this.props.clickDelete(this.props.id);
    }

    render(){
        return(
            <div className={"card-container"}>
                <div className={"card-container-first-row"}>{this.props.name}</div>
                <div className={"card-container-second-row"}>{this.props.msg}</div>
                <div className={"card-container-third-row"}>
                    <button className={"button_stuff"} onClick={this.handleClickLike}>
                        <AiFillLike className={"button_icon"} />
                        {this.props.like}
                    </button>
                    <button className={"button_stuff"} onClick={this.handleClickDelete}>
                        <RiDeleteBin6Line className={"button_icon"} />
                    </button>
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