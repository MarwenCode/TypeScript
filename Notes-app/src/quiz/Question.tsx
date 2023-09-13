import React, { useState, ReactElement } from "react";

interface QuestionProps {
  question: {
    question: string;
    correct_answer: string;
  };
  onNextQuestion: () => void;
}

const Question = ({
  question,
  onNextQuestion,
}: QuestionProps): ReactElement => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null); // Specify the type of userAnswer
  const [answerMessage, setAnswerMessage] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // Check if the user's answer is correct and handle accordingly
    const isCorrect = userAnswer === question.correct_answer;

    if (isCorrect) {
      setAnswerMessage("Your answer is correct");
      setScore((prevState) => prevState + 1);
    } else {
      setAnswerMessage("Your answer is incorrect");
    }
    // You can implement your logic here, e.g., display a message or update the score.

    setUserAnswer(null);

    // Move to the next question
    onNextQuestion();
  };

  return (
    <div className="question">
      <div className="score"> {score}</div>

      <h2>{question.question}</h2>
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
      {answerMessage && <p>{answerMessage}</p>}
    </div>
  );
};

export default Question;
