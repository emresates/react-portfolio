import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";

// Styles
const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.body} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.body} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  z-index: 1;
  border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.body};
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .picture {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

// Main Function
function Introduction() {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="picture" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 2, delay: 2 }}
        >
          <h1>Hi,</h1>
          <h3>I'm Emre Ates</h3>
          <h6>I design and code simple yet beautiful websites</h6>
        </Text>
      </SubBox>
    </Box>
  );
}

export default Introduction;
