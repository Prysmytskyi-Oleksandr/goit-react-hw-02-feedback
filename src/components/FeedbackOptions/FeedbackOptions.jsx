import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const listBtn = options.map(option => (
    <li key={option}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </li>
  ));

  return <ul className={styles.list_btn}>{listBtn}</ul>;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
