import {combineReducers} from 'redux';
import userReducer from './userReducer';
import squadReducer from './squadReducer';
import selectionReducer from './selectionReducer';
import roundReducer from './roundReducer';

const rootReducer = combineReducers({
  user: userReducer,
  squad: squadReducer,
  selection: selectionReducer,
  round: roundReducer,
});

export default rootReducer;
