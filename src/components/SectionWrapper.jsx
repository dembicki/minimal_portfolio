import React from "react";
import styled from "styled-components";

export default function SectionWrapper({ children, title, id }) {
  return (
    <Wrapper id={id}>
      <Heading>{`${title}:`}</Heading>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 2rem;
  max-width: 1200px;
  min-height: 80vh;
`;
const Heading = styled.h2`
  font-size: 30px;
  text-align: left;
  margin: 1rem 0;
`;
