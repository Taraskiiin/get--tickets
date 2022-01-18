/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
  FormStyled,
  CustomCheckbox,
  SubmitBtn,
} from '../styles/NumberOfTransplants';
import { useQueryParams } from '../hooks/useQueryParams';
import { maxValuesStops } from '../helpers/helpers';

const NumberOfTransplants: React.FC = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  let queryParamsState = {
    querySortBy: queryParams.get('sortBy'),
    queryPage: Number(queryParams.get('page')),
    queryStops: queryParams.get('stops'),
  };
  let initialState: string[] | null = [];

  if (queryParamsState.queryStops === 'all') {
    initialState = ['all', '0', '1', '2', '3'];
  }
  if (queryParamsState.queryStops === '0') {
    initialState = ['0'];
  }
  if (queryParamsState.queryStops === '1') {
    initialState = ['0', '1'];
  }
  if (queryParamsState.queryStops === '2') {
    initialState = ['0', '1', '2'];
  }
  if (queryParamsState.queryStops === '3') {
    initialState = ['0', '1', '2', '3'];
  }

  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <Formik
        initialValues={{ initialState }}
        onSubmit={(values: { initialState: {} }) =>
          navigate(
            `?sortBy=${
              queryParamsState.querySortBy
            }&page=1&stops=${maxValuesStops(values.initialState)}`
          )
        }
      >
        <FormStyled>
          <label>
            <CustomCheckbox type="checkbox" name="initialState" value="all" />
            &nbsp;Все
          </label>
          <br />
          <label>
            <CustomCheckbox type="checkbox" name="initialState" value="0" />
            &nbsp;Без&nbsp;пересадок
          </label>
          <br />
          <label>
            <CustomCheckbox type="checkbox" name="initialState" value="1" />
            &nbsp;1&nbsp;пересадка
          </label>
          <br />
          <label>
            <CustomCheckbox type="checkbox" name="initialState" value="2" />
            &nbsp;2&nbsp;пересадки
          </label>
          <br />
          <label>
            <CustomCheckbox type="checkbox" name="initialState" value="3" />
            &nbsp;3&nbsp;пересадки
          </label>
          <br />
          <SubmitBtn type="submit">применить</SubmitBtn>
        </FormStyled>
      </Formik>
    </NumberOfTransplantsBlock>
  );
};

export default NumberOfTransplants;
