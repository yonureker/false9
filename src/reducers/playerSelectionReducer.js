const initialState = {
  index: null,
};

const playerSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYER_INDEX':
      return {...state, index: action.payload};
    case 'RESET_PLAYER_INDEX':
      return null;
    default:
      return state;
  }
};

export default playerSelectionReducer;