import * as acttiontypes from './actiontypes';
export const LOGINSUCCESS = response => {
  return {
    type: acttiontypes.LOGINSUCCESS,
    payload: response.token,
  };
};

export const LOGOUTUSER = () => {
  return {
    type: acttiontypes.LOGOUTUSER,
  };
};

export const FETCHDATASUCCESS = data => {

  return {
    type: acttiontypes.FETCHDATASUCCESS,
    payload: data,
  };
};
export const DELETEUSERRESULT = data => {

  return {
    type: acttiontypes.DELETEUSERRESULT,
    payload: data,
  };
};
