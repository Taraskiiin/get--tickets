import React, { Fragment } from 'react';

import {
  Card,
  Header,
  Price,
  ColumnInfo,
  ColumnInfoTitle,
  ColumnInfoTime,
  Content,
} from '../styles/Ticket';

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
        {ticket.rows.map((row, index) => (
          <Fragment key={index}>
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
                Пересадки{/**TODO: add count of transplantation */}{' '}
              </ColumnInfoTitle>
              <span>hkg, jnb</span>
            </ColumnInfo>
          </Fragment>
        ))}
      </Content>
    </Card>
  );
};

export default Ticket;
