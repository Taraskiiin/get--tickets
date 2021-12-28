import React from 'react';
import { Formik, Field } from 'formik';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
  FormStyled,
} from '../styles/NumberOfTransplants';

import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators } from '../duck/index';

const NumberOfTransplants = () => {
  const dispatch = useDispatch();
  const stops = useSelector(
    (store: {
      stopsFilterReducer: {
        stops: { selectAll: boolean; choosedOption: {} };
      };
    }) => store.stopsFilterReducer.stops
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
        onSubmit={(values: { selectAll: boolean; choosedOption: {} }) => {
          dispatch(ActionCreators.stopFilterUpdateCreator(values));
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
