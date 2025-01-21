export const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
export const GET_COMPANY_ERROR = "GET_COMPANY_ERROR";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

const initialState = {
  jobs: [],
  company: [],
  error: "",
};

function getCompanyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    case GET_COMPANY_ERROR:
      return { ...state, error: action.payload };

    case GET_JOBS_SUCCESS:
      return { ...state, jobs: action.payload };
    case GET_JOBS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default getCompanyReducer;
