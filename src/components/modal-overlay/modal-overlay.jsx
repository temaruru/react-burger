import React from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={styles.background} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ModalOverlay;