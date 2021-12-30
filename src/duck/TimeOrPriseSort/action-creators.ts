import types from './types';

const sortByPriceCreator = () => ({
  type: types.SET_FILTER_BY_PRICE,
});

const sortByTimeCreator = () => ({
  type: types.SET_FILTER_BY_TIME,
});

const actionsCreators = {
  sortByPriceCreator,
  sortByTimeCreator,
};

export default actionsCreators;
