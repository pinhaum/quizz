import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'this is a question?',
      answerOptions: [
        { answerText: 'no', isCorrect: false },
        { answerText: 'no', isCorrect: false },
        { answerText: 'no', isCorrect: false },
        { answerText: 'yes!', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="header">Quizz</h1>
    </>
  );
}

export default App;
