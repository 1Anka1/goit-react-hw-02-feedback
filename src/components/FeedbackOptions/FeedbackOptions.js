import { Component } from 'react'
import css from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
	render() {
		return (
			<div>
				<h1>Please leave feedback</h1>
				<div className={css.containerFeedbackButton}>
					<button>Good</button>
					<button>Neutral</button>
					<button>Bad</button>
				</div>
			</div>
		)
	}
}
