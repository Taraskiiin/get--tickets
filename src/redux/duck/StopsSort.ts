import { takeEvery, put } from 'redux-saga/effects';
import { FormValues } from '../../components/NumberOfTransplants';

export const SET_STOPS = 'redux/duck/StopsSort/SET_STOPS';
export const UPDATE_STOPS = 'redux/duck/StopsSort/UPDATE_STOPS';

export const stopSortCreator = () => ({
  type: SET_STOPS,
});

export const stopSortUpdateCreator = (payload: {
  selectAll: boolean;
  choosedOption: {};
}) => ({
  type: UPDATE_STOPS,
  payload,
});

export const initialState = {
  stops: { selectAll: true, choosedOption: ['0', '1', '2', '3'] },
};

export const stopsSortReducer = (
  state = initialState,
  action: {
    type: string;
    payload: FormValues;
  }
) => {
  switch (action.type) {
    case SET_STOPS:
      return {
        ...state,
        stops: action.payload,
      };
    case UPDATE_STOPS:
      return {
        stops: {
          selectAll: action.payload.selectAll,
          choosedOption: action.payload.choosedOption,
        },
      };
    default:
      return state;
  }
};

function* stopsFilterWorker() {
  yield put(stopSortCreator());
}

export function* stopsFilterWatcher() {
  yield takeEvery(SET_STOPS, stopsFilterWorker);
}
