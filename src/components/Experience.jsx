/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Chrono } from "react-chrono";
import styled from "styled-components";

export default function Experience() {
  const Wrapper = styled.div``;

  const items = [
    {
      cardTitle: "Junior Frontend Developer",
      cardSubtitle: "LPN PLANT, March 2020 - Present",
      cardDetailedText: `• Developing dashboard for wireless managing outdoor
      lights installations using React, Postgres, GraphQL, Ant Design, Nodejs
      with schedule planning integration and data analytics.
      • Developing dashboard for IoT data analytics using Cube.js, React, GraphQL, Nodejs
      • Rebranding existing client’s landing pages
      • Doing researches for potencial project tech stack based on customer needs
      • Managing small webdev team for some time.`,
    },
    {
      cardTitle: "Graphic Designer",
      cardSubtitle: "Mayeryn , Jan 2019 - Apr 2020",
      cardDetailedText: `• Creating full branding
        • Developing mayeryn.com website
        • Creating layouts for embbeded systems
        • Creaing layouts for web and mobile apps
        • Creating extra designes
        • Takeing care of ui coherence for web and mobiles apps
        • Working in SCRUM and KANBAN methodology
        • Full Remote Work`,
    },
    {
      cardTitle: "Web Designer/ Web Developer",
      cardSubtitle: "Social Unicorn Creative Agency, June 2019 - March 2020",
      cardDetailedText: `• Creating websites and shops based on Wordpress, Prestashop
        with extra custom features
        • Creating landing pages using HTML, CSS, Vanilla JS
        • Optimization websites for page speed and seo
        • Work in small teams
        • Learning React and Gatbsyjs
        • Creating graphics designs
        • Partly Remote Work`,
    },
  ];

  // const handleChange = (e) => {};

  return (
    <Wrapper>
      <Chrono
        items={items}
        mode="VERTICAL"
        scrollable
        hideControls
        disableNavOnKey
        theme={{
          primary: "white",
          secondary: "black",
          cardBgColor: "transparent",
          cardForeColor: "white",
        }}
      />
    </Wrapper>
  );
}
