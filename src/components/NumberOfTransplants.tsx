import React, { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
} from '../styles/NumberOfTransplants';

const NumberOfTransplants = () => {
  const [checkAll, setCheckAll] = useState<boolean>(false);

  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <label>
        <input
          type="checkbox"
          className="check"
          id="checkAll"
          onChange={(e) => setCheckAll(e.target.checked)}
          checked={checkAll}
        />
        &nbsp;Все
      </label>
      <label>
        <input type="checkbox" className="check" defaultChecked={checkAll} />
        &nbsp;Без&nbsp;пересадок
      </label>
      <label>
        <input type="checkbox" className="check" defaultChecked={checkAll} />
        &nbsp;1&nbsp;пересадка
      </label>
      <label>
        <input type="checkbox" className="check" defaultChecked={checkAll} />
        &nbsp;2&nbsp;пересадки
      </label>
      <label>
        <input type="checkbox" className="check" defaultChecked={checkAll} />
        &nbsp;3&nbsp;пересадки
      </label>
    </NumberOfTransplantsBlock>
  );
};

export default NumberOfTransplants;
