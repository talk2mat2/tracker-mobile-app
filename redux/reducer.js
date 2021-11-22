/* eslint-disable prettier/prettier */
import * as Action_types from './actiontypes';

const init_state = {token: null};
export const UserReducers = (state = init_state, action) => {
  if (action.type === Action_types.LOGINSUCCESS) {
    return {...state, token: action.payload};
  } else {
    if (action.type === Action_types.LOGOUTUSER) {
      return {...state, token: null};
    } else {
      return state;
    }
  }
};

const init_USERS_DATA = {
  resultsData: [],
};

export const dataReducer = (state = init_USERS_DATA, action) => {
  if (action.type === Action_types.FETCHDATASUCCESS) {
    return {...state, resultsData: action.payload};
  }
  if (action.type === Action_types.DELETEUSERRESULT) {
    return {
      ...state,
      resultsData: state.resultsData.filter(item => item.id !== action.payload),
    };
  } else return state;
};
