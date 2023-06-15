import { GET_VIDEOGAMES } from "../action-types";
import axios from "axios";

export const getVideogames = () => {
  return async function (dispatch) {
    let { data } = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  };
};
