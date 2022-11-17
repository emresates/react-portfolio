import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, Instagram, Linkedin } from "../components/AllSvgs";
import { darkTheme } from "../components/Theme";

// Styles
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

// Main Function
export const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.linkedin.com/in/emresates/"
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/emresates"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.instagram.com/secenory/"
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};
