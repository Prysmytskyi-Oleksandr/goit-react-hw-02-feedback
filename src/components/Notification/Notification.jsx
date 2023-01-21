import style from './notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={style.notification}> {message}</p>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
