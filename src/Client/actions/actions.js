import * as actions from "./actionTypes";
import axios from "axios";

// TODO: step2: add corresponding actions here

export const addMessage = (element) => {
  console.log(">> Message being added is ", element);
  //  WITHOUT CONNECTING TO DATABASE
  //   return function (dispatch) {
  //     dispatch(addMessageAsync(element));
  //   };

  return function (dispatch) {
    console.log(">> element.id", element.id);
    axios
      .post("http://127.0.0.1:9000/posts", {
        id: element.id,
        name: element.name,
        msg: element.msg,
        like: element.like,
        time: element.time,
        haveRead: element.haveRead,
      })
      .then((response) => {
        // console.log("resolve promise:", response.data);
        // dispatch(loading());
        dispatch(addMessageAsync(response.data));
      })
      .catch((reject) => {
        console.log(">> something wrong", reject);
      });
  };
};

export const addMessageAsync = (element) => {
  return {
    type: actions.MSG_ADD,
    payload: element,
  };
};

export const deleteMessage = (id) => {
  console.log(">> Message being deleted is ", id);
  return {
    type: actions.MSG_DEL,
    payload: id,
  };
};

export const clearMessage = () => {
  console.log(">> Messges being cleared");
  return {
    type: actions.MSG_CLEAR,
  };
};

export const likeMessage = (id) => {
  console.log(">> Message being liked is ", id);
  return {
    type: actions.MSG_LIKE,
    payload: id,
  };
};

export const readMessage = (id) => {
  console.log(">> Message being read is ", id);
  return {
    type: actions.MSG_RESOLVED,
    payload: id,
  };
};

// export const loading = () => {
//   return {
//     type: actions.MSG_LOADING,
//   };
// };
