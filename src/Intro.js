import React from "react";
import "./Intro.css"; // Import the CSS file
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: 2s ${fadeInAnimation};
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #4caf50;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Note = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`;

function Intro({ onStart }) {
  return (
    <Container>
      <Heading>Welcome to our Personality Test!</Heading>
      <Text>
        This test is designed to help employees understand their personality type and how it relates to their work style. By answering a series of questions, you'll discover which animal best matches your personality.
      </Text>
      <Note>
        Please note that this test is intended for employees, and may not be applicable to students or those not in a workplace setting.
      </Note>
      <Button onClick={onStart}>Start</Button>
    </Container>
  );
}

export default Intro;
