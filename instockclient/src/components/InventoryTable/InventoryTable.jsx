import sortIcon from "../../assets/images/icons/sort-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./InventoryList.scss";
import trash from "../../Assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../Assets/Icons/edit-24px.svg";
import { NavLink } from "react-router-dom";
import chevron from "../../Assets/Icons/chevron_right-24px.svg";
import sort from "../../Assets/Icons/sort-24px.svg";
import "./InventoryList.scss";

export default class InventoryList extends Component {
  state = {
    inventoryData: [],
  };

  componentDidMount() {
    this.getInventoryList();
  }

  getInventoryList() {
    axios
      .get("http://localhost:8080/inventory/")
      .then((res) => {
        this.setState({
          inventoryData: res.data,
        });
      })
      .catch((err) => {
        console.log("error getting inventory data");
      });
  }

  render() {
    return (
      <div className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header-title">INVENTORY</h1>
          <input className="inventory__header-search" placeholder="Search..." />
          <button className="inventory__header-addbtn">+ Add New Item</button>
        </div>

        <ul className="inventory__list-labels">
          <li className="inventorylabels__item">
            INVENTORY{" "}
            <img className="labels__icon" src={sort} alt="sort icon"></img>
          </li>
          <li className="inventorylabels__item">
            ADDRESS{" "}
            <img className="labels__icon" src={sort} alt="sort icon"></img>
          </li>
          <li className="inventorylabels__item">
            CONTACT NAME{" "}
            <img className="labels__icon" src={sort} alt="sort icon"></img>
          </li>
          <li className="inventorylabels__item">
            CONTACT INFORMATION{" "}
            <img className="labels__icon" src={sort} alt="sort icon"></img>
          </li>
          <li className="inventorylabels__item">ACTIONS </li>
        </ul>

        <div className="inventory-list">
          {this.state.inventoryData.map((inventory) => {
            return (
              <div className="inventory-list__item">
                <div className="inventory-list__info">
                  <div className="inventory-list__supergrouping">
                    <div className="inventory-list__grouping">
                      <p className="inventory-list__subtitle">INVENTORY</p>
                      <NavLink
                        className="inventory-list__link"
                        to={`/inventory/${inventory.id}`}
                      >
                        <p className="inventory-list__inventory-link">
                          {inventory.name}
                        </p>
                        <img
                          className="inventory-list__chevron"
                          src={chevron}
                          alt="inventory link"
                        />
                      </NavLink>
                    </div>

                    <div className="inventory-list__grouping">
                      <p className="inventory-list__subtitle">CATEGORY</p>
                      <p className="inventory-list__text">
                        {inventory.category}
                      </p>
                    </div>
                  </div>

                  <div className="inventory-list__supergrouping">
                    <div className="inventory-list__grouping">
                      <p className="inventory-list__subtitle">STATUS</p>
                      <p className="inventory-list__text">{inventory.status}</p>
                    </div>

                    <div className="inventory-list__grouping">
                      <p className="inventory-list__subtitle">QTY</p>
                      <p className="inventory-list__text">
                        {inventory.quantity}
                      </p>
                    </div>
                    <div className="inventory-list__grouping">
                      <p className="inventory-list__subtitle">WAREHOUSE</p>
                      <p className="inventory-list__text">
                        {inventory.warehouse}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inventory-list__actions">
                  <img
                    className="inventory-list__icons"
                    src={trash}
                    alt="delete icon"
                  />
                  <img
                    className="inventory-list__icons"
                    src={edit_icon}
                    alt="edit icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
