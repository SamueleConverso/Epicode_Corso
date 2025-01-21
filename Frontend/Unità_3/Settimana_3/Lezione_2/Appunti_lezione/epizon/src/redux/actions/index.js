export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USER = "SET_USER";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

export const addToCartAction = (bookSelected) => {
  return { type: ADD_TO_CART, payload: bookSelected };
};

export const removeFromCartAction = (i) => {
  return { type: REMOVE_FROM_CART, payload: i };
};

export const setUserAction = (inputValue) => {
  return { type: SET_USER, payload: inputValue };
};

export const thunkActionExample = () => {
  return async (dispatch) => {
    console.log("ciao");
    dispatch({ type: "CIAO" });
  };
};

export const getBooksAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/food-books"
      );
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        console.log("FETCHEDBOOKS", fetchedBooks);
        dispatch({ type: GET_BOOKS_SUCCESS, payload: fetchedBooks });
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_BOOKS_ERROR, payload: "Errore nel recupero libri" });
    }
  };
};
