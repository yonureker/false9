const initialState = {teamName: null};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER_DATA':
      return action.payload;
    case 'RESET_USER_DATA':
      return null;
    case 'UPDATE_USER_LEAGUES':
      return {...state, leagues: action.payload};
    case 'UPDATE_TEAM_NAME':
      return {...state, teamName: action.payload};
    default:
      return state;
  }
};

export default userReducer;
