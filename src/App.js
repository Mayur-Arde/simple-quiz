import React, { useState } from 'react';
import data from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions,] = useState(data);


  const handlerCheck = (answer) => {
    if (answer === true) {
      setScore(score + 1);
    }

    let nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }
  return (
    <main className='main'>
      <h1 className="title">Simple Quiz</h1>
      <div className="quiz">
        {showScore ? (
          <div>
            <h2>
              You Scored {score} / {questions.length}.
            </h2>
            <button onClick={()=>handleRestart()}>Restart</button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <h2>Question No {currentQuestion + 1}</h2>
            </div>
            <div className="questions">
              <h4>{questions[currentQuestion].question}</h4>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button onClick={() => handlerCheck(answerOptions.isCorrect)}>
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
