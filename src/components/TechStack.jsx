import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

export default function TechStack() {
  const skills = [
    "react.js",
    "js es6",
    "less/sass",
    "graphql",
    "node.js",
    "typescript",
    "docker",
    "redux",
    "postgres",
    "gatsby",
  ];

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
  `;

  return (
    <Wrapper>
      {skills ? skills.map((e) => <Tile key={e} label={e} />) : null}
    </Wrapper>
  );
}
