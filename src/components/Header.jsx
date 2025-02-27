import React from "react";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styled from "styled-components";
import me from "../assets/me.png";
import user from "../data/user";

export default function Header() {
  return (
    <Wrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Heading>
        {user.firstName} {user.lastName}
      </Heading>
      <InnerWrapper>
        <Description>
          {user.position} currently working at{" "}
          <span>{user.currentCompany}.</span> <br />
          {user.description}
          <br />
          <br />
          If you have any questions please{" "}
          <span>
            <ContactLink to="contact" smooth duration={700}>
              contact me.
            </ContactLink>
          </span>
        </Description>
        <Avatar src={me} />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  margin: 0;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 3.7rem;
  text-align: left;
  margin: 0;
  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.4rem;
  text-align: left;
  line-height: 2.1rem;
  flex: 2;
  span {
    color: #0277bd;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1050px;
  /* border: 1px solid red; */
  @media (max-width: 900px) {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
`;

const Avatar = styled.img`
  padding: 0.5rem;
  flex: 0.5;
  height: auto;
  width: 100%;
  height: 100%;
  align-self: top;
  margin-left: 2rem;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ContactLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
