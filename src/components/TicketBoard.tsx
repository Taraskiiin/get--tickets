import React, { useEffect } from 'react';

import Ticket, { ITicket } from './Ticket';
import { ActionCreators } from '../duck/index';
import { useDispatch, useSelector } from 'react-redux';

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
    searchId ? null : dispatch(ActionCreators.fetchSearchIdCreator());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    searchId ? dispatch(ActionCreators.fetchTicketsCreator()) : [];
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
