import React from "react";
import styled from "styled-components";

export default function Tile({ label }) {
  return (
    <Wrapper>
      <Front>
        <Label>{label}</Label>
      </Front>
      <Back />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

const Front = styled.div`
  border: 2px solid white;
  width: 150px;
  height: 150px;
  display: flex;
  position: absolute;
  background-color: black;
  top: 0;
  transition: transform ease-in-out 0.3s;
  &:hover {
    transform: translate(10px, 10px);
    transition: transform ease-in-out 0.3s;
    cursor: pointer;
  }
`;

const Back = styled.div`
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  width: 150px;
  height: 150px;
  display: flex;
  top: 0;
  z-index: -1;
  position: absolute;
  transform: translate(10px, 10px);
`;

const Label = styled.span`
  color: white !important;
  align-self: center;
  justify-self: center;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  z-index: 1;
`;
