import types from 'core/types';

const initialState = {
  recording : null
}

export function audioReducer(state = initialState, action) {
  switch (action.type) {

  case types.SAVE_RECORDING: {
    return Object.assign({}, state, {
      recording: action.recording
    });
  }

  default:
    return state;
  }

}