import React from 'react';

import Ticket from './Ticket';

const TicketBoard = () => {
  const logo = process.env.PUBLIC_URL + '/logoForAPC.png';
  const mockedTickets = [
    {
      price: 13400,
      logo,
      rows: [
        { from: 'MOW', to: 'HKT', arrivesAt: '8:00', departsAt: '10:45' },
        {
          from: 'MOW',
          to: 'HKT',
          arrivesAt: '8:00',
          departsAt: '10:45',
        },
      ],
    },
    {
      price: 13400,
      logo,
      rows: [
        { from: 'MOW', to: 'HKT', arrivesAt: '8:00', departsAt: '10:45' },
        {
          from: 'MOW',
          to: 'HKT',
          arrivesAt: '8:00',
          departsAt: '10:45',
        },
      ],
    },
  ];

  return (
    <div>
      {mockedTickets.map((ticket, index) => (
        <Ticket ticket={ticket} key={index} />
      ))}
    </div>
  );
};

export default TicketBoard;
