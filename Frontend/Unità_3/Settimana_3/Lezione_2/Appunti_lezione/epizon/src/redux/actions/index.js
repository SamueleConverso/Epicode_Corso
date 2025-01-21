export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USER = "SET_USER";

export const addToCartAction = (bookSelected) => {
  return { type: ADD_TO_CART, payload: bookSelected };
};

export const removeFromCartAction = (i) => {
  return { type: REMOVE_FROM_CART, payload: i };
};

export const setUserAction = (inputValue) => {
  return { type: SET_USER, payload: inputValue };
};
