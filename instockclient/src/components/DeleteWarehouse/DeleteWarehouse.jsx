import React, { Component } from "react";
import "./DeleteWarehouse.scss";
import Popup from "reactjs-delete-modal";
import Trash from "../../Assets/Icons/delete_outline-24px.svg";
import axios from "axios";

class DeleteWarehouse extends Component {
  refreshPage = () => {
    window.location.reload();
  };

  deleteWarehouse = () => {
    axios
      .delete(
        `http://localhost:8080/warehouses//warehouses/${this.props.warehouseId}`
      )
      .then((response) => {
        this.refreshPage();
      });
  };

  render() {
    return (
      //   <Popup
      //
      ////===INSERT MODAL HERE?===
      <div className="delete-modal">
        <button className="delete-modal__close" onClick={close}>
          &times;
        </button>
        <div className="delete-modal__text">
          <h1 className="delete-modal__title">
            {" "}
            Delete {this.props.name} warehouse?{" "}
          </h1>
          <p className="delete-modal__content">
            Would you really like to delete {this.props.name} from warehouses?
            (This action cannot be undone.)
          </p>
        </div>
        <div className="delete-modal__actions">
          <button
            className="delete-modal__button-cancel"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </button>
          <button
            className="delete-modal__button-delete"
            onClick={this.deleteWarehouse}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  //   </Popup>
}
