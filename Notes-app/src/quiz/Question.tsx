// import React from 'react'

// const Question = () => {
//   return (
//     //    <div className="quiz-container">
//     //   {questions.map((question, index) => (
//     //     <div className="quiz-card" key={index}>
//     //       <div className="quiz-header">
//     //         <h1>{question.category}</h1>
//     //         <p>Date: {question.created_at}</p>
//     //       </div>
//     //       <div className="quiz-content">
//     //         <p>{question.question}</p>
//     //       </div>
//     //       <div className="quiz-footer">
//     //         <p>Status:</p>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//   )
// }

// export default Question

import React, { useState, ReactElement } from 'react';

interface QuestionProps {
  question: {
    question: string;
    correct_answer: string;
  };
  onNextQuestion: () => void;
}

const Question = ({ question, onNextQuestion }: QuestionProps): ReactElement => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null); // Specify the type of userAnswer

//   const handleAnswer = (answer: string) => {
//     setUserAnswer(answer);
//   };

//   const handleSubmit = () => {
//     // Check if the user's answer is correct and handle accordingly
//     const isCorrect = userAnswer === question.correct_answer;
//     // You can implement your logic here, e.g., display a message or update the score.

//     // Move to the next question
//     onNextQuestion();
//   };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        <button
        //   onClick={() => handleAnswer('True')}
        //   className={userAnswer === 'True' ? 'selected' : ''}
        >
          True
        </button>
        <button
        //   onClick={() => handleAnswer('False')}
        //   className={userAnswer === 'False' ? 'selected' : ''}
        >
          False
        </button>
      </div>
      <button 
    //   onClick={handleSubmit} disabled={!userAnswer}
      
      
      >
        Submit
      </button>
    </div>
  );
};

export default Question;

