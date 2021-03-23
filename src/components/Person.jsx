import React from "react";
import styled from "styled-components";

export default function Person({ title, description, url, img }) {
  return (
    <Link href={url} target="_blank" noreferrer type="link">
      <Wrapper>
        <Header>
          <Avatar src={img} alt="avatar" />
          <ProjectTitle>{title}</ProjectTitle>
        </Header>
        <ProjectDescription>{description}</ProjectDescription>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  height: 100%;
  border: 1px solid white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 2rem 1rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

const ProjectTitle = styled.h1``;
const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin: 0 2rem;
`;

const Link = styled.a`
  color: white;
  display: block;
  width: 500px;
  padding: 2rem 1rem;
  text-decoration: none;
  cursor: pointer;
`;
