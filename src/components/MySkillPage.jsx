import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LogoComponent } from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import { SocialIcons } from "../subComponents/SocialIcons";
import { LaptopCodeSolid, PaletteSolid } from "./AllSvgs";
import { lightTheme } from "./Theme";
import BigTitle from "../subComponents/BigTitle";
import laptopImg from "../assets/Images/laptop.png";
import { motion } from "framer-motion";

// Styles
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Laptop = styled(motion.div)`
  position: absolute;
  top: 54.2%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;

  img {
    width: 2180px;
    height: 174vh;
  }
`;
// Framer Motion
const container = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 2,
    },
  },
};
const container2 = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 2,
    },
  },
};

// Main Function
const MySkillPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <Laptop
          initial={{ width: 0 , opacity:0}}
          animate={{ width: "2180px" , opacity:1}}
          transition={{ type:"spring", duration: 2, delay: .4 }}
        >
          <img src={laptopImg} alt="" />
        </Laptop>
        <Main variants={container} initial="hidden" animate="show">
          <Title>
            <PaletteSolid width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Responsive Design</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main variants={container2} initial="hidden" animate="show">
          <Title>
            <LaptopCodeSolid width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SKILLS</strong>
            <p>
              Html, Css, Sass, Scss, Javascript, Jquery, React, Redux,
              Bootstrap, Tailwind, Python, Django
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="-2%" left="15%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillPage;
