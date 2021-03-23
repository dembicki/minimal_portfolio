import React from "react";
import styled from "styled-components";
import Person from "./Person";

export default function Inspiration() {
  return (
    <Wrapper>
      <Person
        title="Coding Garden"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/611cac54-34e0-4c2a-851b-66e5ea2b3f81-profile_image-300x300.png"
        description="Hosted by CJ, Coding Garden is an open, interactive and engaging community where any coder, from beginner to veteran, can learn and grow together. Whether it's a tutorial, Q&A session, algorithmic problem solving or full application design and build, there's always something new to learn!"
        url="https://www.twitch.tv/codinggarden"
      />
      <Person
        title="VapeJuiceJordan"
        img="https://static-cdn.jtvnw.net/jtv_user_pictures/045c8c64-5c59-43d9-a011-5cc082b2ab26-profile_image-300x300.png"
        description="I've heard I'm pretty good at programming, so let's see if we can learn anything together. I work as a Software Engineer at Netflix."
        url="https://www.twitch.tv/vapejuicejordan/about"
      />
      <Person
        title="Hello Roman"
        img="https://yt3.ggpht.com/ytc/AAUvwngEMVOlwtrxr1BTvs5RFGirsuzZ6YeOvdwCv2UNUg=s88-c-k-c0x00ffffff-no-rj"
        description="
        Cześć! Nazywam się Adam Romański i sam siebie nazywam kreatywnym front-endowcem, ponieważ zanim dołączyłem do branży IT, wiele lat spędziłem pracując jako copywriter. 
        Na moim kanale znajdziesz filmy poświęcone branży IT, a przede wszystkim moim przemyśleniom na temat front-endu."
        url="https://www.youtube.com/channel/UCq8XmOMtrUCb8FcFHQEd8_g"
      />
      <Person
        title="Wrong Akram"
        img="https://yt3.ggpht.com/ytc/AAUvwngiB_vlYvg_aoIRuFWP4KorSxaNbbm2COOREufUYg=s88-c-k-c0x00ffffff-no-rj"
        description="Hey there! Welcome to my channel, I am Akram my goal is to bring you great tutorials relating to UI/UX Design and Front End Development. When it comes to technologies  React.js and Node.js will heavily be used. "
        url="https://www.youtube.com/c/WrongAkram/"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  justify-content: space-space-evenly;
`;
