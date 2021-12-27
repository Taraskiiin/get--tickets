import React, { useEffect } from 'react';

import Ticket, { ITicket } from './Ticket';
import { fetchSearchIdCreator } from '../redux/redusers/searchIdReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTicketsCreator } from '../redux/redusers/ticketsReducer';

const TicketBoard: React.FC = () => {
  const dispatch = useDispatch();
  const searchId = useSelector(
    (store: { searchIdReducer: { searchId: string } }) =>
      store.searchIdReducer.searchId
  );
  const tickets = useSelector(
    (store: { ticketsReducer: { tickets: ITicket[] } }) =>
      store.ticketsReducer.tickets.flat()
  );
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    searchId ? null : dispatch(fetchSearchIdCreator());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    searchId ? dispatch(fetchTicketsCreator()) : null;
  }, [dispatch, searchId]);
  return (
    <div>
      {tickets.length
        ? tickets.map((ticket, index) => <Ticket key={index} {...ticket} />)
        : null}
    </div>
  );
};

export default TicketBoard;
