/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import styled from "styled-components";

export default function Experience() {
  const [point, setPoint] = useState();

  const Wrapper = styled.div``;

  const handleChange = (e) => {
    console.log(e);
  };

  return <Wrapper>e</Wrapper>;
}
