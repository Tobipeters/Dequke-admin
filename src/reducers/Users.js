import * as ActionType from "../actions/ActionType";

const initial = {
  admin: {},
  users: [],
};

export const Users = (state = initial, action) => {
  switch (action.type) {
    case ActionType.ON_LOGIN:
      return {
        admin: action.payload,
      };
    case ActionType.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return initial;
  }
};
