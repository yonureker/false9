const initialState = {
  user: {
    uid: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER_DATA':
      return action.payload;
    case 'RESET_USER_DATA':
      return null;
    default:
      return state;
  }
};

export default userReducer;
