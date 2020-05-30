import {combineReducers} from 'redux';
import * as actions from '../actions/actionTypes';
import store from "../store";
import nextId from "react-id-generator";

// TODO: step3: goto reducer and add specific actions

export default function myReducer (state = [
    {
        "id": nextId(),
        "name": "John Doe",
        "msg": "Message shown here!",
        "like" : 0,
        "haveRead": false
    },
    {
        "id": nextId(),
        "name": "Obaseki Nosa",
        "msg": "Message shown here!",
        "like" : 3,
        "haveRead": true
    }
], action) {

    switch (action.type) {

        case actions.MSG_ADD:
            return ([
                ...state,
                action.payload
            ]);

        case actions.MSG_DEL :{
            let rr = state.filter((ele) => ele.id !== action.payload)
            return rr;
        }

        case actions.MSG_RESOLVED: {
            let newResult = state.map((ele) => {
                if(ele.id === action.payload) {
                    const haveRead = true
                    return {...ele, like: haveRead}
                } else
                    return ele
            })
            return newResult;
        }


        case actions.MSG_LIKE:{
            let newRes = state.map((ele) => {
                if(ele.id === action.payload) {
                    const likeNum = ele.like + 1;
                    return {...ele, like: likeNum}
                } else
                    return ele
            })
            return newRes;
        }


        default:
            return state;
    }
}
