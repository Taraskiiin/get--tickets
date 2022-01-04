import styled from 'styled-components';
import { ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Nav = styled(ButtonGroup)`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 14px 0;
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.codGray};
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  text-transform: uppercase;
  box-shadow: 3px 3px 2px 1px ${(props) => props.theme.colors.athensGray};

  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.dodgerBlue};
    box-shadow: 1px 4px ${(props) => props.theme.colors.athensGray};
  }
`;
