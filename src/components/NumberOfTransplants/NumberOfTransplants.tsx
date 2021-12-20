import React, { useState } from "react";

import styled from "styled-components";

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

const NumberOfTransplantsBlock = styled.div`
  height: 250px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: #fff;
  border-radius: 10px;
  font-size: 14px;
`;

const TitleNumberOfTransplantsBlock = styled.h3`
  font-size: 14px;
  font-weight: normal;
  line-height: 14px;
`;

export default NumberOfTransplants;
