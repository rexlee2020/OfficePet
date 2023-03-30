import { useState } from "react";
import questions from "./questions";

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

function Question() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleAnswer(answer) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: answer,
    }));
  }

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="question-container">
      {result ? (
        <p className="result-text">
          Your personality type is: {result} ({MBTI_TYPES[result]})
        </p>
      ) : (
        <>
          <h1 className="question-heading">{currentQuestion.text}</h1>
          <div className="question-options">
            <label>
              <input
                type="radio"
                name="answer"
                value="strongly-disagree"
                onChange={() => handleAnswer("strongly-disagree")}
                checked={answers[currentQuestionIndex] === "strongly-disagree"}
              />
              Strongly Disagree
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="disagree"
                onChange={() => handleAnswer("disagree")}
                checked={answers
                  [currentQuestionIndex] === "disagree"}
                  />
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
                  Strongly Agree
                </label>
              </div>
              {currentQuestionIndex < questions.length - 1 ? (
                <button className="question-button" onClick={handleNextQuestion}>
                  Next
                </button>
              ) : (
                <button className="question-button" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </>
          )}
        </div>
);
}

export default Question;        