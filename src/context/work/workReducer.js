/* eslint-disable no-underscore-dangle */
import { INITIAL, ADD, EDIT, SHOW } from '../actions';

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
      return state.map(work => {
        if (work._id === action.data._id) {
          return action.data;
        }
        return work;
      });
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
