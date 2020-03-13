import React from "react";
import {
  Wrapper,
  Square,
  TextCnt,
  FirstElementOfSquare,
  SecondElementOfSquare
} from "./appStyles";

import { fetchHouses } from "./appActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TextCnt>
        <h1>Lorem Lorem lorem ipsum</h1>
        <h3>Kilka słów o nas</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link to="/houses" onClick={() => dispatch(fetchHouses)}>
          ZOBACZ WIĘCEJ
        </Link>
      </TextCnt>
      <Square>
        <FirstElementOfSquare />
        <SecondElementOfSquare />
        <SecondElementOfSquare>
          <p>Jakiś tam tekst</p>
        </SecondElementOfSquare>
        <FirstElementOfSquare />
      </Square>
      <TextCnt>
        <h1>Lorem Lorem lorem ipsum</h1>
        <h3>Kilka słów o nas</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button>ZOBACZ WIĘCEJ</button>
      </TextCnt>
      <Square>
        <FirstElementOfSquare />
        <SecondElementOfSquare />
        <SecondElementOfSquare>
          <p>Jakiś tam tekst</p>
        </SecondElementOfSquare>
        <FirstElementOfSquare />
      </Square>
    </Wrapper>
  );
}

export default App;
