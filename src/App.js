import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'this is a question??',
      answerOptions: [
        { answerText: 'no', isCorrect: false },
        { answerText: 'no', isCorrect: false },
        { answerText: 'no', isCorrect: false },
        { answerText: 'yes!', isCorrect: true },
      ],
    },
    {
      questionText: 'o Naruto fvira hokage no fim??',
      answerOptions: [
        { answerText: 'não', isCorrect: false },
        { answerText: 'SPOILER!', isCorrect: true },
        { answerText: 'sim', isCorrect: false },
        { answerText: 'talvez', isCorrect: false },
      ],
    },
    {
      questionText: 'Quantas Dragon Balls existem??',
      answerOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
    {
      questionText: 'Quantas Dragon Balls existem??',
      answerOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <h1 className="header">Quizz</h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Your scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1} </span>
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
