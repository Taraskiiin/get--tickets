import types from './types';

const stopsSortReducer = (
  state = { stops: { selectAll: true, choosedOption: ['0', '1', '2', '3'] } },
  action: {
    type: string;
    payload: {
      selectAll: boolean;
      choosedOption: string;
    };
  }
) => {
  switch (action.type) {
    case types.SET_STOPS:
      return {
        ...state,
        stops: action.payload,
      };
    case types.UPDATE_STOPS: {
      return {
        ...state,
        stops: action.payload,
      };
    }
    default:
      return state;
  }
};

export default stopsSortReducer;
