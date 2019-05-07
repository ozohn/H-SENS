// actions

const INITIAL = 'INITIAL';
const EDIT = 'EDIT';

// action creators
const fetchInitial = data => ({
  type: INITIAL,
  data,
});
const fetchEdit = data => ({
  type: EDIT,
  data,
});

function creatorReducer(state, action) {
  switch (action.type) {
    case 'view': {
      return;
    }
    case 'edit': {
      return;
    }
    default:
      return state;
  }
}
function workReducer(state, action) {
  switch (action.type) {
    default:
      break;
  }
  return state;
}

export { creatorReducer, workReducer, fetchInitial, fetchEdit };
