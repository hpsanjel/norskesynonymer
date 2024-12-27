import { useState, useEffect } from "react";
import { QuizQuestion } from "./types/quiz";
import { getRandomQuestions } from "./utils/quizUtils";
import QuizComponent from "./components/QuizComponent.tsx";
import ScoreBoard from "./components/ScoreBoard";

const TOTAL_QUESTIONS = 10;

function App() {
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [quizCompleted, setQuizCompleted] = useState(false);

	useEffect(() => {
		startNewQuiz();
	}, []);

	const startNewQuiz = () => {
		setQuestions(getRandomQuestions(TOTAL_QUESTIONS));
		setCurrentQuestionIndex(0);
		setScore(0);
		setQuizCompleted(false);
	};

	const handleAnswer = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setQuizCompleted(true);
		}
	};

	if (questions.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
				<h1 className="text-3xl font-bold mb-6 text-center">Synonym Quiz</h1>
				{!quizCompleted ? <QuizComponent question={questions[currentQuestionIndex]} onAnswer={handleAnswer} questionNumber={currentQuestionIndex + 1} totalQuestions={TOTAL_QUESTIONS} /> : <ScoreBoard score={score} totalQuestions={TOTAL_QUESTIONS} onReplay={startNewQuiz} />}
			</div>
		</div>
	);
}

export default App;
