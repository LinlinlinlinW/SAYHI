import React, {Component} from 'react';
import "../index.css";
import { AiFillLike, AiFillEye, AiFillDelete } from 'react-icons/ai'
import { likeMessage, deleteMessage } from "../actions/actions"
import { connect } from 'react-redux';
import Popup from "reactjs-popup";
import "./Popup_window.css"

class Message extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     id: -1,
        //     name: "Guest",
        //     msg: "The guest doesn't say anything",
        //     like: 0,
        //     time: new Date().toLocaleString()
        // }
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


    modal = (
        <Popup modal
               trigger ={<button className={"button_stuff"}><AiFillEye className={"button_icon"} /></button>} >
            {close => (
                <div className={"modal"}>
                    <div className={"header"}> Message id: {this.props.id} </div>

                    <div className={"content"}>
                        <h3> Message Created Time </h3>
                        {this.props.time} <br />
                        <h3> Name </h3>
                        {this.props.name}<br />
                        <h3> Message Content </h3>
                        {this.props.msg} <br />
                        <h3> Number of Likes </h3>
                        {this.props.like} <br />
                    </div>

                    <div className={"actions"}>
                        <button
                            className={"button_stuff"}
                            onClick={() => {close();}}>CLOSE</button>
                    </div>
                </div>
            )}
        </Popup>
    );



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
                        <AiFillDelete className={"button_icon"} />
                    </button>
                    {this.modal}
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