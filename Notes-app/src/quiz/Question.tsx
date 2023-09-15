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
  const [timer, setTimer] = useState<number>(60);
  

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

  //start the Quiz button
  const startQuiz = () => {
    if (currentQuestionNumber === totalQuestions) {
      setTimer(0); // Set timer to 0 when the quiz is complete
    } else {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalId); // Clear the interval when the timer reaches 0
            return 0; // Set timer to 0
          }
        });
      }, 1000);
    }
  };

  const stopQuiz = () => {
    setTimer((prevTimer) => prevTimer);
  };

  return (
    <div className="question">
      <div className="left">
        <span>Score: {score}</span>
        <h2>
          Question {currentQuestionNumber} of {totalQuestions}
        </h2>
        <button className="start" onClick={startQuiz}>
          Start: {timer}s
        </button>

        <br />
      </div>

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
