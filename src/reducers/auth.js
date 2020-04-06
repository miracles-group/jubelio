import { REGISTER, LOGIN } from "../constants/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
      case REGISTER:
        return {
          ...state,
          inProgress: false,
        };
      default:
        return state;
    }
  };