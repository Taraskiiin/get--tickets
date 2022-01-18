import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import Ticket, { ITicket } from './Ticket';
import Pagination from './Pagination';

import { fetchSearchIdCreator } from '../redux/duck/SearchId';
import { fetchTicketsCreator } from '../redux/duck/Tickets';
import { sortByPrice } from '../helpers/helpers';
import { sortByTime } from '../helpers/helpers';
import { useQueryParams } from '../hooks/useQueryParams';

const TicketBoard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [ticketsPerPage] = useState(15);

  const queryParams = useQueryParams();

  const queryParamsState = {
    querySortBy: queryParams.get('sortBy'),
    queryPage: Number(queryParams.get('page')),
    queryStops: queryParams.get('stops'),
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
  let filterByStops = tickets;
  useEffect(() => {
    if (stop !== true) {
      searchId === ''
        ? dispatch(fetchSearchIdCreator())
        : dispatch(fetchTicketsCreator());
    }
    setLoading(false);
  }, [dispatch, searchId, stop]);

  if (queryParamsState.queryStops && queryParamsState.queryStops === 'all') {
    filterByStops = tickets?.filter(
      (el) =>
        el.segments[0].stops.length <= 3 && el.segments[1].stops.length <= 3
    );
  } else if (
    queryParamsState.queryStops &&
    queryParamsState.queryStops !== 'all'
  ) {
    filterByStops = tickets?.filter(
      (el) =>
        el.segments[0].stops.length <= Number(queryParamsState.queryStops) &&
        el.segments[1].stops.length <= Number(queryParamsState.queryStops)
    );
  }
  if (
    queryParamsState.querySortBy &&
    queryParamsState.querySortBy === 'price'
  ) {
    sortByPrice(filterByStops);
  } else if (
    queryParamsState.querySortBy &&
    queryParamsState.querySortBy === 'time'
  ) {
    sortByTime(filterByStops);
  }

  const lastTicketIndex = queryParamsState.queryPage * ticketsPerPage;
  const firstTicketIndex = lastTicketIndex - ticketsPerPage;
  const currentTicket = filterByStops.slice(firstTicketIndex, lastTicketIndex);

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
        totalTickets={filterByStops.length}
        queryParamsState={queryParamsState}
      />
    </div>
  );
};

export default TicketBoard;
