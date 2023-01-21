import styles from './statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <div className={styles.wrapper_stat}>
        <p className={styles.value}>Good: {good}</p>
        <p className={styles.value}>Neutral: {neutral}</p>
        <p className={styles.value}>Bad: {bad}</p>
        <p className={styles.value}>Total: {total}</p>
        <p className={styles.value}>
          Positive feedback : {positivePercentage}%
        </p>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
