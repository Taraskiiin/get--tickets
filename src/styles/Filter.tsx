import styled from 'styled-components';
import { ButtonGroup, Button } from 'react-bootstrap';

export const Nav = styled(ButtonGroup)`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  text-decoration: none;
  text-align: center;
  padding: 14px 0;
  font-size: 14px;
  color: #4a4a4a;
  background-color: #fff;
  border: 1px solid #333333;

  &:hover {
    color: #fff;
    background-color: #2196f3;
  }

  &:active {
    color: #fff;
    background-color: #2196f3;
  }
`;
