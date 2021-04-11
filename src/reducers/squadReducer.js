const initialState = {
  budget: {},
  formation: '4 - 4 - 2',
  players: [],
  points: 0,
};

const squadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_SQUAD_DATA':
      return action.payload;
    case 'RESET_SQUAD_DATA':
      return null;
    case 'UPDATE_PLAYERS':
      const index = action.id;

      return {
        ...state,
        players: state.players.map((player, i) =>
          i === index ? action.payload : player,
        ),
      };
    default:
      return state;
  }
};

export default squadReducer;
