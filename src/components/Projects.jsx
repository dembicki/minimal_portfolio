import React from "react";
import styled from "styled-components";
import Card from "./Card";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Wrapper>
      {projects?.map(({ id, name, description, url }) => (
        <Card key={id} title={name} description={description} url={url} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  margin: 1rem;
`;
