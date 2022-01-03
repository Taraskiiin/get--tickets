import React from 'react';
import { Nav, StyledButton, Link } from '../styles/Filter';

import { useQueryParams } from '../hooks/useQueryParams';

const Filter = () => {
  const queryParams = useQueryParams();

  const querySortByPrice = queryParams.get('SortByPrice');
  const querySortByTime = queryParams.get('SortByTime');

  return (
    <Nav className="me-2">
      <Link to="get--tickets/?SortByPrice=true">
        <StyledButton active={querySortByPrice}>Самый дешевый</StyledButton>
      </Link>
      <Link to="get--tickets/?SortByTime=true">
        <StyledButton active={querySortByTime}>Самый быстрый</StyledButton>
      </Link>
    </Nav>
  );
};

export default Filter;
