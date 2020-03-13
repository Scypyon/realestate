import axios from "axios";
import * as housesConstTypes from "./housesConstTypes";

export const addHouse = (owner, address, price) => async dispatch => {
  try {
    dispatch({ type: housesConstTypes.ADD_HOUSE_REQUEST });
    const data = await axios.post(
      "http://mr-test-backend.sadek.usermd.net/houses",
      {
        owner,
        address,
        price,
        area: 0
      }
    );
    dispatch({
      type: housesConstTypes.ADD_HOUSE_SUCCEED,
      data
    });
  } catch (e) {
    dispatch({ type: housesConstTypes.ADD_HOUSE_FAILED, e });
  }
};

export const deleteHouse = id => async dispatch => {
  try {
    dispatch({ type: housesConstTypes.DELETE_HOUSE_REQUEST });
    await axios.delete(`http://mr-test-backend.sadek.usermd.net/houses/${id}`);
    dispatch({
      type: housesConstTypes.DELETE_HOUSE_SUCCEED,
      id
    });
  } catch (e) {
    dispatch({ type: housesConstTypes.DELETE_HOUSE_FAILED, e });
  }
};
