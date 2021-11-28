const initialState = null;

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_SESSION_DATA':
      return action.payload;
    case 'RESET_SESSION_DATA':
      return null;
    default:
      return state;
  }
};

export default sessionReducer;
