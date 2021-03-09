import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ children, title }) {
  const Wrapper = styled.section`
    max-width: 60%;
  `;
  const Heading = styled.h2`
    font-size: 30px;
    text-align: left;
    margin: 1rem 0;
  `;

  return (
    <Wrapper>
      <Heading>{`${title}:`}</Heading>
      {children}
    </Wrapper>
  );
}
