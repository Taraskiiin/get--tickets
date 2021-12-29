import React, { useEffect } from 'react';

import Ticket, { ITicket } from './Ticket';
import searchIdActionCreators from '../duck/SearchId/action-creators';
import ticketsActionCreators from '../duck/Tickets/action-creators';
import { useDispatch, useSelector } from 'react-redux';

const TicketBoard: React.FC = () => {
  const dispatch = useDispatch();

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
    if (stop === false) {
      searchId === ''
        ? dispatch(searchIdActionCreators.fetchSearchIdCreator())
        : dispatch(ticketsActionCreators.fetchTicketsCreator());
    }
  }, [searchId]);

  return (
    <div>
      {tickets?.length
        ? tickets.map((ticket, index) => <Ticket key={index} {...ticket} />)
        : null}
    </div>
  );
};

export default TicketBoard;
