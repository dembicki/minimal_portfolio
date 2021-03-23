import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <span>
        Made with ❤️ using React & styled-components. It was nice to see you
        here.
      </span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  position: absolute;
  bottom: 100;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
