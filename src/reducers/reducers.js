import {combineReducers} from 'redux';
import * as actions from '../actions/actionTypes';
import store from "../store";

// TODO: step3: goto reducer and add specific actions


function reducer (state = [
    {
        "id": 0,
        "name": "John Doe",
        "msg": "Message shown here!",
        "like" : 0,
        "haveRead": false
    },
    {
        "id": 1,
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
            ],{
                // new message goes here
            });

        case actions.MSG_DEL :
            return state.list.filter();

        case actions.MSG_RESOLVED:
            return null;
            // return myStore.map(msg => msg.id !== action.payload.id? msg : {... msg, haveRead: true});

        case actions.MSG_LIKE:
            let result = state.map(element => element.id === state);
            result.like += action.payload;

            return store;

        default:
            return state;
    }
}

const rootReducer = combineReducers(reducer);
export default rootReducer;

