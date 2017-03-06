import { combineReducers } from 'redux';

export function combine(state = [0], action) {
  switch (action.type) {
    case '':
      return [...state, 0];
    case '':
        return state.map((curr, action ) => {
            if (state === action) {
        return state;
      }

        return curr;
  });
    default:
      return state;
  }
}

export default combineReducers({

});
