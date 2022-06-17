import React from "react";
import "./WarehouseInventoryList.scss";
import inventory from "../../Assets/JSON Data/inventories.json";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrow from "../../Assets/Icons/chevron_right-24px.svg";

function WarehouseInventoryList() {
  console.log(inventory);

  return (
    <section className="list">
      {inventory.map((data) => {
        return (
          <section className="list__container">
            <div className="list__group">
              <div className="list__inventory-container" key={data.id}>
                <p className="list__title">INVENTORY ITEM</p>
                <p className="list__inventory">{data.itemName} <img className="list__inventory-arrow" src={arrow} alt=""/></p>
              </div>
              <div className="list__status-container">
                <p className="list__title">STATUS</p>
                <p className="list__status">{data.status}</p>
              </div>
            </div>
            <div className="list__group">
              <div className="list__category-container">
                <p className="list__title">CATEGORY</p>
                <p className="list__category">{data.category}</p>
              </div>
              <div className="list__quantity-container">
                <p className="list__title">QTY</p>
                <p className="list__quantity">{data.quantity}</p>
              </div>
            </div>
            <div className="list__image-container">
              <img className="list__image" src={deleteIcon} alt="Delete Item" />
              <img className="list__image" src={editIcon} alt="Edit Icon" />
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default WarehouseInventoryList;
