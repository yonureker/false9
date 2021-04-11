import {combineReducers} from 'redux';
import userReducer from './userReducer';
import squadReducer from './squadReducer';
import playerSelectionReducer from './playerSelectionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  squad: squadReducer,
  selectedPlayer: playerSelectionReducer,
});

export default rootReducer;
