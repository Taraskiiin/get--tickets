import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import Ticket, { ITicket } from './Ticket';
import Pagination from './Pagination';

import { fetchSearchIdCreator } from '../redux/duck/SearchId';
import { fetchTicketsCreator } from '../redux/duck/Tickets';
import { filterTicketsByStops, sortByPrice, sortByTime } from '../helpers/helpers';
import { useQueryParams } from '../hooks/useQueryParams';
import { QueryParams } from '../interface';

const TicketBoard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [ticketsPerPage] = useState(15);

  const queryParams = useQueryParams();

  const queryParamsState = {
    sortBy: queryParams.get('sortBy'),
    page: Number(queryParams.get('page')),
    stops: queryParams.get('stops'),
  };

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
    if (stop !== true) {
      searchId === ''
        ? dispatch(fetchSearchIdCreator())
        : dispatch(fetchTicketsCreator());
    }
    setLoading(false);
  }, [dispatch, searchId, stop]);

  const maxStopsCount =
    queryParamsState.stops === QueryParams.All
      ? 3 // max available UI count of stops
      : Number(queryParamsState.stops);

  const filteredTicketsByStops =
    filterTicketsByStops(tickets, maxStopsCount) ?? [];

  if (
    queryParamsState.sortBy &&
    queryParamsState.sortBy === QueryParams.Price
  ) {
    sortByPrice(filteredTicketsByStops);
  } else if (
    queryParamsState.sortBy &&
    queryParamsState.sortBy === QueryParams.Time
  ) {
    sortByTime(filteredTicketsByStops);
  }

  const lastTicketIndex = queryParamsState.page * ticketsPerPage;
  const firstTicketIndex = lastTicketIndex - ticketsPerPage;
  const currentTicket = filteredTicketsByStops.slice(
    firstTicketIndex,
    lastTicketIndex
  );

  return (
    <div>
      {loading ? (
        <TailSpin color="#2196f3" height={80} width={80} />
      ) : (
        <div>
          {currentTicket.map((ticket, index) => (
            <Ticket {...ticket} key={index} />
          ))}
        </div>
      )}
      <Pagination
        ticketsPerPage={ticketsPerPage}
        totalTickets={filteredTicketsByStops.length}
        queryParamsState={queryParamsState}
      />
    </div>
  );
};

export default TicketBoard;
