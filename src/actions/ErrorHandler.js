import { ON_ERROR } from "./ActionType";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ON_ERROR:
      return action.payload;

    default:
      return state;
  }
}

// const onError = (status) => {
//   return {
//     type: ActionType.ON_ERROR,
//     status,
//   };
// };

// export default onError;

// import { GET_ERRORS } from "../../actions/types";
