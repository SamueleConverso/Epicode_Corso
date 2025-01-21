import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";
import bookReducer from "../reducers/book";

const greatReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
});

const store = configureStore({ reducer: greatReducer });

export default store;
