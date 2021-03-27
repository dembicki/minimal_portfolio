import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function SectionWrapper({ children, title, id }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [animation, setAnimation] = useState({
    opacity: 0,
    y: -50,
  });

  useEffect(() => {
    if (inView) {
      setAnimation({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView]);

  return (
    <Wrapper
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: animation.opacity, y: animation.y }}
      transition={{ ease: "easeOut", duration: 1.1, delay: 0.5 }}
    >
      <Heading>{`${title}:`}</Heading>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  padding-top: 2rem;
  max-width: 1200px;
  min-height: 80vh;
`;
const Heading = styled.h2`
  font-size: 30px;
  text-align: left;
  margin: 1rem 0;
`;
