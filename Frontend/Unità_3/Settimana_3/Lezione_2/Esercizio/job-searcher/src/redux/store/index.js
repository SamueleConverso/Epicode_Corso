import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import getCompanyReducer from "../reducers/getCompany";

const greatReducer = combineReducers({
  favourites: favouritesReducer,
  getCompany: getCompanyReducer,
});

const store = configureStore({ reducer: greatReducer });

export default store;
