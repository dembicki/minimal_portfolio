import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

import stack from "../data/stack";

export default function TechStack() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
  `;

  return (
    <Wrapper>
      {stack ? stack.map((e) => <Tile key={e} label={e} />) : null}
    </Wrapper>
  );
}
