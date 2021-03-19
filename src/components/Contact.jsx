/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "styled-components";
import user from "../data/user";
import Form from "./Form";

export default function Contact() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const linkedIn = user.links.filter((o) => o.name === "linkedin")[0];

  return (
    <Wrapper>
      <Description>
        I’m open to contact for job offer or project offers. I’m looking for
        creative projects to take part in. Don’t be shy to contact my through my
        contact form or you can find me on{" "}
        <Link href={linkedIn.url} target="_blank" noreferrer>
          <span>{linkedIn.name}.</span>
        </Link>
      </Description>
      <InnerWrapper>
        <Form />
        <Details>
          <h1>Contact info:</h1>
          <Button
            type="button"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          >
            {!isDetailsOpen ? "Show personal details" : "Hide personal details"}
          </Button>
          {isDetailsOpen && (
            <div>
              <p>email: nikeid1235@gmail.com</p>
              <p>tel: +48 792321813</p>
              <p>language: english/polish</p>
            </div>
          )}
        </Details>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 2rem; ;
`;
const InnerWrapper = styled.div`
  display: flex;
`;

const Details = styled.div`
  display: flex;
  width: 400px;
  padding: 0.5rem 2rem;
  flex-direction: column;
  border: 1px solid white;
  background-color: black;
  margin: 1rem 2rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bolder;
  border: 1px solid white;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const Description = styled.p`
  margin: 2rem 0;
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
