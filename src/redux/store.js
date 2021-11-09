import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './reducers/user';
import { conversationReducer } from './reducers/conversation';


const rootReducers = combineReducers({
    user :  userReducer,
    conversation : conversationReducer
});
const composeEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(
    rootReducers,
    composeEnhancer
);

export default store;