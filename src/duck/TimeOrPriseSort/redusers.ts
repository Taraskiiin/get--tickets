import types from './types';

const timeOrPriceReducer = (
  state = { sortByPrice: true, sotrByTime: false },
  action: {
    type: string;
    payload: {
      sortByPrice: boolean;
      sotrByTime: boolean;
    };
  }
) => {
  switch (action.type) {
    case types.SET_FILTER_BY_PRICE:
      return {
        ...state,
        sortBy: { sortByPrice: true, sotrByTime: false },
      };
    case types.SET_FILTER_BY_TIME:
      return {
        ...state,
        sortBy: { sortByPrice: false, sotrByTime: true },
      };
    default:
      return state;
  }
};

export default timeOrPriceReducer;
