import React from "react";
import styled from "styled-components";

export default function MainWrapper({ children, id }) {
  return <Wrapper id={id}>{children}</Wrapper>;
}

const Wrapper = styled.main`
  margin: 4rem 6rem 4rem 6rem;
  //TODO: fix this &darr;
  height: calc(100vh-padding);
`;
