import types from './types';

const timeOrPriceReducer = (
  state = { sortByPrice: true, sortByTime: false },
  action: {
    type: string;
    payload: {
      sortByPrice: boolean;
      sortByTime: boolean;
    };
  }
) => {
  switch (action.type) {
    case types.SET_FILTER_BY_PRICE:
      return {
        sortByPrice: true,
        sortByTime: false,
      };
    case types.SET_FILTER_BY_TIME:
      return {
        sortByPrice: false,
        sortByTime: true,
      };
    default:
      return state;
  }
};

export default timeOrPriceReducer;
