const BASE_URL_FOR_SEARCH_ID = 'https://front-test.beta.aviasales.ru/';

export const fetchSearchIdFromApi = async () => {
  const response = await fetch(`${BASE_URL_FOR_SEARCH_ID}search`);
  const searchId = await response.json();
  return searchId.searchId;
};

export const getSearchId = (store: { searchIdReducer: { searchId: string } }) =>
  store.searchIdReducer.searchId;

export const fetchTicketsFromApi = async (URL: string) => {
  const response = await fetch(URL);
  const tickets = await response.json();
  return tickets.tickets;
};
