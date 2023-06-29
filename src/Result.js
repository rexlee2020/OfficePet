import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import animals from "./animals";

const Result = (props) => {
  const { mbti } = props;

  const matchingAnimal = animals.find((animal) => animal.type === mbti);

  const [showDescription, setShowDescription] = useState(true);
  const [showLikeDetails, setShowLikeDetails] = useState(false);
  const [showHateDetails, setShowHateDetails] = useState(false);
  const [showWorstMatches, setShowWorstMatches] = useState(false);
  const [showBestMatches, setShowBestMatches] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  const resultRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultRef.current && !resultRef.current.contains(event.target)) {
        setShowSharePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDescription = () => {
    setShowDescription(true);
    setShowLikeDetails(false);
    setShowHateDetails(false);
    setShowWorstMatches(false);
    setShowBestMatches(false);
  };

  const toggleLikeDetails = () => {
    setShowDescription(false);
    setShowLikeDetails(true);
    setShowHateDetails(false);
    setShowWorstMatches(false);
    setShowBestMatches(false);
  };

  const toggleHateDetails = () => {
    setShowDescription(false);
    setShowLikeDetails(false);
    setShowHateDetails(true);
    setShowWorstMatches(false);
    setShowBestMatches(false);
  };

  const toggleWorstMatches = () => {
    setShowDescription(false);
    setShowLikeDetails(false);
    setShowHateDetails(false);
    setShowWorstMatches(true);
    setShowBestMatches(false);
  };

  const toggleBestMatches = () => {
    setShowDescription(false);
    setShowLikeDetails(false);
    setShowHateDetails(false);
    setShowWorstMatches(false);
    setShowBestMatches(true);
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  const shareLink = "https://example.com";

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={matchingAnimal?.image}
          alt={matchingAnimal?.name}
          style={{
            width: "100%",
            height: "inherit",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "1rem",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            boxSizing: "border-box",
            transition: "opacity 0.3s ease, height 0.3s ease",
            opacity: showDescription ? 1 : 0,
            height: showDescription ? "auto" : 0,
            overflow: "hidden",
          }}
          ref={resultRef}
        >
          <>
            <h2>{matchingAnimal?.name}</h2>
            <p>{matchingAnimal?.description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  transition: "opacity 0.3s ease",
                  opacity: showDescription ? 1 : 0,
                  pointerEvents: showDescription ? "auto" : "none",
                }}
              >
                <i
                  className="far fa-thumbs-up"
                  style={{
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleLikeDetails}
                ></i>
                <p>Things They Like</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  transition: "opacity 0.3s ease",
                  opacity: showDescription ? 1 : 0,
                  pointerEvents: showDescription ? "auto" : "none",
                }}
              >
                <i
                  className="far fa-thumbs-down"
                  style={{
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleHateDetails}
                ></i>
                <p>Things They Hate</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  transition: "opacity 0.3s ease",
                  opacity: showDescription ? 1 : 0,
                  pointerEvents: showDescription ? "auto" : "none",
                }}
              >
                <i
                  className="fas fa-times"
                  style={{
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleWorstMatches}
                ></i>
                <p>Worst Matches</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  transition: "opacity 0.3s ease",
                  opacity: showDescription ? 1 : 0,
                  pointerEvents: showDescription ? "auto" : "none",
                }}
              >
                <i
                  className="fas fa-check"
                  style={{
                    fontSize: "3rem",
                    cursor: "pointer",
                  }}
                  onClick={toggleBestMatches}
                ></i>
                <p>Best Matches</p>
              </div>
            </div>
          </>
        </div>
        {showLikeDetails && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              boxSizing: "border-box",
              transition: "opacity 0.3s ease, height 0.3s ease",
              opacity: showLikeDetails ? 1 : 0,
              height: showLikeDetails ? "auto" : 0,
              overflow: "hidden",
            }}
          >
            <>
              <h3>Things They Like</h3>
              <p>{matchingAnimal?.thingsTheyLike}</p>
              <button
                onClick={toggleDescription}
                style={{
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "#4caf50",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                  opacity: showLikeDetails ? 1 : 0,
                  pointerEvents: showLikeDetails ? "auto" : "none",
                  marginTop: "1rem",
                }}
              >
                Go Back
              </button>
            </>
          </div>
        )}
        {showHateDetails && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              boxSizing: "border-box",
              transition: "opacity 0.3s ease, height 0.3s ease",
              opacity: showHateDetails ? 1 : 0,
              height: showHateDetails ? "auto" : 0,
              overflow: "hidden",
            }}
          >
            <>
              <h3>Things They Hate</h3>
              <p>{matchingAnimal?.thingsTheyHate}</p>
              <button
                onClick={toggleDescription}
                style={{
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "#4caf50",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                  opacity: showHateDetails ? 1 : 0,
                  pointerEvents: showHateDetails ? "auto" : "none",
                  marginTop: "1rem",
                }}
              >
                Go Back
              </button>
            </>
          </div>
        )}
        {showWorstMatches && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              boxSizing: "border-box",
              transition: "opacity 0.3s ease, height 0.3s ease",
              opacity: showWorstMatches ? 1 : 0,
              height: showWorstMatches ? "auto" : 0,
              overflow: "hidden",
            }}
          >
            <>
              <h3>Worst Matches</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {matchingAnimal?.worstMatch.map((type) => {
                  const animal = animals.find((animal) => animal.type === type);
                  return (
                    <div
                      key={animal?.type}
                      style={{
                        textAlign: "center",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        src={animal?.image}
                        alt={animal?.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={toggleDescription}
                      />
                      <p>{animal?.name}</p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={toggleDescription}
                style={{
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "#4caf50",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                  opacity: showWorstMatches ? 1 : 0,
                  pointerEvents: showWorstMatches ? "auto" : "none",
                  marginTop: "1rem",
                }}
              >
                Go Back
              </button>
            </>
          </div>
        )}
        {showBestMatches && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              boxSizing: "border-box",
              transition: "opacity 0.3s ease, height 0.3s ease",
              opacity: showBestMatches ? 1 : 0,
              height: showBestMatches ? "auto" : 0,
              overflow: "hidden",
            }}
          >
            <>
              <h3>Best Matches</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {matchingAnimal?.bestMatch.map((type) => {
                  const animal = animals.find((animal) => animal.type === type);
                  return (
                    <div
                      key={animal?.type}
                      style={{
                        textAlign: "center",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        src={animal?.image}
                        alt={animal?.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={toggleDescription}
                      />
                      <p>{animal?.name}</p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={toggleDescription}
                style={{
                  fontSize: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  background: "#4caf50",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.3s ease",
                  opacity: showBestMatches ? 1 : 0,
                  pointerEvents: showBestMatches ? "auto" : "none",
                  marginTop: "1rem",
                }}
              >
                Go Back
              </button>
            </>
          </div>
        )}
      </div>
      <div
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1,
        }}
      >
        <button
          onClick={toggleSharePopup}
          style={{
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            background: "#4caf50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }}
        >
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
      {showSharePopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            zIndex: 2,
          }}
        >
          <h3>Share My Result</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <a
              href={`https://instagram.com/share?url=${shareLink}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                width: "30%",
                textAlign: "center",
                padding: "0.5rem",
                background: "#405de6",
                color: "#fff",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                width: "30%",
                textAlign: "center",
                padding: "0.5rem",
                background: "#3b5998",
                color: "#fff",
                borderRadius: "0.5rem",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareLink);
                alert("Link copied to clipboard!");
              }}
              style={{
                display: "inline-block",
                width: "30%",
                textAlign: "center",
                padding: "0.5rem",
                background: "#ccc",
                color: "#000",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-copy"></i>
            </button>
          </div>
        </div>
      )}
      <Link
        to="/"
        style={{ position: "fixed", top: "1rem", left: "1rem", color: "#fff" }}
      >
        <i className="fas fa-redo"></i>
      </Link>
    </div>
  );
};

export default Result;
