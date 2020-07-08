import React from 'react';
import styles from './Button.module.css';
import Proptypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default Button;
