/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import user from "../data/user";
import Form from "./Form";

const Wrapper = styled.div`
  padding: 0 2rem; ;
`;

const Description = styled.p`
  margin: 3rem 0;
  font-size: 1.4rem;
  text-align: left;
  line-height: 2.1rem;
  max-width: 60%;
  span {
    color: #0277bd;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

export default function Contact() {
  const linkedIn = user.links.filter((o) => o.name === "linkedin")[0];
  return (
    <Wrapper>
      <Description>
        I’m open to contact for job offer or project offers. I’m looking for
        creative projects to take part in. Don’t be shy to contact my through my
        contact form or you can find me on{" "}
        <Link href={linkedIn.url} target="_blank" norefferer>
          <span>{linkedIn.name}.</span>
        </Link>
      </Description>
      <Form />
    </Wrapper>
  );
}
