export const getSearchId = (store: { searchIdReducer: { searchId: string } }) =>
  store.searchIdReducer.searchId;

export const fetchTicketsFromApi = async (URL: string) => {
  try {
    const response = await fetch(URL);
    const tickets = await response.json();
    return tickets;
  } catch (error) {
    console.log(error);
  }
};
