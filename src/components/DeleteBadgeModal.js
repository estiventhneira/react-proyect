import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.modal} onClose={props.onCloseModal}>
      <div className="Delete__Modal">
        <h1>Are you sure?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla illo,
          eos ipsa consequuntur inventore quaerat.
        </p>
        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
          Delete Badge
        </button>
        <button onClick={props.onCloseModal} className="btn btn-primary">
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
