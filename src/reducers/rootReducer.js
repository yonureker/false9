import {combineReducers} from 'redux';
import roundReducer from './roundReducer';
import selectionReducer from './selectionReducer';
import squadReducer from './squadReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  squad: squadReducer,
  selection: selectionReducer,
  round: roundReducer,
});

export default rootReducer;
