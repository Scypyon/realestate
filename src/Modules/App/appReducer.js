import * as appConstTypes from "./appConstTypes";
import * as housesConstTypes from "../Houses/housesConstTypes";

const initState = { houses: [], error: "", isFetchingHouses: true };

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case appConstTypes.FETCH_HOUSES_REQUEST:
      return { ...state, isFetchingHouses: true };
    case appConstTypes.FETCH_HOUSES_SUCCEED:
      return {
        ...state,
        houses: action.data.data.houses,
        isFetchingHouses: false
      };
    case appConstTypes.FETCH_HOUSES_FAILED:
      return {
        ...state,
        error: "Something wrong...",
        isFetchingHouses: true
      };
    case housesConstTypes.ADD_HOUSE_SUCCEED:
      return {
        ...state,
        houses: [
          ...state.housese,
          {
            _id: action.data._id,
            owner: action.data.owner,
            address: action.data.address,
            price: action.data.price
          }
        ]
      };
    default: {
      return state;
    }
  }
};
