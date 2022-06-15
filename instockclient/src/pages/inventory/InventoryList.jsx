import Header from "";
import Footer from "";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryTable";
import "./InventoryList.scss";

// const listInventory = 'api server?';

import "./InventoryList.scss";
import { Component } from "react";
import NavLink from "react-router-dom";

export default class InventoryList extends Component {
  state = {
    inventoryData: [],
  };

  componentDidMount() {
    //getting InventoryData
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

        <div className="inventory__list-labels"></div>

        <div className="inventory__list">
          {this.state.inventoryData.map((warehouse) => (
            <div className="inventory__list-item">
              <p>INVENTORY</p>
              <NavLink></NavLink>
              <p>{inventory.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
