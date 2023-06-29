import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import questions from "./questions";
import styled, { css, keyframes } from "styled-components";
import Result from "./Result";

const MBTI_TYPES = {
  ISTJ: "Beaver",
  ISFJ: "Deer",
  INFJ: "Wolf",
  INTJ: "Hawk",
  ISTP: "Bear",
  ISFP: "Fox",
  INFP: "Dog",
  INTP: "Owl",
  ESTP: "Raccoon",
  ESFP: "Otter",
  ENFP: "Dolphin",
  ENTP: "Coyote",
  ESTJ: "Lion",
  ESFJ: "Horse",
  ENFJ: "Elephant",
  ENTJ: "Shark",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #4caf50;
`;

const QuestionHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #555;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.animate &&
    css`
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const QuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  label {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #555;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .checkmark {
        background-color: #2196f3;
      }

      &:checked + .checkmark:after {
        display: block;
      }
    }

    .checkmark {
      position: relative;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 2px solid #888;
      transition: background-color 0.2s ease-in-out;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background-color: #fff;
    }
  }
`;

const QuestionButton = styled.button`
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const QuestionsLeft = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-top: auto;
`;

function Question({ onFinish }) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animateQuestion, setAnimateQuestion] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    setAnimateQuestion(true);
  }, [currentQuestionIndex]);

  function handleAnswer(answer) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
    setIsOptionSelected(true);
  }

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setAnimateQuestion(false);
    setIsOptionSelected(false);
  }

  function handleSubmit() {
    const traitScores = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      P: 0,
      J: 0,
    };

    questions.forEach((question, index) => {
      const answer = answers[index];
      traitScores[question.trait] += answer === "agree" ? 1 : 0;
      traitScores[question.trait] -= answer === "disagree" ? 1 : 0;
    });

    let mbtiType = "";

    mbtiType += traitScores.E > traitScores.I ? "E" : "I";
    mbtiType += traitScores.S > traitScores.N ? "S" : "N";
    mbtiType += traitScores.T > traitScores.F ? "T" : "F";
    mbtiType += traitScores.P > traitScores.J ? "P" : "J";

    setResult(mbtiType);
    onFinish(mbtiType); // Call onFinish with the mbtiType

    // Navigate to the '/result' link
    navigate("/result");
  }

  const currentQuestion = questions[currentQuestionIndex];
  const remainingQuestions = questions.length - currentQuestionIndex - 1;

  return (
    <Container>
      {result ? (
        <Result mbti={result} />
      ) : (
        <>
          <QuestionHeading animate={animateQuestion}>
            {currentQuestion.text}
          </QuestionHeading>
          <QuestionOptions>
            <label>
              <input
                type="radio"
                name="answer"
                value="strongly-disagree"
                onChange={() => handleAnswer("strongly-disagree")}
                checked={answers[currentQuestionIndex] === "strongly-disagree"}
              />
              <span className="checkmark"></span>
              Strongly Disagree
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="disagree"
                onChange={() => handleAnswer("disagree")}
                checked={answers[currentQuestionIndex] === "disagree"}
              />
              <span className="checkmark"></span>
              Disagree
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="neutral"
                onChange={() => handleAnswer("neutral")}
                checked={answers[currentQuestionIndex] === "neutral"}
              />
              <span className="checkmark"></span>
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="agree"
                onChange={() => handleAnswer("agree")}
                checked={answers[currentQuestionIndex] === "agree"}
              />
              <span className="checkmark"></span>
              Agree
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="strongly-agree"
                onChange={() => handleAnswer("strongly-agree")}
                checked={answers[currentQuestionIndex] === "strongly-agree"}
              />
              <span className="checkmark"></span>
              Strongly Agree
            </label>
          </QuestionOptions>
          <QuestionsLeft>
            {remainingQuestions}{" "}
            {remainingQuestions === 1 ? "question" : "questions"} left
          </QuestionsLeft>
          <QuestionButton
            onClick={
              isOptionSelected && currentQuestionIndex < questions.length - 1
                ? handleNextQuestion
                : handleSubmit
            }
            disabled={!isOptionSelected}
          >
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
          </QuestionButton>
        </>
      )}
    </Container>
  );
}

export default Question;
