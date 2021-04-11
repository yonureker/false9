import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './src/reducers/rootReducer';
import App from './App';
import {name as appName} from './app.json';

const store = createStore(rootReducer, applyMiddleware(logger));

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);
