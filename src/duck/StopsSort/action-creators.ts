import types from './types';

const stopSortCreator = () => ({
  type: types.SET_STOPS,
});

const stopSortUpdateCreator = (payload: {
  selectAll: boolean;
  choosedOption: {};
}) => ({
  type: types.UPDATE_STOPS,
  payload,
});

const actionCreators = {
  stopSortCreator,
  stopSortUpdateCreator,
};

export default actionCreators;