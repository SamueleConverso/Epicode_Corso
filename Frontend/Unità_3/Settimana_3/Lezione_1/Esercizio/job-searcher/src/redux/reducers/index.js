const initialState = {
  favourites: {
    jobs: [],
  },
};

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          jobs: state.favourites.jobs.concat(action.payload),
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          jobs: state.favourites.jobs.filter((job) => {
            return action.payload !== job;
          }),
        },
      };
    default:
      return state;
  }
}

export default jobReducer;
