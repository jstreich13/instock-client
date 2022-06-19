import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import trash from "../../Assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../Assets/Icons/edit-24px.svg";
import { NavLink } from "react-router-dom";
import chevron from "../../Assets/Icons/chevron_right-24px.svg";
import sort from "../../Assets/Icons/sort-24px.svg";
import "./InventoryTable.scss";
import DeleteItem from "../DeleteItem/DeleteItem";

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
      <div className="header-wrapper">
        <div className="inventory">
          <div className="inventory__header">
            <h1 className="inventory__header-title">Inventory</h1>
            <input
              className="inventory__header-search"
              placeholder="Search..."
            />
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
              STATUS{" "}
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="inventorylabels__item">
              QTY{" "}
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="inventorylabels__item">
              WAREHOUSE{" "}
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="inventorylabels__item">ACTIONS </li>
          </ul>

          <div className="inventory-list">
            {this.state.inventoryData?.map((inventory) => {
              console.log(inventory);
              return (
                <div className="inventory-list__item">
                  <div className="inventory-list__info">
                    <div className="inventory-list__supergroups">
                      <div className="inventory-list__groups">
                        <p className="inventory-list__subtitles">INVENTORY</p>
                        <NavLink
                          className="inventory-list__link"
                          to={`/inventory/${inventory.id}`}
                        >
                          <p className="inventory-list__inventory-link">
                            {inventory.itemName}
                          </p>
                          <img
                            className="inventory-list__chevron"
                            src={chevron}
                            alt="inventory link"
                          />
                        </NavLink>
                      </div>
                      <div className="inventory-list__groups">
                        <div className="category-spacing">
                          <p className="inventory-list__subtitles">CATEGORY</p>
                          <p className="inventory-list__body">
                            {inventory.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="inventory-list__supergroups">
                      <div className="inventory-list__groups">
                        <p className="inventory-list__subtitles">STATUS</p>
                        {inventory.status === "In Stock" ? (
                          <p className="inventory-list__inStock">
                            {" "}
                            {inventory.status}{" "}
                          </p>
                        ) : (
                          <p className="inventory-list__notInStock">
                            {inventory.status}
                          </p>
                        )}
                      </div>
                      <div className="inventory-list__groups">
                        <p className="inventory-list__subtitles">QTY</p>
                        <p className="inventory-list__body">
                          {inventory.quantity}
                        </p>
                      </div>
                      <div className="inventory-list__groups">
                        <p className="inventory-list__subtitles">WAREHOUSE</p>
                        <p className="inventory-list__body">
                          {inventory.warehouseName}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="inventory-list__actions">
                    <div>
                      {/* <DeleteItem key={this.state.props.id} itemName={this.state.props.itemName} /> */}
                      <img
                        className="inventory-list__icons"
                        src={trash}
                        alt="delete icon"
                      />
                    </div>
                    <img
                      className="inventory-list__icons edit-pen"
                      src={edit_icon}
                      alt="edit icon"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
