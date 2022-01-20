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
  LabeltoCustomCheckbox,
} from '../styles/NumberOfTransplants';
import { useQueryParams } from '../hooks/useQueryParams';
import { maxValuesStops, convertParamsToStateArray } from '../helpers/helpers';

const NumberOfTransplants: React.FC = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  const queryParamsState = {
    sortBy: queryParams.get('sortBy'),
    page: Number(queryParams.get('page')),
    stops: queryParams.get('stops'),
  };

  let initialState: string[] = convertParamsToStateArray(
    queryParamsState.stops
  );

  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <Formik
        initialValues={{ initialState }}
        onSubmit={(values: { initialState: {} }) =>
          navigate(
            `?sortBy=${queryParamsState.sortBy}&page=1&stops=${maxValuesStops(
              values.initialState
            )}`
          )
        }
      >
        <FormStyled>
          <LabeltoCustomCheckbox>
            <CustomCheckbox type="checkbox" name="initialState" value="all" />
            &nbsp;Все
          </LabeltoCustomCheckbox>
          <br />
          <LabeltoCustomCheckbox>
            <CustomCheckbox type="checkbox" name="initialState" value="0" />
            &nbsp;Без&nbsp;пересадок
          </LabeltoCustomCheckbox>
          <br />
          <LabeltoCustomCheckbox>
            <CustomCheckbox type="checkbox" name="initialState" value="1" />
            &nbsp;1&nbsp;пересадка
          </LabeltoCustomCheckbox>
          <br />
          <LabeltoCustomCheckbox>
            <CustomCheckbox type="checkbox" name="initialState" value="2" />
            &nbsp;2&nbsp;пересадки
          </LabeltoCustomCheckbox>
          <br />
          <LabeltoCustomCheckbox>
            <CustomCheckbox type="checkbox" name="initialState" value="3" />
            &nbsp;3&nbsp;пересадки
          </LabeltoCustomCheckbox>
          <br />
          <SubmitBtn type="submit">применить</SubmitBtn>
        </FormStyled>
      </Formik>
    </NumberOfTransplantsBlock>
  );
};

export default NumberOfTransplants;
