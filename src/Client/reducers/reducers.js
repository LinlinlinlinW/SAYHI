import * as actions from "../actions/actionTypes";

// TODO: step3: goto reducer and add specific actions

// The initial state should be an empty array
export default function myReducer(
  state = [
    {
      id: "id1",
      name: "John Doe",
      msg: "Message shown here!",
      like: 0,
      time: new Date().toLocaleString(),
      haveRead: false,
    },
    {
      id: "id2",
      name: "Obaseki Nosa",
      msg: "Message shown here!",
      like: 3,
      time: new Date().toLocaleString(),
      haveRead: true,
    },
  ],
  action
) {
  switch (action.type) {
    case actions.MSG_ADD: {
      console.log(">> Reducers: add message");
      state.loading = false;
      return [...state, action.payload];
    }

    case actions.MSG_DEL: {
      console.log(">> Reducers: delete message");
      let rr = state.filter((ele) => ele.id !== action.payload);
      return rr;
    }

    case actions.MSG_CLEAR: {
      console.log(">> Reducers: clear message");
      return [];
    }

    case actions.MSG_LIKE: {
      console.log(">> Reducers: LIKE message");
      let newRes = state.map((ele) => {
        if (ele.id === action.payload) {
          const likeNum = ele.like + 1;
          return { ...ele, like: likeNum };
        } else return ele;
      });
      return newRes;
    }

    case actions.MSG_RESOLVED: {
      console.log(">> Reducers: haveRead message");
      let newRes = state.map((ele) => {
        if (ele.id === action.payload) {
          let hhRead = ele.haveRead;
          if (hhRead === false) {
            hhRead = true;
          }
          return { ...ele, haveRead: hhRead };
        } else return ele;
      });
      return newRes;
    }

    // case actions.MSG_LOADING: {
    //   console.log(">> Reducers: loading");
    //   state.loading = true;
    //   break;
    // }

    default:
      return state;
  }
}
