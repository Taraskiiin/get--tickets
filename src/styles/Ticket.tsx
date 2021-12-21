import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  height: max-content;
  border-radius: 10px;
  padding: 25px 50px 25px 20px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  font-size: 12px;
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
  color: #a0b0b9;
`;

export const ColumnInfoTime = styled.span`
  text-transform: lowercase;
`;

export const Price = styled.span`
  font-size: 18px;
  color: #2196f3;
`;
