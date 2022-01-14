import React from 'react';
import { Formik, Field } from 'formik';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
  FormStyled,
} from '../styles/NumberOfTransplants';

import { useDispatch, useSelector } from 'react-redux';
import { stopSortUpdateCreator } from '../redux/duck/StopsSort';

export interface FormValues {
  selectAll: boolean;
  choosedOption: string[];
}

const NumberOfTransplants: React.FC = () => {
  const dispatch = useDispatch();
  const stops = useSelector(
    (store: {
      stopsSortReducer: {
        stops: FormValues;
      };
    }) => store.stopsSortReducer.stops
  );
  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <Formik
        initialValues={{
          selectAll: stops.selectAll,
          choosedOption: stops.choosedOption,
        }}
        onSubmit={(values: FormValues) => {
          dispatch(stopSortUpdateCreator(values));
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
