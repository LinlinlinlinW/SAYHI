import * as actions from "./actionTypes";
import axios from "axios";

// TODO: step2: add corresponding actions here

// FETCH MSG IN DB
export const fetchMessage = () => {
  console.log(">> Message being fetched.");
  return function (dispatch) {
    axios
      .put("http://127.0.0.1:9000/puts_prefill")
      .then((res) => {
        console.log(">> prefilled msg fetched from db is ", res.data);
        dispatch(fetchMessageAsync(res.data));
      })
      .catch((rej) => {
        console.log(">> something wrong in fetching the prefilled msg");
      });
  };
};

const fetchMessageAsync = (messages) => {
  // console.log(">> in fetchMessageAsync,", messages);
  return {
    type: actions.MSG_FETCH,
    payload: messages,
  };
};

// ADD MSG
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
        dateNow: element.dateNow,
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

const addMessageAsync = (element) => {
  return {
    type: actions.MSG_ADD,
    payload: element,
  };
};

// TODO: DELETE MSG
export const deleteMessage = (id) => {
  console.log(">> Message being deleted is ", id);
  return {
    type: actions.MSG_DEL,
    payload: id,
  };
};

// CLEAR MSG
export const clearMessage = () => {
  console.log(">> Messges being cleared");
  return function (dispatch) {
    axios
      .delete("http://127.0.0.1:9000/deletes_all")
      .then((res) => {
        console.log(">> successfully clear msg in db", res);
        dispatch(clearMessageAsync());
      })
      .catch((rej) => {
        console.log(">> fail to clear msg in db", rej);
      });
    //handler.use("/deletes_all", deleteAllRoute);
  };
};

const clearMessageAsync = () => {
  return {
    type: actions.MSG_CLEAR,
  };
};

// TODO: LIKE MSG
export const likeMessage = (id) => {
  console.log(">> Message being liked is ", id);
  return {
    type: actions.MSG_LIKE,
    payload: id,
  };
};

// TODO: FETCH MSG
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
