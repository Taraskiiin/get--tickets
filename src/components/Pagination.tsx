import React, { memo } from 'react';
import { PaginationList, PaginationItem, Link } from '../styles/Pagination';

interface IPaginationProps {
  ticketsPerPage: number;
  totalTickets: number;
  queryParamsState: {
    querySortBy: string | null;
    queryPage: number;
    queryStops: string | null;
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
          to={`?sortBy=${queryParamsState.querySortBy}&page=${number}&stops=${queryParamsState.queryStops}`}
        >
          <PaginationItem active={queryParamsState.queryPage === number}>
            {number}
          </PaginationItem>
        </Link>
      ))}
    </PaginationList>
  );
};

export default memo(Pagination);
