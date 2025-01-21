import { SET_USER } from "../actions";

const initialState = {
  name: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
