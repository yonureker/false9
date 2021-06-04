import {combineReducers} from 'redux';
import userReducer from './userReducer';
import squadReducer from './squadReducer';
import selectionReducer from './selectionReducer';
import roundReducer from './roundReducer';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
  user: userReducer,
  squad: squadReducer,
  selection: selectionReducer,
  round: roundReducer,
  budget: budgetReducer,
});

export default rootReducer;
