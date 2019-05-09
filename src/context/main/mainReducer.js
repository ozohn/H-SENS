// actions

const FETCH_USER_DATA = 'FETCH_USER_DATA';
const FETCH_WORKS = 'FETCH_WORKS';

// action creators
const getUserData = data => ({
  type: FETCH_USER_DATA,
  data,
});
const getWorks = data => ({
  type: FETCH_WORKS,
  data,
});

function mainReducer(state, action) {
  switch (action.type) {
    case 'FETCH_USER_DATA': {
      return { ...state, user: action.data };
    }
    case 'FETCH_WORKS': {
      return { ...state, works: action.data };
    }
    default:
      return state;
  }
}

export { mainReducer, getUserData, getWorks };
