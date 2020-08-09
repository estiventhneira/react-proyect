import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(<h1>Hola</h1>, document.getElementById("modal"));
}

export default Modal;
