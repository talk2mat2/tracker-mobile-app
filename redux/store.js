/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import {
  UserReducers,
  dataReducer

} from './reducer';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

const rootReducer = combineReducers({
  user: UserReducers,
fetchedData:dataReducer
});
const authPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user',"fetchedData"],
};
const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
