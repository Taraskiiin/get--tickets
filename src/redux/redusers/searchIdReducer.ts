const initialState = {
  searchId: '',
};

export const SET_SEARCH_ID = 'SET_SEARCH_ID';
export const FETCH_SEARCH_ID = 'FETCH_SEARCH_ID';

export default function searchIdReducer(
  state = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
}

export const getSearchIdCreator = (payload: string) => ({
  type: SET_SEARCH_ID,
  payload,
});

export const fetchSearchIdCreator = () => ({
  type: FETCH_SEARCH_ID,
});
