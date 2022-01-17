import React from 'react';
import { Formik, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

import {
  NumberOfTransplantsBlock,
  TitleNumberOfTransplantsBlock,
  FormStyled,
} from '../styles/NumberOfTransplants';
import { useQueryParams } from '../hooks/useQueryParams';

const NumberOfTransplants: React.FC = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  const queryParamsState = {
    querySortBy: queryParams.get('sortBy'),
    queryPage: Number(queryParams.get('page')),
    queryStops: queryParams.get('stops'),
  };

  return (
    <NumberOfTransplantsBlock>
      <TitleNumberOfTransplantsBlock>
        Количество пересадок
      </TitleNumberOfTransplantsBlock>
      <Formik
        initialValues={{
          choosedOption: queryParamsState.queryStops,
        }}
        onSubmit={(values: { choosedOption: string | null }) =>
          navigate(
            `?sortBy=${queryParamsState.querySortBy}&page=1&stops=${values.choosedOption}`
          )
        }
      >
        <FormStyled>
          <label>
            <Field type="checkbox" name="choosedOption" value="all" />
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
