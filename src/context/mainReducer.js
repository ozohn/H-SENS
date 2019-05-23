/* eslint-disable no-underscore-dangle */
import {
  GET_PRE_STATE,
  FETCH_USER_DATA,
  FETCH_WORKS,
  INPUT_CHANGE,
  FILTER_CHANGE,
  FETCH_CURRENT_DATA,
  SHOW_WORK,
  SHOW_SEARCH_WORK_DETAIL,
  EDIT_USER,
  REMOVE_WORK,
  FETCH_ADD_WORK,
  FETCH_CREATOR_WORKS,
  FETCH_EDIT_WORK,
  FETCH_SEARCH_DATA,
  CHANGE_INDEX,
  SET_SEARCH_LOADING,
  SET_USER_PAGE_LOADING,
} from './actions';

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
const fetchRemoveWork = data => ({
  type: REMOVE_WORK,
  data,
});
const fetchCreatorWorks = data => ({
  type: FETCH_CREATOR_WORKS,
  data,
});
const fetchAddWork = data => ({
  type: FETCH_ADD_WORK,
  data,
});
const fetchEditWork = data => ({
  type: FETCH_EDIT_WORK,
  data,
});
const getSearchedData = data => ({
  type: FETCH_SEARCH_DATA,
  data,
});
const getPreState = data => ({
  type: GET_PRE_STATE,
  data,
});
const changeIndex = data => ({
  type: CHANGE_INDEX,
  data,
});
const setSearchLoading = data => ({
  type: SET_SEARCH_LOADING,
  data,
});
const showSearchWorkDetail = data => ({
  type: SHOW_SEARCH_WORK_DETAIL,
  data,
});
const setUserPageLoading = data => ({
  type: SET_USER_PAGE_LOADING,
  data,
});

function mainReducer(state, action) {
  switch (action.type) {
    case 'GET_PRE_STATE': {
      return { ...state, ...action.data };
    }
    case 'FETCH_USER_DATA': {
      return { ...state, user: { ...action.data, login: true } };
    }
    case 'INPUT_CHANGE': {
      return { ...state, searchValue: action.data };
    }
    case 'FILTER_CHANGE': {
      return { ...state, searchFilter: action.data };
    }
    case 'FETCH_CURRENT_DATA': {
      return { ...state, curData: action.data };
    }
    case 'FETCH_SEARCH_DATA': {
      return { ...state, searchedData: action.data };
    }
    case 'SET_SEARCH_LOADING': {
      return { ...state, searchLoading: action.data };
    }
    case 'SET_USER_PAGE_LOADING': {
      return { ...state, userPageLoading: action.data };
    }
    case 'EDIT_USER': {
      return {
        ...state,
        user: { ...state.user, userInfo: { ...state.user.userInfo, ...action.data } },
        curData: { ...state.curData, user: action.data },
      };
    }
    case 'SHOW_WORK': {
      return {
        ...state,
        curData: {
          ...state.curData,
          works: state.curData.works.map(work => {
            if (work._id === action.data._id) {
              return { ...work, workview: !work.workview };
            }
            return work;
          }),
        },
      };
    }
    case 'SHOW_SEARCH_WORK_DETAIL': {
      return {
        ...state,
        searchedData: state.searchedData.map(work => {
          if (work._id === action.data._id) {
            return { ...work, workview: !work.workview };
          }
          return work;
        }),
      };
    }
    case 'REMOVE_WORK': {
      return {
        ...state,
        curData: {
          ...state.curData,
          works: state.curData.works.filter(work => work._id !== action.data._id),
        },
      };
    }
    case 'FETCH_CREATOR_WORKS': {
      return { ...state, curData: action.data };
    }
    case 'FETCH_ADD_WORK': {
      return { ...state, curData: { ...state.curData, works: action.data } };
    }
    case 'FETCH_EDIT_WORK': {
      return {
        ...state,
        curData: {
          ...state.curData,
          works: state.curData.works.map(work => {
            if (work._id === action.data._id) {
              return action.data;
            }
            return work;
          }),
        },
      };
    }
    case 'CHANGE_INDEX': {
      return { ...state, pageIndex: action.data };
    }
    default:
      return state;
  }
}

export {
  getPreState,
  mainReducer,
  getUserData,
  getWorks,
  inputChange,
  filterChange,
  getCurrentData,
  showWorkDetail,
  showSearchWorkDetail,
  editUser,
  fetchRemoveWork,
  fetchCreatorWorks,
  fetchAddWork,
  fetchEditWork,
  getSearchedData,
  changeIndex,
  setSearchLoading,
  setUserPageLoading,
};
