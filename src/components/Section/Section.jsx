import styles from './section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
