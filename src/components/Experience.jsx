/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";

import experience from "../data/experience";

export default function Experience() {
  const Wrapper = styled.div`
    padding: 0;
  `;

  const CardWrapper = styled.div``;

  const JobTitle = styled.h2`
    font-size: 30px;
    font-weight: bolder;
  `;

  const CompanyName = styled.h3`
    font-size: 1.4rem;
    font-weight: normal;
  `;

  const Description = styled.ul`
    font-size: 1.4rem;
    line-height: 2rem;
  `;

  return (
    <Wrapper>
      <Chrono
        mode="VERTICAL"
        hideControls
        theme={{
          primary: "white",
          secondary: "black",
          cardBgColor: "transparent",
        }}
      >
        {/* TODO: fix elements nasted */}
        {experience.map((item) => (
          <CardWrapper>
            <JobTitle>{item.jobTitle}</JobTitle>
            <CompanyName>{item.companyName}</CompanyName>
            <Description>
              {item.Description.map((d) => (
                <li>{d}</li>
              ))}
            </Description>
          </CardWrapper>
        ))}
      </Chrono>
    </Wrapper>
  );
}
