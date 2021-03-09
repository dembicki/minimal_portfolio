import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  margin: 0;
  margin-bottom: 4rem;
`;

const Heading = styled.h1`
  font-size: 3.7rem;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.4rem;
  text-align: left;
  line-height: 2.1rem;
  max-width: 60%;
  span {
    color: #0277bd;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Heading>Damian Dembicki</Heading>
      <Description>
        Web Developer currently working at LPNPLANT. The real passionate of
        modern web technologies. I would like to push my career path into
        developing web appliactions with <span>React</span>. Futhermore, I’m
        open to learn and discover some new javascript based frameworks.
        Currently learning Next.js and Typescript basics.
        <br />
        <br />
        If you have any questions please <span>contact me.</span>
      </Description>
    </Wrapper>
  );
}
