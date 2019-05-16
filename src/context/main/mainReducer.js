import {
  FETCH_USER_DATA,
  FETCH_WORKS,
  INPUT_CHANGE,
  FILTER_CHANGE,
  FETCH_CURRENT_DATA,
  SHOW_WORK,
  EDIT_USER,
} from '../actions';
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
const getCurrentData = data => ({
  type: FETCH_CURRENT_DATA,
  data,
});
const showWorkDetail = data => ({
  type: SHOW_WORK,
  data,
});
const editUser = data => ({
  type: EDIT_USER,
  data,
});

function mainReducer(state, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA': {
      return isObject(action.data) ? { ...state, user: action.data } : { ...state };
    }
    // case 'FETCH_WORKS': {
    //   return { ...state, works: action.data };
    // }
    case 'INPUT_CHANGE': {
      return { ...state, searchValue: action.data };
    }
    case 'FILTER_CHANGE': {
      return { ...state, searchFilter: action.data };
    }
    case 'FETCH_CURRENT_DATA': {
      return { ...state, curData: action.data };
    }
    case 'EDIT_USER': {
      return { ...state, user: action.data };
    }
    case 'SHOW_WORK': {
      return {
        ...state,
        curData: state.curData.map(work => {
          if (work._id === action.data._id) {
            return { ...work, workview: !work.workview };
          }
          return work;
        }),
      };
    }
    default:
      return state;
  }
}

export {
  mainReducer,
  getUserData,
  getWorks,
  inputChange,
  filterChange,
  getCurrentData,
  showWorkDetail,
  editUser,
};
