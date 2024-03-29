"use client";
import Quiz from "../components/quiz/quiz";
import { QuizContextProvider } from "../context/quizContext";

export default function WrapperQuiz() {
  return (
    <>
      <QuizContextProvider>
        <Quiz />
      </QuizContextProvider>
    </>
  );
}
