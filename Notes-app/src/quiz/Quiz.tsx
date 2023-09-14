import React, { useEffect, useState } from "react";

import Question from "./Question";
import "./quiz.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean"
      );
      const data = await response.json();
      setQuestions(data.results);
    };

    fetchQuestions();
  }, []);

  console.log(questions);


  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length -1) {
        setCurrentQuestionIndex((prevState)=> prevState + 1)
    }else{
        alert("Quiz Completed")}
       
     

    }

  // const handleNextQuestion = () => {
  //   setCurrentQuestionIndex((prevState) => prevState + 1);
  // };

  // Function to reset the current question and user answer
  const resetQuestion = () => {
    setCurrentQuestionIndex(0);
  };
  

  return (
    <div className="quiz-card">
    {questions.length > 0 && (
      <Question
        question={questions[currentQuestionIndex]}
        onNextQuestion={handleNextQuestion}
        currentQuestionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        resetQuestion={resetQuestion} // Pass the resetQuestion function
       
      />
    )}
  </div>
 
  );
};

export default Quiz;
