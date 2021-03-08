import React from "react";
import styled from "styled-components";

export default function Menu() {
  const Wrapper = styled.div`
    position: fixed;
    right: 4rem;
    top: 6rem;
    border: 1px solid red;
    width: 50px;
    height: 50px;
  `;

  return (
    <Wrapper>
      <p>menu</p>
    </Wrapper>
  );
}
