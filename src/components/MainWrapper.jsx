import React from "react";
import styled from "styled-components";

export default function MainWrapper({ children, id }) {
  return <Wrapper id={id}>{children}</Wrapper>;
}

const Wrapper = styled.main`
  margin: 4rem 6rem 4rem 6rem;
  height: calc(100vh-padding);

  @media screen and (max-width: 800px) {
    border: 1px solid red;
    margin: 0;
    max-width: 100%;
  }
`;
