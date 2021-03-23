import React from "react";
import styled from "styled-components";

export default function Card({ title, description, url, img }) {
  return (
    <Link href={url} target="_blank" noreferrer type="link">
      <Wrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 250px;
  border: 1px solid white;
  background-color: black;
  padding: 1.5rem;
`;

const ProjectTitle = styled.h1``;
const ProjectDescription = styled.p`
  margin: 2rem;
  font-size: 1.2rem;
`;

const Link = styled.a`
  color: white;
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
`;
