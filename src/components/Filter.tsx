import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, StyledButton } from '../styles/Filter';
import sortActionCreators from '../duck/TimeOrPriseSort/action-creators';

const Filter = () => {
  const dispatch = useDispatch();

  const sortByPrice = useSelector(
    (store: {
      timeOrPriceReducer: { sortByPrice: boolean; sortByTime: boolean };
    }) => store.timeOrPriceReducer.sortByPrice
  );

  const sortByTime = useSelector(
    (store: {
      timeOrPriceReducer: { sortByPrice: boolean; sortByTime: boolean };
    }) => store.timeOrPriceReducer.sortByTime
  );

  return (
    <Nav className="me-2">
      <StyledButton
        onClick={() => dispatch(sortActionCreators.sortByPriceCreator())}
        active={sortByPrice}
      >
        Самый дешевый
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(sortActionCreators.sortByTimeCreator())}
        active={sortByTime}
      >
        Самый быстрый
      </StyledButton>
    </Nav>
  );
};

export default Filter;
