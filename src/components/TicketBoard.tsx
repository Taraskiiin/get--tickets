import React, { useEffect } from 'react';

import Ticket, { ITicket } from './Ticket';
import searchIdActionCreators from '../duck/SearchId/action-creators';
import ticketsActionCreators from '../duck/Tickets/action-creators';
import { useDispatch, useSelector } from 'react-redux';

const TicketBoard: React.FC = () => {
  const dispatch = useDispatch();

  const sortByPrice = useSelector(
    (store: {
      timeOrPriceReducer: { sortByPrice: boolean; sortByTime: boolean };
    }) => store.timeOrPriceReducer.sortByPrice
  );

  const searchId = useSelector(
    (store: { searchIdReducer: { searchId: string } }) =>
      store.searchIdReducer.searchId
  );

  const tickets = useSelector(
    (store: { ticketsReducer: { tickets: ITicket[]; stop: boolean } }) =>
      store.ticketsReducer.tickets
  );

  const stop = useSelector(
    (store: { ticketsReducer: { tickets: ITicket[]; stop: boolean } }) =>
      store.ticketsReducer.stop
  );

  useEffect(() => {
    if (stop !== true) {
      searchId === ''
        ? dispatch(searchIdActionCreators.fetchSearchIdCreator())
        : dispatch(ticketsActionCreators.fetchTicketsCreator());
    }
  }, [dispatch, searchId, stop]);

  sortByPrice
    ? tickets?.sort((a: ITicket, b: ITicket) => a.price - b.price)
    : tickets?.sort(
        (a: ITicket, b: ITicket) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
      );

  return (
    <div>
      {tickets?.length
        ? tickets.map((ticket, index) => <Ticket key={index} {...ticket} />)
        : null}
    </div>
  );
};

export default TicketBoard;
