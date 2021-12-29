export const getSearchId = (store: { searchIdReducer: { searchId: string } }) =>
  store.searchIdReducer.searchId;

export const fetchTicketsFromApi = async (URL: string) => {
  const response = await fetch(URL);
  const tickets = await response.json();
  return tickets;
  // try - catch give us infinity fetch with errors 500
  // (SyntaxError: Unexpected token S in JSON at position 0)
};
