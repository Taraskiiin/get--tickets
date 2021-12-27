import React, { useState } from 'react';
import { Formik, Field } from 'formik';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
  FormStyled,
} from '../styles/NumberOfTransplants';

const NumberOfTransplants = () => {
  const [selectOption, setSelectOption] = useState<{
    selectAll: boolean;
    choosedOption: {};
  }>({
    selectAll: false,
    choosedOption: {},
  });

  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <Formik
        initialValues={{
          selectAll: false,
          choosedOption: {} || false,
        }}
        onSubmit={async (values: { selectAll: boolean; choosedOption: {} }) => {
          setSelectOption({
            ...selectOption,
            selectAll: values.selectAll,
            choosedOption: values.choosedOption,
          });
        }}
      >
        <FormStyled>
          <label>
            <Field type="checkbox" name="selectAll" />
            &nbsp;Все
          </label>
          <br />
          <label>
            <Field type="checkbox" name="choosedOption" value="0" />
            &nbsp;Без&nbsp;пересадок
          </label>
          <br />
          <label>
            <Field type="checkbox" name="choosedOption" value="1" />
            &nbsp;1&nbsp;пересадка
          </label>
          <br />
          <label>
            <Field type="checkbox" name="choosedOption" value="2" />
            &nbsp;2&nbsp;пересадки
          </label>
          <br />
          <label>
            <Field type="checkbox" name="choosedOption" value="3" />
            &nbsp;3&nbsp;пересадки
          </label>
          <br />
          <button type="submit">Submit</button>
        </FormStyled>
      </Formik>
    </NumberOfTransplantsBlock>
  );
};

export default NumberOfTransplants;
