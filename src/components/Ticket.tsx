import React, { Fragment, memo } from 'react';
import moment from 'moment';

import { getTime } from '../helpers/helpers';
import {
  Card,
  Header,
  Price,
  ColumnInfo,
  ColumnInfoTitle,
  ColumnInfoTime,
  Content,
  Carrier,
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

const Ticket: React.FC<ITicket> = (ticket) => (
  <Card>
    <Header>
      <Price>{ticket.price}&nbsp;P</Price>
      <Carrier>{ticket.carrier}</Carrier>
    </Header>
    <Content>
      {ticket.segments?.length > 0 &&
        ticket.segments.map((segment, index) => (
          <Fragment key={index}>
            <ColumnInfo>
              <ColumnInfoTitle>
                {segment.origin} - {segment.destination}
              </ColumnInfoTitle>
              <span>{moment(segment.date).format('MMM Do YY, h:mm')}</span>
            </ColumnInfo>
            <ColumnInfo>
              <ColumnInfoTitle>В Пути</ColumnInfoTitle>
              <ColumnInfoTime>{getTime(segment.duration)}</ColumnInfoTime>
            </ColumnInfo>
            <ColumnInfo>
              {segment.stops.length > 0 && (
                <ColumnInfoTitle>Пересадки</ColumnInfoTitle>
              )}
              {segment.stops.length > 0 &&
                segment.stops.map((stop, index) => (
                  <span key={index}>{stop}&nbsp;</span>
                ))}
            </ColumnInfo>
          </Fragment>
        ))}
    </Content>
  </Card>
);

export default memo(Ticket);
