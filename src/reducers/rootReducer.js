import {combineReducers} from 'redux';
import userReducer from './userReducer';
import squadReducer from './squadReducer';
import playerSelectionReducer from './playerSelectionReducer';
import roundReducer from './roundReducer';

const rootReducer = combineReducers({
  user: userReducer,
  squad: squadReducer,
  selectedPlayer: playerSelectionReducer,
  round: roundReducer
});

export default rootReducer;
