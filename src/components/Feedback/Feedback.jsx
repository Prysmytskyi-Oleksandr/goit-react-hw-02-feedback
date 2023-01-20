import { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
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
      <div className={styles.wrapper}>
        <h2>Please leave feedback</h2>
        <div className={styles.wrapper_btn}>
          <button
            type="button"
            className={styles.btn}
            onClick={() => this.addFeedback('good')}
          >
            Good
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={() => this.addFeedback('neutral')}
          >
            Neutral
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={() => this.addFeedback('bad')}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className={styles.wrapper_stat}>
          <p className={styles.value}>Good: {good}</p>
          <p className={styles.value}>Neutral: {neutral}</p>
          <p className={styles.value}>Bad: {bad}</p>
          <p className={styles.value}>Total: {total}</p>
          <p className={styles.value}>
            Positive feedback : {this.countPositiveFeedbackPercentage('good')}%
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
