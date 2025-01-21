import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  cart: {
    content: [],
  },

  user: {
    name: "",
  },
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload),
        },
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((book, i) => {
            // if (action.payload === i) {
            //   return false;
            // } else {
            //   return true;
            // }
            return action.payload !== i;
          }),
        },
      };

    case "SET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };

    default:
      return state;
  }
}

export default mainReducer;
