import {createStore} from 'redux';
import rootReducer from './reducers/reducers';

export default createStore(
    rootReducer,
    [
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
    ]
);
