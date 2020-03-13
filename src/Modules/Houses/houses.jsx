import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleHouse from "./components/singleHouse";
import { addHouse } from "./housesActions";

export default function Houses() {
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  const houses = useSelector(state => state.appReducer.houses);
  const dispatch = useDispatch();
  console.log(houses);

  const addNewHouse = () => {
    owner.length > 0 && address.length > 0 && price.length > 0
      ? dispatch(addHouse(owner, address, price))
      : alert("Nie wypełniłeś wszystkich pól !");
  };
  return (
    <div>
      {!houses.isFetchingHouses &&
        houses &&
        houses.map(singleHouse => (
          <SingleHouse key={singleHouse._id} singleHouse={singleHouse} />
        ))}
      <form>
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          onChange={e => setOwner(e.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          name="adress"
          onChange={e => setAddress(e.target.value)}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={e => setPrice(e.target.value)}
        />
      </form>
      <button onClick={() => addNewHouse()}> Dodaj Dom</button>
    </div>
  );
}
