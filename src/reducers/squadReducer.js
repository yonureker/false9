const initialState = {
  budget: {
    items: {
      base: 75000000,
      ads: 0,
      dailyLogin: 0,
      purchased: 0,
      referrals: 0,
    },
    totalBudget: 0,
  },
  formation: '4 - 4 - 2',
  players: [],
  points: 0,
  value: 0,
};

const squadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_SQUAD_DATA':
      return action.payload;
    case 'RESET_SQUAD_DATA':
      return {...state, players: state.players.map((player) => action.payload)};
    case 'ADD_PLAYER':
      const index = action.id;

      return {
        ...state,
        players: state.players.map((player, i) =>
          i === index ? action.payload : player,
        ),
      };
    case 'UPDATE_SQUAD_VALUE':
      return {
        ...state,
        value: state.value + action.payload,
      };
    case 'RESET_SQUAD_VALUE':
      return {
        ...state,
        value: 0,
      };

    case 'UPDATE_SQUAD_FORMATION':
      return {
        ...state,
        formation: action.payload,
      };
    case 'UPDATE_CAPTAIN_INDEX':
      return {
        ...state,
        captainIndex: action.payload,
      };
    default:
      return state;
  }
};

export default squadReducer;
