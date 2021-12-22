import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: max-content;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 25px 50px 25px 20px;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.codGray};
  box-shadow: 3px 3px 2px 1px ${(props) => props.theme.colors.athensGray};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.m};
  margin-bottom: 10px;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ColumnInfo = styled.p`
  margin-bottom: 20px;
  > span {
    display: block;
  }
`;

export const ColumnInfoTitle = styled.span`
  color: ${(props) => props.theme.colors.gullGray};
`;

export const ColumnInfoTime = styled.span`
  text-transform: lowercase;
`;

export const Price = styled.span`
  font-size: ${(props) => props.theme.fontSizes.l};
  color: ${(props) => props.theme.colors.dodgerBlue};
`;

export const Carrier = styled.span`
  font-size: ${(props) => props.theme.fontSizes.l};
  color: ${(props) => props.theme.colors.codGray};
`;
