export const LOADING = "LOADING";
export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

const initialState = {
  jobs: [],
  company: [],
  error: "",
  isLoading: false,
};

function getCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        error: "",
        isLoading: action.payload,
      };

    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload,
        error: "",
        isLoading: false,
      };
    case GET_COMPANY_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case GET_JOBS_SUCCESS:
      return { ...state, jobs: action.payload, error: "", isLoading: false };
    case GET_JOBS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}

export default getCompanyReducer;
