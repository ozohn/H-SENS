import { FETCH_USER_DATA, FETCH_WORKS, INPUT_CHANGE, FILTER_CHANGE } from '../actions';
import { isObject } from '../../util/checkType';

// action creators
const getUserData = data => ({
  type: FETCH_USER_DATA,
  data,
});
const getWorks = data => ({
  type: FETCH_WORKS,
  data,
});
const inputChange = data => ({
  type: INPUT_CHANGE,
  data,
});
const filterChange = data => ({
  type: FILTER_CHANGE,
  data,
});

function mainReducer(state, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA': {
      return isObject(action.data) ? { ...state, user: action.data } : { ...state };
    }
    case 'FETCH_WORKS': {
      return { ...state, works: action.data };
    }
    case 'INPUT_CHANGE': {
      return { ...state, searchValue: action.data };
    }
    case 'FILTER_CHANGE': {
      return { ...state, searchFilter: action.data };
    }
    default:
      return state;
  }
}

export { mainReducer, getUserData, getWorks, inputChange, filterChange };
