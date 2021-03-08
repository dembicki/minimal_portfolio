import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  margin: 4rem 3rem 4rem 3rem;
  //TODO: fix this &darr;
  height: calc(100vh-padding);
`;

export default function MainWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
