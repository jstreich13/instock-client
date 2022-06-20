import React from "react";
import "./DeleteInventoryModal.scss";
import close from "../../Assets/Icons/close-24px.svg";

function DeleteInventoryModal(props) {

  const inventoryArr = props.inventoryData.find((item) => item.id === props.deleteId);

  return (
    <>
    <div className="modal__overlay"/>
      <div className="modal">
        <img
          className="modal__closewindow" src={close} onClick={()=> props.handleModal()} />
        <section className="modal__content">
          <div className="modal__info">
            <h2 className="modal__title">Delete {inventoryArr.itemName} inventory item?</h2>
            <p className="modal__text"> Please confirm that you'd like to delete from the inventory list. You won't be able to undo this action.</p>
          </div>
          <div className="modal__buttons">
            <button className="modal__cancel" onClick={()=> props.handleModal()}>Cancel</button>
            <button className="modal__delete" onClick={()=> props.deleteHandler(inventoryArr.id)}>Delete</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default DeleteInventoryModal;
