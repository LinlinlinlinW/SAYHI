import {createStore} from 'redux';
import rootReducer from './reducers';
import nextId from "react-id-generator";

const store = createStore(
    rootReducer
);

export default store;