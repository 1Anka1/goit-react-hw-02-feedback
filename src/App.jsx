import React, { Component } from 'react';

//COMPONENTS
import Section from './components/Section';
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from 'components/Statistics';

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
  }
  
  // countTotalFeedback()

  render() {
    console.log(this)
    // const { good, neutral, bad } = this.state;
		return (
			<Section title={'Task - 1 Feedback widget'}>
        <FeedbackOptions />
        <Statistics/>
      </Section>
		)
	}
}

export default App
