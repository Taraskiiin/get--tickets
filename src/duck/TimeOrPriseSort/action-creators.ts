import types from './types';

const filterByPriceCreator = () => ({
  type: types.SET_FILTER_BY_PRICE,
});

const filterByTimeCreator = () => ({
  type: types.SET_FILTER_BY_TIME,
});

const actionsCreators = {
  filterByPriceCreator,
  filterByTimeCreator,
};

export default actionsCreators;
