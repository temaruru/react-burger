import React, { useEffect } from "react";
import * as ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('react-modal');

const ModalElement = (props) => {
  useEffect(() => {
    document.addEventListener('keydown', onPressKey);

    return () => {
      document.removeEventListener('keydown', onPressKey);
    }
  });

  function closeModal() {
    props.setVisibilityModal(false);
  }

  const onPressKey = ({ key }) => {
    if (key === 'Escape') {
      closeModal();
    }
  }

  return (
    <ModalOverlay onClick={closeModal}>
      <div className={`${styles.modal} p-10`} onClick={event => event.stopPropagation()}>
        <header className={styles.header}>
          <p className="text text_type_main-large">
            {props.title}
          </p>
          <span className={styles.icon}>
            <CloseIcon onClick={closeModal} type="primary" />
          </span>
        </header>
        {props.children}
      </div>
    </ModalOverlay>
  )
}

const Modal = (props) => (
  ReactDOM.createPortal(<ModalElement {...props} />, modalRoot)
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityModal: PropTypes.func.isRequired,
}

export default Modal;