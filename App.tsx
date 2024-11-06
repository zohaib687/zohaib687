

import React, { useState } from 'react';

import './App.css';
interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What is the capital of Pakistan?',
    options: ['Islamabad', 'Lahore', 'Karachi', 'Peshawar'],
    answer: 'Islamabad',
  },
  {
    id: 2,
    question: 'Who is the founder of Pakistan?',
    options: ['Quaid-e-Azam', 'Allama Iqbal', 'Liaquat Ali Khan', 'Jinnah'],
    answer: 'Quaid-e-Azam',
  },
  {
    id: 3,
    question: 'which one first highest bulding in Dubai?',
    options: ['BurjeKhalifa', 'PrincessTower', 'Marina', 'Emirates Tower'],
    answer: 'BurjeKhalifa',
  },
  {
    id: 4,
    question: 'what was the height of Burje-khalifa',
    options: ['1002meters', '2000meters', '828meters', '545meters'],
    answer: '828meters',
  },
  
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h1 className='finished'>Quiz Finished!</h1>
        <p className='score-container'>Your score: {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div className='quiz-container'>
      <h1 className='quiz-header'>Question {currentQuestion + 1}</h1>
      <p className='quiz-question'>{questions[currentQuestion].question}</p>
      <ul className='quiz-options '>
        {questions[currentQuestion].options.map((option, index) => (
          <li className='li' key={index}>
            <button className=' button' onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizApp;