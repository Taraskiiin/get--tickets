import React from 'react';
import { Nav, StyledButton } from '../styles/Filter';

// import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  return (
    <Nav className="me-2">
      <StyledButton>Самый дешевый</StyledButton>
      <StyledButton>Самый быстрый</StyledButton>
    </Nav>
  );
};

export default Filter;
