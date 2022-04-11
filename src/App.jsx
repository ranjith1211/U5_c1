import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
	var initial = 50;
	let ball = Math.floor(initial / 6);
	let remainder = initial % 6;
	let [score, setScore] = React.useState({
		Score: 76,
		Wicket: 2,
		Balls: `${ball}.${remainder}`,
		countball: 50,
	});
	// if (score.Wicket > 10) {
	// 	score.Wicket = 10;
	// }
	function changeSore(value) {
		setScore({
			Score: score.Score + value,
			Wicket: score.Wicket,
			Balls: score.Balls,
		});
	}

	function chagneWicket(value) {
		setScore({
			Score: score.Score,
			Wicket: score.Wicket + value,
			Balls: score.Balls,
		});
	}

	function chagneBall(value) {
		if (value == 0) {
			setScore({
				Score: score.Score,
				Wicket: score.Wicket,
				Balls: `${ball}.${remainder}`,
				countball: score.countball + value,
			});
		}
		let num = score.countball + value;
		ball = Math.floor(num / 6);
		remainder = num % 6;
		setScore({
			Score: score.Score,
			Wicket: score.Wicket,
			Balls: `${ball}.${remainder}`,
			countball: score.countball + value,
		});
	}

	return (
		<div className="App">
			<h3>India:</h3>
			<div className="banner">
				<div>
					Score: <h1 className="scoreCount">{score.Score}</h1>
				</div>
				<div>
					Wicket: <h1 className="wicketCount">{score.Wicket}</h1>
				</div>

				<div>
					Over:{' '}
					<h1 className="overCount">
						{
							// Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
							// if 1 more ball is thrown then over is now 5.0
							// you have to write logic to form this string from current ball number.
							score.Balls
						}
					</h1>
				</div>
			</div>

			<div className="addScore">
				Add Score
				{/* these buttons should add the respective amount in the score */}
				<button
					className="addScore1"
					onClick={
						score.Score > 100 ? () => changeSore(0) : () => changeSore(1)
					}
				>
					Add 1
				</button>
				<button
					className="addScore4"
					onClick={
						score.Score >= 100 ? () => changeSore(0) : () => changeSore(4)
					}
				>
					Add 4
				</button>
				<button
					className="addScore6"
					onClick={
						score.Score > 95 ? () => changeSore(0) : () => changeSore(6)
					}
				>
					Add 6
				</button>
			</div>

			<div className="addWicket">
				Add Wicket
				{/* Increase the count of wicket */}
				<button
					onClick={
						score.Score >= 100 || score.Wicket >= 10
							? () => chagneWicket(0)
							: () => chagneWicket(1)
					}
				>
					Add 1 wicket
				</button>
			</div>

			<div className="addBall">
				Add ball
				{/* Increase the total number of balls thrown here. */}
				<button
					onClick={
						score.Score >= 100 ? () => chagneBall(0) : () => chagneBall(1)
					}
				>
					Add 1
				</button>
			</div>

			<div>
				<h1 className="scoreCount">
					{score.Score >= 100 ? 'India Won' : null}
				</h1>
			</div>
		</div>
	);
}

export default App;
