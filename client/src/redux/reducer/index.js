import {
  GET_VIDEOGAMES,
  FILTER_BY_GENRE,
  FILTER_BY_ORIGIN,
  ORDER,
  GET_NAME_VIDEOGAMES,
  GET_GENRE,
  POST_VIDEOGAME,
  GET_DETAIL,
} from "../action-types";

let initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };

    case FILTER_BY_GENRE:
      const filteredgames = state.allVideogames;
      let statusFiltered =
        action.payload === "All"
          ? filteredgames
          : filteredgames.filter((el) =>
              el.genres.some((genero) => genero.name === action.payload)
            );
      return {
        ...state,
        videogames: statusFiltered,
      };

    case GET_GENRE:
      return {
        ...state,
        genres: action.payload,
      };

    case POST_VIDEOGAME:
      return { ...state };

    /*
    case FILTER_BY_ORIGIN:
      const filteredorigin = state.allVideogames;
      const createdFilter =
        action.payload === "DB"
          ? filteredorigin.filter((el) => el.inDB)
          : filteredorigin.filter((el) => !el.inDB);
      return {
        ...state,
        videogames: action.payload === "All" ? state.videogames : createdFilter,
      };

    case ORDER:
      let sortedVid =
        action.payload === "ascAlf"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : action.payload === "descAlf"
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : action.payload === "ascRat"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.ratin > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortedVid,
      };*/
    case GET_NAME_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        //allVideogames:action.payload para que funcione el filtrado
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
