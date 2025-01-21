export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCartAction = (bookSelected) => {
  return { type: ADD_TO_CART, payload: bookSelected };
};

export const removeFromCartAction = (i) => {
  return { type: REMOVE_FROM_CART, payload: i };
};
