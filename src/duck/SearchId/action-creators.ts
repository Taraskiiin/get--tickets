import types from './types';

const fetchSearchIdCreator = () => ({
  type: types.FETCH_SEARCH_ID,
});

const getSearchIdCreator = (payload: string) => ({
  type: types.SET_SEARCH_ID,
  payload,
});

const actionCreators = {
  fetchSearchIdCreator,
  getSearchIdCreator,
};
export default actionCreators;
