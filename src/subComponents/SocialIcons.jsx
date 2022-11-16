import React from "react";
import styled from "styled-components";
import { Github, Instagram, Linkedin } from "../components/AllSvgs";
import { darkTheme } from "../components/Theme";

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

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

export const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/emresates"
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <div>
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
      </div>
      <div>
        <a
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/emresates"
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};
