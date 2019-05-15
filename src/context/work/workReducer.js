/* eslint-disable no-underscore-dangle */
import { INITIAL, ADD, EDIT, REMOVE, SHOW } from '../actions';

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
const fetchRemove = data => ({
  type: REMOVE,
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
    case 'REMOVE': {
      return state.filter(work => work._id !== action.data._id);
    }
    default: {
      return state;
    }
  }
}

export { workReducer, fetchInitial, fetchAdd, fetchEdit, updateView, fetchRemove };
