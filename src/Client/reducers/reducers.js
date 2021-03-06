import * as actions from "../actions/actionTypes";

// TODO: step3: goto reducer and add specific actions

// The initial state should be an empty array
export default function myReducer(state = [], action) {
  switch (action.type) {
    case actions.MSG_FETCH: {
      console.log(">> step2: Reducers: fetch message");
      state = action.payload;
      let result = Object.values(state);
      return result;
    }

    case actions.MSG_ADD: {
      console.log(">> step2: Reducers: add message");
      state.loading = false;
      return [...state, action.payload];
    }

    case actions.MSG_DEL: {
      console.log(">> step2: Reducers: delete message");
      let rr = state.filter((ele) => ele.id !== action.payload);
      return rr;
    }

    case actions.MSG_CLEAR: {
      console.log(">> Reducers: clear message");
      return [];
    }

    case actions.MSG_LIKE: {
      console.log(">> step2: Reducers: LIKE message");
      let newRes = state.map((ele) => {
        if (ele.id === action.payload) {
          const likeNum = ele.like + 1;
          return { ...ele, like: likeNum };
        } else return ele;
      });
      return newRes;
    }

    case actions.MSG_RESOLVED: {
      console.log(">> step2: Reducers: haveRead message");
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

    case actions.MSG_SEARCH: {
      console.log(">> step2: Reducers: searching");
      state = action.payload;
      return state;
    }

    case actions.MSG_LOADING: {
      console.log(">> step2: Reducers: loading message");
      return Object.assign({}, state, { isLoading: true });
    }

    default:
      return state;
  }
}
