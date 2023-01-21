import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = responce => {
    this.setState(prevState => {
      return { [responce]: prevState[responce] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = responce => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[responce];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        {total !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage('good')}
            />
          </Section>
        )}
        {total === 0 && <Notification message="There is no feedback" />}
      </>
    );
  }
}
