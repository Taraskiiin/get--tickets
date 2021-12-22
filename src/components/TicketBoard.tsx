import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Ticket, { ITicket } from './Ticket';

const TicketBoard: React.FC = () => {
  const [data, setData] = useState<ITicket[]>();

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(
        'https://front-test.beta.aviasales.ru/tickets?searchId=2sg3h'
      );
      setData(response.data.tickets);
    }
    loadData();
  }, []);
  console.log(data);
  return (
    <div>
      {data ? data.map((el, index) => <Ticket key={index} {...el} />) : null}
    </div>
  );
};

export default TicketBoard;
