import React from 'react';
import { Nav, StyledButton } from '../styles/Filter';

const Filter = () => (
  <Nav className="me-2">
    <StyledButton href="#">Самый дешевый</StyledButton>
    <StyledButton href="#">Самый быстрый</StyledButton>
  </Nav>
);

export default Filter;
