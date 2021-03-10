import React from "react";
import styled from "styled-components";
import menuIconWhite from "../assets/menuIconWhite.svg";

export default function Menu() {
  const Wrapper = styled.div`
    position: absolute;
    right: 4rem;
    top: 6rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
  `;
  // TODO: do component logic
  const handleMenu = () => {
    console.log("menu clicked");
  };

  return (
    <Wrapper onClick={handleMenu}>
      <img alt="menu-icon" src={menuIconWhite} />
    </Wrapper>
  );
}
