// actions
const INITIAL = 'INITIAL';
const ADD = 'ADD';
const EDIT = 'EDIT';

// action creators
const fetchInitial = data => ({
  type: INITIAL,
  data,
});
const fetchAdd = data => ({
  type: ADD,
  data,
});
const fetchEdit = data => ({
  type: EDIT,
  data,
});

function workReducer(state, action) {
  switch (action.type) {
    case 'INITIAL': {
      return [...action.data];
    }
    case 'ADD': {
      return [...action.data];
    }
    case 'EDIT': {
      return [];
    }
    default: {
      return state;
    }
  }
}

export { workReducer, fetchInitial, fetchAdd, fetchEdit };
