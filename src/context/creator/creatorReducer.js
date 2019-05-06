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
    case 'INITIAL': {
      return { ...action.data };
    }
    case 'edit': {
      return state;
    }
    default: {
      return state;
    }
  }
}

export { creatorReducer, fetchInitial, fetchEdit };
