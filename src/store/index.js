import {createStore, combineReducers} from 'redux';
import switchReducer from './reducers';
const reducer = combineReducers({switch: switchReducer});
const initialState = {
switch: {state: "SWITCH_ON"}
};
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;