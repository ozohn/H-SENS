// actions

const INPUT_ID = 'INPUT_ID';
const INPUT_PASSWORD = 'INPUT_PASSWORD';
const INPUT_RE_PASSWORD = 'INPUT_RE_PASSWORD';
const INPUT_NAME = 'INPUT_NAME';
const LOADING_STATE = 'LOADING_STATE';
const CORRECT_STATE = 'CORRECT_STATE';

// action creators
const setIdInput = data => ({
  type: INPUT_ID,
  data,
});
const setPasswordInput = data => ({
  type: INPUT_PASSWORD,
  data,
});
const setRePasswordInput = data => ({
  type: INPUT_RE_PASSWORD,
  data,
});
const setNameInput = data => ({
  type: INPUT_NAME,
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

function signUpReducer(state, action) {
  switch (action.type) {
    case 'INPUT_ID': {
      return { ...state, id: { b: action.data.b, data: action.data.data } };
    }
    case 'INPUT_PASSWORD': {
      return { ...state, pw: { b: action.data.b, data: action.data.data } };
    }
    case 'INPUT_RE_PASSWORD': {
      return { ...state, rePw: action.data };
    }
    case 'INPUT_NAME': {
      return { ...state, name: { b: action.data.b, data: action.data.data } };
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

export {
  signUpReducer,
  setIdInput,
  setPasswordInput,
  setCorrectState,
  setLoadingState,
  setRePasswordInput,
  setNameInput,
};
