import React from 'react'
// import css from './Statistics.module.css'

export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
	return (
		<>
			<h2>Statistics</h2>
			<div>
				<p>Good: {good} </p>
				<p>Neutral: {neutral}</p>
				<p>Bad: {bad}</p>
				<p>Total: {total}</p>
				<p>Positive Feedback: {positivePercentage}</p>
			</div>
		</>
	)
}
