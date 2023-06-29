import { useState } from "react";
import { HashRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import Question from "./Question";
import Result from "./Result";
import "./App.css";

function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [mbti, setMbti] = useState("");

  function handleStart() {
    setShowQuestions(true);
  }

  function handleFinish(mbti) {
    setMbti(mbti);
    setShowQuestions(false);
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              showQuestions ? (
                <Question onFinish={handleFinish} />
              ) : (
                <Intro onStart={handleStart} />
              )
            }
          />
          <Route path="/result" element={<Result mbti={mbti} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
