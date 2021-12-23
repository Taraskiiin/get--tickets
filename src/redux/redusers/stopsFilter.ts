const initialState = { stops: '' };

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: { type: string; payload: string }
) => {
  const { type, payload } = action;

  switch (type) {
    case 'ENTER_STOPS_VALUE':
      return {
        ...state,
        stops: payload,
      };
    default:
      return state;
  }
};
