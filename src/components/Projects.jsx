import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const ProjectCard = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid white;
  background-color: black;
`;

const ProjectTitle = styled.h1``;
const ProjectDescription = styled.p``;

export default function Projects() {
  const ProjectList = [
    {
      name: "Project name",
      description: "project description",
      link: "project_link",
    },
  ];

  return (
    <Wrapper>
      <ProjectCard>
        <ProjectTitle>Hello</ProjectTitle>
        <p>Description</p>
        <button type="button">link</button>
      </ProjectCard>
    </Wrapper>
  );
}
