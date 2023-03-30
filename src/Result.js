import React from "react";
import { Link } from "react-router-dom";
import animals from "./animals";

function Result(props) {
  const { mbti } = props;

  // Find the animal that matches the user's MBTI
  const matchingAnimal = animals.find((animal) => animal.type === mbti);

  // Find the animal that is the worst match for the user's MBTI
  const worstAnimal = animals.find(
    (animal) => animal.type === matchingAnimal.worstMatch
  );

  // Find the animal that is the best match for the user's MBTI
  const bestAnimal = animals.find(
    (animal) => animal.type === matchingAnimal.bestMatch
  );

  return (
    <div className="result-container">
      <h1>Your result: {matchingAnimal.name}</h1>
      <img src={matchingAnimal.image} alt={matchingAnimal.name} />
      <p>{matchingAnimal.description}</p>
      <h2>Worst Match: {worstAnimal.name}</h2>
      <img src={worstAnimal.image} alt={worstAnimal.name} />
      <p>{worstAnimal.description}</p>
      <h2>Best Match: {bestAnimal.name}</h2>
      <img src={bestAnimal.image} alt={bestAnimal.name} />
      <p>{bestAnimal.description}</p>
      <Link to="/">Take the test again</Link>
    </div>
  );
}

export default Result;
