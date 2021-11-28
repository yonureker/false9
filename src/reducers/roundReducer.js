const initialState = {
  current: null,
};

const roundReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROUND':
      return {...state, current: action.payload};
    default:
      return state;
  }
};

export default roundReducer;