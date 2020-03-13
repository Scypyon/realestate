import React from "react";
import houseImg from "images/house.jpg";
import { useDispatch } from "react-redux";
import { deleteHouse } from "../housesActions";

export default function SingleHouse({ singleHouse }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={houseImg} alt="" />
      <h1>{singleHouse.owner}</h1>
      <p>{singleHouse.address}</p>
      <p>{singleHouse.price}</p>
      <button onClick={() => dispatch(deleteHouse(singleHouse._id))}>
        Usuń
      </button>
    </div>
  );
}
