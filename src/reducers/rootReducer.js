import {combineReducers} from 'redux';
import roundReducer from './roundReducer';
import selectionReducer from './selectionReducer';
import squadReducer from './squadReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  squad: squadReducer,
  selection: selectionReducer,
  round: roundReducer,
  user: userReducer,
});

export default rootReducer;
