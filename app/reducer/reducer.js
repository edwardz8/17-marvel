import { combineReducers } from 'redux';

export function combine(state, action) {
  switch (action.type) {
    case 'SERIES_INFO@FIND_COMPLETE':
      return;
  }
}

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
