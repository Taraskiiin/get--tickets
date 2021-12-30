import types from './types';

const searchIdReducer = (
  state = { searchId: '' },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case types.SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
};

export default searchIdReducer;
