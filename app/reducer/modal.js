export default function modal(state = null, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return;
    default:
      return state;
  }
}
