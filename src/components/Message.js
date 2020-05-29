import React from 'react';
import "../index.css";
import { AiFillLike } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { likeMessage, deleteMessage } from "../actions/actions"
import { connect } from 'react-redux';

class Message extends React.Component{
    constructor(props) {
        super(props);

    }

    handleClickLike = (event) => {
        this.props.clickLike();
    }



    handleClickDelete = (event) => {
        this.props.clickDelete(event);
    }

    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.msg}</p>
                <button className={"button_stuff"} onClick={this.handleClickLike(this.props.id)}>
                    <AiFillLike className={"button_icon"} />
                    {this.props.like}
                </button>
                <button className={"button_stuff"} onclick={this.handleClickDelete(this.props.id)}>
                    <RiDeleteBin6Line className={"button_icon"} />
                </button>
            </div>

        )
    }
}

const mapActionsToProps =()=> ({
    clickLike: likeMessage,
    clickDelete: deleteMessage,
})

const mapStateToProps = (state) => {
    return {like: state.like}
}

export default connect(mapActionsToProps,mapStateToProps)(Message);