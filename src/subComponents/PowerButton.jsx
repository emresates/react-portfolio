// Home Button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

// Styles
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
  padding: 0.3rem;
  border-radius: 50%;
  border: none;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 10px rgba(0, 255, 0, 0.2);
  }

  &>*:first-child{
    text-decoration:none;
    color:inherit;
  }
`;

// Main Function
const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="#fff" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
