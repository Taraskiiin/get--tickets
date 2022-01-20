import React, { memo } from 'react';
import { PaginationList, PaginationItem, Link } from '../styles/Pagination';

interface IPaginationProps {
  ticketsPerPage: number;
  totalTickets: number;
  queryParamsState: {
    sortBy: string | null;
    page: number;
    stops: string | null;
  };
}
const Pagination: React.FC<IPaginationProps> = ({
  ticketsPerPage,
  totalTickets,
  queryParamsState,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationList>
      {pageNumbers.map((number) => (
        <Link
          key={number}
          to={`?sortBy=${queryParamsState.sortBy}&page=${number}&stops=${queryParamsState.stops}`}
        >
          <PaginationItem active={queryParamsState.page === number}>
            {number}
          </PaginationItem>
        </Link>
      ))}
    </PaginationList>
  );
};

export default memo(Pagination);
