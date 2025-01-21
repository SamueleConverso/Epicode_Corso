import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.concat(action.payload),
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((job) => {
          return action.payload !== job;
        }),
      };

    default:
      return state;
  }
}

export default favouritesReducer;
