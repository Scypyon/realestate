import axios from "axios";
import * as appConstTypes from "./appConstTypes";

export const fetchHouses = async dispatch => {
  try {
    dispatch({ type: appConstTypes.FETCH_HOUSES_REQUEST });
    const data = await axios.get(
      "http://mr-test-backend.sadek.usermd.net/houses"
    );
    dispatch({
      type: appConstTypes.FETCH_HOUSES_SUCCEED,
      data
    });
  } catch (e) {
    dispatch({ type: appConstTypes.FETCH_HOUSES_FAILED, e });
  }
};
