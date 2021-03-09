import React from "react";
import styled from "styled-components";

import user from "../data/user";

const Wrapper = styled.header`
  margin: 0;
  margin-bottom: 2rem;
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
      <Heading>
        {user.firstName} {user.lastName}
      </Heading>
      <Description>
        {user.position} currently working at {user.currentCompany}. <br />
        {user.description}
        <br />
        <br />
        If you have any questions please <span>contact me.</span>
      </Description>
    </Wrapper>
  );
}
