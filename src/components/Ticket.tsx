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

interface ISegments {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
}
export interface ITicket {
  carrier: string;
  price: number;
  segments: ISegments[];
}

const Ticket: React.FC<ITicket> = (ticket: ITicket) => {
  return (
    <Card>
      <Header>
        <Price>{ticket.price}&nbsp;P</Price>
        {/* <img src={ticket.logo} alt="logo" /> */}
      </Header>
      <Content>
        {ticket.segments.length
          ? ticket.segments.map((segment, index) => (
              <Fragment key={index}>
                <ColumnInfo>
                  <ColumnInfoTitle>
                    {segment.origin} - {segment.destination}
                  </ColumnInfoTitle>
                  <span>{segment.date}</span>
                </ColumnInfo>
                <ColumnInfo>
                  <ColumnInfoTitle>В Пути</ColumnInfoTitle>
                  <ColumnInfoTime>{segment.duration}</ColumnInfoTime>
                </ColumnInfo>
                <ColumnInfo>
                  <ColumnInfoTitle>Пересадки</ColumnInfoTitle>
                  {segment.stops.length
                    ? segment.stops.map((stop, index) => (
                        <span key={index}>{stop}&nbsp;</span>
                      ))
                    : null}
                </ColumnInfo>
              </Fragment>
            ))
          : null}
      </Content>
    </Card>
  );
};

export default Ticket;
