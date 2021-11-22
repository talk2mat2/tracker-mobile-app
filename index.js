/**
 * @format
 */
import {Provider} from 'react-redux';
import React from 'react';

import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AppRegistry} from 'react-native';
import Mainapp from './App';
import {name as appName} from './app.json';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Mainapp />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
