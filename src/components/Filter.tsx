import React from 'react';

import { useQueryParams } from '../hooks/useQueryParams';
import { QueryParams } from '../interface';
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
        to={`?sortBy=${QueryParams.Price}&page=1&stops=${queryParamsState.queryStops}`}
      >
        <StyledButton
          active={queryParamsState.querySortBy === QueryParams.Price}
        >
          Самый дешевый
        </StyledButton>
      </Link>
      <Link
        to={`?sortBy=${QueryParams.Time}&page=1&stops=${queryParamsState.queryStops}`}
      >
        <StyledButton
          active={queryParamsState.querySortBy === QueryParams.Time}
        >
          Самый быстрый
        </StyledButton>
      </Link>
    </Nav>
  );
};

export default Filter;
