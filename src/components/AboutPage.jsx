import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { LogoComponent } from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import { SocialIcons } from "../subComponents/SocialIcons";
import { darkTheme } from "./Theme";
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/Images/spaceman.png";
import { motion } from "framer-motion";
import bgspace from '../assets/Images/space1.jpg'

// Styles
const Box = styled.div`
  /* background-color: ${(props) => props.theme.body}; */
  background-image: url(${bgspace})  ;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0%{transform:translateY(-10px)}
50%{transform:translateY(15px) translateX(15px)}
100%{transform:translateY(-10px)}
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 35vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

// Main function
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

// Framer motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Spaceman
          variants={container}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main
          variants={container}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          I'm a front-end developer located in Turkey. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I am learning new technologies every day on
          this path that I set out to develop my own movie blog site. With a
          little enthusiasm, I started to learn and did good things.
          <br />
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
