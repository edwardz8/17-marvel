import { combineReducers } from 'redux';

export function combine(state = [0], action) {
  switch (action.type) {
    case '':
      return [...state, 0];
    case '':
      return state.map((curr, action) => {
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

/*
export default function reducer(state, action) {
  switch (action.type) {
    // CREATE: Add characters
    case 'CONTACT@CREATE':
      return { contacts: [action.data, ...state.contacts] };
    // READ: Loading all characters
    case 'CONTACT@FIND_ALL':
      return { contacts: action.data };
      // DELETE: Deleting all characters?
    case 'CONTACT@REMOVE':
      return { contacts: state.contacts.filter((x) => x.id !== action.data) };

    default:
      return state || { contacts: []};
  }
}
 */
