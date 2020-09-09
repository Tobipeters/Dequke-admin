import * as ActionType from "./ActionType";

import { postData, getData } from "./Services";

const onLogin = (payload) => {
  return {
    type: ActionType.ON_LOGIN,
    payload,
  };
};

const onAllUsers = (payload) => {
  return {
    type: ActionType.GET_USERS,
    payload,
  };
};

export const login = (url, payload) => {
  return postData(url, payload, onLogin);
};

export const getAllUser = (url) => {
  return getData(url, onAllUsers);
};
