import React, { useState } from "react";
import styled from "styled-components";

export default function Arrow({ size }) {
  const [direction, setDirection] = useState("down");

  const arrSize = size || "4rem";

  const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 10vw;
    background-color: white;
    height: ${arrSize};
    width: calc(${arrSize}*2);
    border-radius: calc(${arrSize}*2) calc(${arrSize}*2) 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(${arrSize} / 3);
    color: black;
    font-weight: bold;
    cursor: pointer;
  `;

  return (
    <a href="#experience">
      <Wrapper>
        {direction === "up" ? <span>&uarr;</span> : <span>&darr;</span>}
      </Wrapper>
    </a>
  );
}
