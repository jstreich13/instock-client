import React from "react";
import "./DeleteWarehouseModal.scss";
import close from "../../Assets/Icons/close-24px.svg";

function DeleteWarehouseModal(props) {
  return (
    <div className="modal">
      <img
        className="modal__closewindow" src={close} onClick={props.hideModal} />
      <section className="modal__content">
        <div className="modal__info">
          <h2 className="modal__title">Delete {props.name} warehouse?</h2>
          <p className="modal__text"> Please confirm that you'd like to delete {props.name} from the list
            of warehouses. You won't be able to undo this action.</p>
        </div>
        <div className="modal__buttons">
          <button className="modal__cancel" onClick={props.hideModal}>Cancel</button>
          <button className="modal__delete" onClick={props.delete}>Delete</button>
        </div>
      </section>
    </div>
  );
}

export default DeleteWarehouseModal;
