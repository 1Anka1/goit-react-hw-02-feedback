import { Component } from 'react'
import css from './Statistics.module.css';

export default class Statistics extends Component {
    render() {
        return (
            <><h2>Statistics</h2>
                <div>
                    <p>Good: </p>
                    <p>Neutral:</p>
                    <p>Bad: </p>
                    <p>Total: </p>
                    <p>Positive Feedback: </p>
            </div></>

    )
}
}