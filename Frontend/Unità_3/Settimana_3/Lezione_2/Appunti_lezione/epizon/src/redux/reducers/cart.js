import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  content: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((book, i) => {
          // if (action.payload === i) {
          //   return false;
          // } else {
          //   return true;
          // }
          return action.payload !== i;
        }),
      };

    default:
      return state;
  }
}

export default cartReducer;
