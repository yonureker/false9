const initialState = {
  base: 0,
  ads: 0,
  dailyLogin: 0,
  purchased: 0,
  referrals: 0,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_BUDGET_DATA':
      return action.payload;
    case 'UPDATE_ADS_BUDGET':
      return {...state, ads: action.payload};
    default:
      return state;
  }
};

export default budgetReducer;
