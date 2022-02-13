import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer } from './reducers/user';
import { conversationReducer } from './reducers/conversation';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    user :  userReducer,
    conversation : conversationReducer
});
const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
    rootReducers,
    composeEnhancer
);

export default store;