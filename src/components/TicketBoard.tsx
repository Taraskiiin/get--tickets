import React, { useEffect } from 'react';

import Ticket, { ITicket } from './Ticket';
import { fetchSearchIdCreator } from '../redux/duck/SearchId';
import { fetchTicketsCreator } from '../redux/duck/Tickets';
import { useDispatch, useSelector } from 'react-redux';

import { useQueryParams } from '../hooks/useQueryParams';

import { sortByPrice } from '../helpers/helpers';
import { sortByTime } from '../helpers/helpers';
import { maxValuesStops } from '../helpers/helpers';

const TicketBoard: React.FC = () => {
  const dispatch = useDispatch();

  const queryParams = useQueryParams();
  const querySortByPrice = queryParams.get('SortByPrice');
  const querySortByTime = queryParams.get('SortByTime');

  const stops = useSelector(
    (store: {
      stopsSortReducer: {
        stops: {
          selectAll: boolean;
          choosedOption: { el: string };
        };
      };
    }) => store.stopsSortReducer.stops
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
        ? dispatch(fetchSearchIdCreator())
        : dispatch(fetchTicketsCreator());
    }
  }, [dispatch, searchId, stop]);

  const filterByStops = tickets?.filter(
    (el) =>
      el.segments[0].stops.length <= maxValuesStops(stops.choosedOption) &&
      el.segments[1].stops.length <= maxValuesStops(stops.choosedOption)
  );

  if (querySortByPrice) {
    sortByPrice(filterByStops);
  } else if (querySortByTime) {
    sortByTime(filterByStops);
  }

  return (
    <div>
      {filterByStops?.length > 0 &&
        filterByStops.map((ticket, index) => (
          <Ticket key={index} {...ticket} />
        ))}
    </div>
  );
};

export default TicketBoard;
