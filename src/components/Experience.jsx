/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";
import experience from "../data/experience";

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid white;
  background-color: black;
`;

const JobTitle = styled.h2`
  margin-left: 2rem;
  font-size: 30px;
  font-weight: bolder;
`;

const CompanyName = styled.h3`
  margin-left: 2rem;
  font-size: 1.4rem;
  font-weight: normal;
`;

const Description = styled.ul`
  margin-left: 2rem;
  font-size: 1.4rem;
  line-height: 2rem;
`;

export default function Experience() {
  return (
    <Wrapper>
      <Chrono
        mode="VERTICAL"
        hideControls
        scrollable
        theme={{
          primary: "white",
          secondary: "black",
          cardBgColor: "transparent",
        }}
      >
        {experience.map((item) => (
          <CardWrapper>
            <JobTitle>{item.jobTitle}</JobTitle>
            <CompanyName>{item.companyName}</CompanyName>
            <Description>
              {item.Description.map((bullet, index) => (
                <li>{bullet}</li>
              ))}
            </Description>
          </CardWrapper>
        ))}
      </Chrono>
    </Wrapper>
  );
}
