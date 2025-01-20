import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../reducers";

const store = configureStore({ reducer: jobReducer });

export default store;
