import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { LogoComponent } from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import { SocialIcons } from "../subComponents/SocialIcons";
import { darkTheme } from "./Theme";
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/Images/spaceman.png";
import { motion } from "framer-motion";
import bgspace from "../assets/Images/space1.jpg";

// Styles
const Box = styled.div`
  /* background-color: ${(props) => props.theme.body}; */
  background-image: url(${bgspace});
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
  backdrop-filter: blur(2px);

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

// Main function
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
          As a Frontend Developer who has been continuously improving myself for
          the past 2 years, along with 7 months of work experience, I have
          actively worked on projects involving React and JavaScript.
          Additionally, I have gained experience in the backend side with
          Node.js and MongoDB.
          <br />
          My project management skills and inclination towards teamwork enable
          me to work effectively within a collaborative environment to deliver
          successful projects.I have effectively communicated with our team to
          understand and address customer needs. I am proficient in both English
          and Turkish languages, allowing me to communicate seamlessly with
          clients, team members, and project stakeholders.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
