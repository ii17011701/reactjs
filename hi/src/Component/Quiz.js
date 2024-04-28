import React, { useState } from 'react';
// import './App.css';
import './Quiz.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Tokyo', isCorrect: false },
      ],
    },
    {
      questionText: 'What is 2 + 2?',
      answerOptions: [
        { answerText: '4', isCorrect: true },
        { answerText: '22', isCorrect: false },
        { answerText: '0', isCorrect: false },
        { answerText: '2', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest ocean on Earth?',
      answerOptions: [
        { answerText: 'Atlantic Ocean', isCorrect: false },
        { answerText: 'Indian Ocean', isCorrect: false },
        { answerText: 'Arctic Ocean', isCorrect: false },
        { answerText: 'Pacific Ocean', isCorrect: true },
      ],
    }
    // Add more questions here
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
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
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(answerOption.isCorrect)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
