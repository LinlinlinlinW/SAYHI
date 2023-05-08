import * as actions from "./actionTypes";
import axios from "axios";

// step2: add corresponding actions here

const ci_url = "https://sayhi.onrender.com";

// FETCH MSG IN DB
export const fetchMessage = () => {
  console.log(">> step1: Action: Message being fetched.");
  return function (dispatch) {
    axios
      .put(ci_url + "/puts_prefill")
      .then((res) => {
        console.log(">> successfully prefilled msg fetched from db");
        dispatch(fetchMessageAsync(res.data));
      })
      .catch((rej) => {
        console.log(">> something wrong in fetching the prefilled msg:", rej);
      });
  };
};
const fetchMessageAsync = (messages) => {
  return {
    type: actions.MSG_FETCH,
    payload: messages,
  };
};

// ADD MSG
export const addMessage = (element) => {
  console.log(">> step1: Action: Message being added is ", element);
  return function (dispatch) {
    axios
      .post(ci_url + "/posts", {
        id: element.id,
        name: element.name,
        msg: element.msg,
        like: element.like,
        time: element.time,
        haveRead: element.haveRead,
        dateNow: element.dateNow,
      })
      .then((response) => {
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

// DELETE MSG
export const deleteMessage = (idToDel) => {
  return function (dispatch) {
    console.log(">> step1: Action: Message being deleted is ", idToDel);
    axios
      .delete(ci_url + "/deletes", {
        data: { id: idToDel },
      })
      .then((res) => {
        dispatch(deleteMessageAsync(res.data));
      })
      .catch((rej) => {
        console.log(">> ERROR in Action: error in delete message:", rej);
      });
  };
};
const deleteMessageAsync = (id) => {
  return {
    type: actions.MSG_DEL,
    payload: id,
  };
};

// CLEAR MSG
export const clearMessage = () => {
  console.log(">> step1: Action: Messges being cleared");
  return function (dispatch) {
    axios
      .delete(ci_url + "/deletes_all")
      .then((res) => {
        console.log(">> successfully clear msg in db", res);
        dispatch(clearMessageAsync());
      })
      .catch((rej) => {
        console.log(">> fail to clear msg in db", rej);
      });
  };
};
const clearMessageAsync = () => {
  return {
    type: actions.MSG_CLEAR,
  };
};

// LIKE MSG
export const likeMessage = (idToLike) => {
  console.log(">> step1: Action: Message being liked is ", idToLike);
  return function (dispatch) {
    axios
      .put(ci_url + "/puts_like", { id: idToLike })
      .then((res) => {
        console.log(">> successfully like msg in db", res.data.id);
        dispatch(likeMessageAsync(res.data.id));
      })
      .catch((rej) => {
        console.log(">> fail to LIKE msg in db", rej);
      });
  };
};
const likeMessageAsync = (id) => {
  return {
    type: actions.MSG_LIKE,
    payload: id,
  };
};

// READ MSG
export const readMessage = (idToRead) => {
  console.log(">> step1: Action: Message being read is ", idToRead);
  return function (dispatch) {
    axios
      .put(ci_url + "/puts_read", { id: idToRead })
      .then((res) => {
        console.log(">> successfully read msg in db", res.data.id);
        dispatch(readMessageAsync(res.data.id));
      })
      .catch((rej) => {
        console.log(">> fail to read msg in db", rej);
      });
  };
};
const readMessageAsync = (id) => {
  return {
    type: actions.MSG_RESOLVED,
    payload: id,
  };
};

// SEARCH MSG
export const searchMessage = (contentToSearch) => {
  console.log(">> step1: Action: content being searched is ", contentToSearch);
  return function (dispatch) {
    axios
      .put(ci_url + "/getFilterMsg", {
        content: contentToSearch,
      })
      .then((res) => {
        console.log(">>  successfully filter msg in db", res.data);
        dispatch(searchMessageAsync(res.data));
      })
      .catch((rej) => {
        console.log(">> fail to search msg in db", rej);
      });
  };
};

const searchMessageAsync = (content) => {
  return {
    type: actions.MSG_SEARCH,
    payload: content,
  };
};

// EDIT MSG
export const editMessage = (contentToEdit) => {
  console.log(">> step1: Action: content being edited is ", contentToEdit);
  return function (dispatch) {
    axios
      .put(ci_url + "/editMsg", { contentToEdit })
      .then((res) => {
        console.log(">> successfully edit msg in db", res);
      })
      .catch((rej) => {
        console.log(">> fail to edit msg in db", rej);
      });
  };
};
