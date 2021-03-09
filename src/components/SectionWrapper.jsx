import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ children, title, id, minHeight }) {
  const Wrapper = styled.section`
    max-width: 1200px;
    min-height: 100vh;
    min-height: ${minHeight};
  `;
  const Heading = styled.h2`
    font-size: 30px;
    text-align: left;
    margin: 1rem 0;
  `;

  return (
    <Wrapper id={id}>
      <Heading>{`${title}:`}</Heading>
      {children}
    </Wrapper>
  );
}
