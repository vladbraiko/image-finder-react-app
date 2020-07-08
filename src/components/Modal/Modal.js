import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Proptypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onKeyDown);
  }

  render() {
    const { children, onBackdropClick } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={onBackdropClick}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: Proptypes.element.isRequired,
  onBackdropClick: Proptypes.func.isRequired,
};

export default Modal;
