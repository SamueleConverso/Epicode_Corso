import {
  GET_COMPANY_ERROR,
  GET_COMPANY_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOBS_SUCCESS,
} from "../reducers/getCompany";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToFavouriteAction = (company_name) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: company_name,
  };
};

export const removeFromFavouritesAction = (job) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: job,
  };
};

export const getCompanyAction = (baseEndpoint, paramsCompany) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + paramsCompany);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_COMPANY_SUCCESS, payload: data });
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMPANY_ERROR, payload: "Errore" });
    }
  };
};

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({ type: GET_JOBS_SUCCESS, payload: data });
        //setJobs(data);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_JOBS_ERROR, payload: "Errore" });
    }
  };
};
