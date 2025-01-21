import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";

const greatReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const store = configureStore({ reducer: greatReducer });

export default store;
