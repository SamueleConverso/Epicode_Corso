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
    default:
      return state;
  }
}

export default jobReducer;
