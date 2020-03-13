import styled from "styled-components";

import houseImg from "../../images/house.jpg";
import famillyImgFirst from "../../images/familly.jpg";
import famillyImgSecond from "../../images/familly2.jpg";

export const Wrapper = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Square = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

export const TextCnt = styled.div`
  text-align: center;
  padding: 20px;
  h1 {
    font-size: 8vw;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 4vw;
    }
  }
  h3 {
    color: lightblue;
    font-size: 6vw;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 3vw;
    }
  }
  button {
    border: 1px solid lightblue;
    color: lightblue;
    background-color: white;
    font-size: 6vw;
    padding: 15px;
    @media (min-width: 768px) {
      font-size: 1.5vw;
    }
  }
`;

export const FirstElementOfSquare = styled.div`
  background: url(${houseImg});
  width: 100%;
  height: 150px;
  background-size: cover;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const SecondElementOfSquare = styled.div`
  background: url(${famillyImgFirst});
  width: 100%;
  height: 150px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: blue;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
