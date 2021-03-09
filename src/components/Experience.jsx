/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";

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

  const items = [
    {
      jobTitle: "Junior Frontend Developer",
      companyName: "LPN PLANT, March 2020 - Present",
      Description: [
        "Developing dashboard for wireless managing outdoor lights installations using React Postgres, GraphQL, Ant Design, Nodejs with schedule planning integration and data analytics.",
        "Developing dashboard for IoT data analytics using Cube.js, React, GraphQL, Nodejs",
        "Rebranding existing client’s landing pages",
        "Doing researches for potencial project tech stack based on customer needs",
        "Managing small webdev team for some time.",
      ],
    },
    {
      jobTitle: "Junior Frontend Developer",
      companyName: "LPN PLANT, March 2020 - Present",
      Description: [
        "Developing dashboard for wireless managing outdoor lights installations using React Postgres, GraphQL, Ant Design, Nodejs with schedule planning integration and data analytics.",
        "Developing dashboard for IoT data analytics using Cube.js, React, GraphQL, Nodejs",
        "Rebranding existing client’s landing pages",
        "Doing researches for potencial project tech stack based on customer needs",
        "Managing small webdev team for some time.",
      ],
    },
  ];

  // const handleChange = (e) => {};

  return (
    <Wrapper>
      <Chrono
        mode="VERTICAL"
        scrollable={{ scrollbar: false }}
        hideControls
        theme={{
          primary: "white",
          secondary: "black",
          cardBgColor: "transparent",
          cardForeColor: "violet",
        }}
      >
        {items.map((item) => (
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
