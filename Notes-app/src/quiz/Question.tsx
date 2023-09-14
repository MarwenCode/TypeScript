import React, { useState, ReactElement, useEffect } from "react";

interface QuestionProps {
  question: {
    question: string;
    correct_answer: string;
  };
  onNextQuestion: () => void;
  currentQuestionNumber: number; // New prop for question number
  totalQuestions: number; // Total number of questions
  resetQuestion: () => void;
}

const Question = ({
  question,
  onNextQuestion,
  currentQuestionNumber,
  totalQuestions,
  resetQuestion,
}: QuestionProps): ReactElement => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null); // Specify the type of userAnswer
  // const [answerMessage, setAnswerMessage] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [finaleMessage, setFinaleMessage] = useState<string | null>(null);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    const isCorrect = userAnswer === question.correct_answer;

    if (isCorrect) {
      setScore((prevState) => prevState + 1);
    }

    setUserAnswer(null);

    onNextQuestion();
  };

  const playAgain = () => {
    // window.location.reload()

    setUserAnswer(null);
    setFinaleMessage(null);
    setScore(0);
    resetQuestion(); // Call the resetQuestion function
  };



  useEffect(() => {
    const averageScore = () => {
      const percentage = (score / totalQuestions) * 100;

      if (totalQuestions === currentQuestionNumber) {
        if (percentage < 80) {
          setFinaleMessage("You failed, you need to play again.");
        } else {
          setFinaleMessage("Congratulations! You passed.");
        }
      }
    };

  
    if (currentQuestionNumber === totalQuestions) {
      averageScore();
    }
  }, [score, currentQuestionNumber, totalQuestions]);

  return (
    <div className="question">
      <div className="score">Score: {score}</div>

      <h2>
        Question {currentQuestionNumber} of {totalQuestions}
      </h2>

     

      <h2>{question.question}</h2>

      {currentQuestionNumber != totalQuestions && (
        <>
          <div className="options">
            <input
              type="radio"
              name="answer"
              value="True"
              checked={userAnswer === "True"}
              onChange={handleAnswerChange}
            />
            True
            <input
              type="radio"
              name="answer"
              value="False"
              checked={userAnswer === "False"}
              onChange={handleAnswerChange}
            />
            False
          </div>
          <button onClick={handleSubmit} disabled={!userAnswer}>
            Submit
          </button>
        </>
      )}

      {currentQuestionNumber === totalQuestions && (
        <>
          
          <button onClick={playAgain}>play again</button>
        </>
      )}
      <div className="ansxer-message">
        {finaleMessage && (
          <p
            style={{
              color: finaleMessage.includes("Congratulations")
                ? "green"
                : "red",
            }}>
            {finaleMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Question;
