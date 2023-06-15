import { GET_VIDEOGAMES } from "../action-types";

let initialState = {
  videogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
