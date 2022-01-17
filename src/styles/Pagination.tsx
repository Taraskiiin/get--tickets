import styled from 'styled-components';
import { ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const PaginationList = styled(ButtonGroup)`
  height: 100%;
  max-width: 100%;
  display: flex;
  margin-bottom: 10px;
  box-shadow: 3px 3px 2px 1px ${(props) => props.theme.colors.athensGray};
  overflow: scroll;
`;

export const PaginationItem = styled(Button)`
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.codGray};
  font-size: ${(props) => props.theme.fontSizes.l};

  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.dodgerBlue};
    box-shadow: 1px 4px ${(props) => props.theme.colors.athensGray};
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
