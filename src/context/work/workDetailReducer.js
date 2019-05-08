const UPDATE = 'UPDATE';

const updateWork = data => ({
  type: UPDATE,
  data,
});

function workDetailReducer(state, action) {
  switch (action.type) {
    case 'UPDATE': {
      return { ...action.data };
    }
    default: {
      return state;
    }
  }
}

export { workDetailReducer, updateWork };
