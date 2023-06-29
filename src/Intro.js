import React from "react";
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
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #4caf50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #555;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Note = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #888;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  margin : 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #3e8e41;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    max-width: 600px;
  }
`;

const AnimalImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #4caf50;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 2rem 0;
  }
`;

const StyledFooter = styled.footer`
  margin-top: 1rem;
  color: #888;
  font-size: 0.8rem;
  text-align: center;

  a {
    color: #4caf50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    font-size: 1rem;
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
        Please note that this test is intended for employees and may not be applicable to students or those not in a workplace setting.
      </Note>
      <ImageContainer>
        <AnimalImage src="/images/image1.png" alt="Lion working" />
        <AnimalImage src="/images/image2.png" alt="Elephant working" />
        <AnimalImage src="/images/image3.png" alt="Giraffe working" />
        <AnimalImage src="/images/image4.png" alt="Monkey working" />
      </ImageContainer>
      <Button onClick={onStart}>Start</Button>
      <StyledSeparator />
      <StyledFooter>
        Developed by <a href="https://github.com/rexlee2020/OfficePet">LJM</a> | &copy; 2023
        <br/>
        Powered by ChatGPT
      </StyledFooter>
      {/* <StyledFooter>
        Developed by <a href="https://github.com/rexlee2020/OfficePet">LJM</a> | &copy; 2023
      </StyledFooter> */}
    </Container>
  );
}

export default Intro;
