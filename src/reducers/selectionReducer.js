const initialState = {
  player: null,
  leagueID: null,
  privateLeague: null,
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYER_INDEX':
      return {...state, player: action.payload};
    case 'RESET_PLAYER_INDEX':
      return {...state, player: null};
    case 'UPDATE_LEAGUE_ID':
      return {...state, leagueID: action.payload};
    case 'UPDATE_LEAGUE_TYPE':
      return {...state, privateLeague: action.payload};
    default:
      return state;
  }
};

export default selectionReducer;
