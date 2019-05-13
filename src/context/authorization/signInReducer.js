import { INPUT_ID, INPUT_PASSWORD, LOADING_STATE, CORRECT_STATE } from '../actions';

// action creators
const setIdInput = data => ({
  type: INPUT_ID,
  data,
});
const setPasswordInput = data => ({
  type: INPUT_PASSWORD,
  data,
});
const setLoadingState = data => ({
  type: LOADING_STATE,
  data,
});
const setCorrectState = data => ({
  type: CORRECT_STATE,
  data,
});

function signInReducer(state, action) {
  switch (action.type) {
    case 'INPUT_ID': {
      return { ...state, id: action.data };
    }
    case 'INPUT_PASSWORD': {
      return { ...state, pw: action.data };
    }
    case 'LOADING_STATE': {
      return { ...state, bLoading: action.data };
    }
    case 'CORRECT_STATE': {
      return { ...state, bCorrect: action.data };
    }
    default: {
      return state;
    }
  }
}

export { signInReducer, setIdInput, setPasswordInput, setCorrectState, setLoadingState };
