import {UPDATE_SWITCH} from '../actions';
const switchReducer = (state ={}, {type, payload}) => {
      switch(type) {
             case UPDATE_SWITCH :
             return {state: payload}
             default :
     return state
};
};
export default switchReducer;