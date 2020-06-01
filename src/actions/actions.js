import * as actions from "./actionTypes";

// TODO: step2: add corresponding actions here
export const addMessage = element => {
    console.log(">> Message being added is ", element);
    return {
        type : actions.MSG_ADD,
        payload: element
    }
}

export const deleteMessage = id => {
    console.log(">> Message being deleted is ", id);
    return {
        type : actions.MSG_DEL,
        payload: id
    }
}

export const likeMessage = id => {
    console.log(">> Message being liked is ", id);
    return {
        type : actions.MSG_LIKE,
        payload: id
    };
};

export const readMessage = id => {
    console.log(">> Message being read is ", id);
    return {
        type : actions.MSG_RESOLVED,
        payload: id
    };
}



