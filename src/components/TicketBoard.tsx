import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Ticket, { ITicket } from './Ticket';

const TicketBoard: React.FC = () => {
  const [data, setData] = useState<ITicket[]>();

  useEffect(() => {
    async function loadData() {
      const searchId = await axios.get(
        'https://front-test.beta.aviasales.ru/search'
      );
      const response = await axios.get(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.data.searchId}`
      );
      setData(response.data.tickets);
    }
    loadData();
  }, []);

  return (
    <div>
      {data ? data.map((el, index) => <Ticket key={index} {...el} />) : null}
    </div>
  );
};

export default TicketBoard;
