import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Theme";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

export const LogoComponent = (props) => {
  return <Logo color={props.theme}>EA</Logo>;
};
