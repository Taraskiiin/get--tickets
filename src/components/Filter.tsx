import React from 'react';

import { useQueryParams } from '../hooks/useQueryParams';
import { Nav, StyledButton, Link } from '../styles/Filter';

const Filter: React.FC = () => {
  const queryParams = useQueryParams();

  const queryParamsState = {
    querySortBy: queryParams.get('sortBy'),
    queryPage: Number(queryParams.get('page')),
    queryStops: queryParams.get('stops'),
  };

  return (
    <Nav className="me-2">
      <Link
        to={`?sortBy=${'price'}&page=1&stops=${queryParamsState.queryStops}`}
      >
        <StyledButton active={queryParamsState.querySortBy === 'price'}>
          Самый дешевый
        </StyledButton>
      </Link>
      <Link
        to={`?sortBy=${'time'}&page=1&stops=${queryParamsState.queryStops}`}
      >
        <StyledButton active={queryParamsState.querySortBy === 'time'}>
          Самый быстрый
        </StyledButton>
      </Link>
    </Nav>
  );
};

export default Filter;
