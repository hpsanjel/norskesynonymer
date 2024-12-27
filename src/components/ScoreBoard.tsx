interface ScoreBoardProps {
	score: number;
	totalQuestions: number;
	onReplay: () => void;
}

export default function ScoreBoard({ score, totalQuestions, onReplay }: ScoreBoardProps) {
	const percentage = (score / totalQuestions) * 100;

	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold mb-4">Quiz Fullført!</h2>
			<p className="text-xl mb-2">
				Din Poengsum: {score} av {totalQuestions}
			</p>
			<p className="text-lg mb-6">Prosentandel: {percentage.toFixed(2)}%</p>
			<button className="px-4 py-2 bg-blue-600 text-white rounded-full" onClick={onReplay}>
				Spill Igjen
			</button>
			<p className="mt-4">
				&copy; <a href="http://www.harisanjel.com.np">Hari Sanjel</a>{" "}
			</p>
		</div>
	);
}
