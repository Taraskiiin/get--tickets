import React from "react";
import styled from "styled-components";

export interface ITicket {
  ticket: {
    price: number;
    logo: string;
    rows: {
      from: string;
      to: string;
      arrivesAt: string;
      departsAt: string;
    }[];
  };
}

const Ticket: React.FC<ITicket> = ({ ticket }) => {
  return (
    <Card>
      <Header>
        <Price>{ticket.price}&nbsp;P</Price>
        <img src={ticket.logo} alt="logo" />
      </Header>
      <Content>
        {ticket.rows.map((row) => (
          <>
            <ColumnInfo>
              <ColumnInfoTitle>
                {row.from} - {row.to}
              </ColumnInfoTitle>
              <span>
                {row.departsAt} - {row.arrivesAt}
              </span>
            </ColumnInfo>
            <ColumnInfo>
              <ColumnInfoTitle>В Пути</ColumnInfoTitle>
              <ColumnInfoTime>
                {/**TODO: add function thst calculates time of the trip */}21ч
                15м
              </ColumnInfoTime>
            </ColumnInfo>
            <ColumnInfo>
              <ColumnInfoTitle>
                Пересадки{/**TODO: add count of transplantation */}{" "}
              </ColumnInfoTitle>
              <span>hkg, jnb</span>
            </ColumnInfo>
          </>
        ))}
      </Content>
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff;
  height: max-content;
  border-radius: 10px;
  padding: 25px 50px 25px 20px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ColumnInfo = styled.p`
  > span {
    display: block;
  }
`;

const ColumnInfoTitle = styled.span`
  color: #a0b0b9;
`;

const ColumnInfoTime = styled.span`
  text-transform: lowercase;
`;

const Price = styled.span`
  font-size: 18px;
  color: #2196f3;
`;
export default Ticket;
