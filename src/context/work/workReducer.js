// actions
const INITIAL = 'INITIAL';
const ADD = 'ADD';
const EDIT = 'EDIT';
const SHOW = 'SHOW';

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
const updateView = data => ({
  type: SHOW,
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
    case 'SHOW': {
      return state.map(work => {
        if (work._id === action.data._id) {
          return { ...work, workview: !work.workview };
        }
        return work;
      });
    }
    default: {
      return state;
    }
  }
}

export { workReducer, fetchInitial, fetchAdd, fetchEdit, updateView };
