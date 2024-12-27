import { useState } from "react";
import { QuizQuestion } from "../types/quiz";

interface QuizComponentProps {
	question: QuizQuestion;
	onAnswer: (isCorrect: boolean) => void;
	questionNumber: number;
	totalQuestions: number;
}

export default function QuizComponent({ question, onAnswer, questionNumber, totalQuestions }: QuizComponentProps) {
	const [selectedWord, setSelectedWord] = useState<string | null>(null);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

	const handleWordClick = (word: string) => {
		const correct = word.toLowerCase() === question.correctSynonym.toLowerCase();
		setSelectedWord(word);
		setIsCorrect(correct);
		setTimeout(() => {
			onAnswer(correct);
			setSelectedWord(null);
			setIsCorrect(null);
		}, 1500);
	};

	return (
		<div>
			<p className="mb-4 text-lg font-semibold">
				Spørsmål {questionNumber} av {totalQuestions}
			</p>
			<p className="mb-6 text-gray-600">
				Klikk på synonymer for: <strong>{question.targetWord}</strong>
			</p>

			<div className="mb-6">
				{question.paragraph.split(" ").map((word, index) => (
					<span key={index} className={`cursor-pointer px-1 py-0.5 rounded ${selectedWord === word ? (isCorrect ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800") : "hover:bg-gray-100"}`} onClick={() => handleWordClick(word)}>
						{word}{" "}
					</span>
				))}
			</div>
			{isCorrect !== null && <div className={`text-center font-bold text-lg ${isCorrect ? "text-green-600" : "text-red-600"}`}>{isCorrect ? "Correct!" : "Incorrect!"}</div>}
		</div>
	);
}
