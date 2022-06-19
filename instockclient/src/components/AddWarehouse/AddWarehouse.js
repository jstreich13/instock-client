import { Component } from "react";
import "./AddWarehouse.scss";
import axios from "axios";

class AddWarehouse extends Component {
  state = {};

  render() {
    return (
      <section className="addWarehouse">
        <h1 className="addWarehouse__title">Add New Warehouse</h1>

        <div className="addWarehouse__warehouse">
          <h2 className="addWarehouse__subtitle">Warehouse Details</h2>

          <label className="addWarehouse__label">Warehouse Name</label>
          <input
            className="addWarehouse__input"
            id="name"
            name="name"
            type="text"
            placeholder="Warehouse Name"
          />

          <label className="addWarehouse__label">Street Address</label>
          <input
            className="addWarehouse__input"
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
          />

          <label className="addWarehouse__label">City</label>
          <input
            className="addWarehouse__input"
            id="city"
            name="city"
            type="text"
            placeholder="City"
          />

          <label className="addWarehouse__label">Country</label>
          <input
            className="addWarehouse__input"
            id="country"
            name="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="addWarehouse__contacts">
          <h2 className="addWarehouse__subtitle">Contact Details</h2>

          <label className="addWarehouse__label">Contact Name</label>
          <input
            className="addWarehouse__input"
            id="contact"
            name="contact"
            type="text"
            placeholder="Contact Name"
          />

          <label className="addWarehouse__label">Position</label>
          <input
            className="addWarehouse__input"
            id="position"
            name="position"
            type="text"
            placeholder="Position"
          />

          <label className="addWarehouse__label">Phone Number</label>
          <input
            className="addWarehouse__input"
            id="number"
            name="number"
            type="text"
            placeholder="Phone Number"
          />

          <label className="addWarehouse__label">Email</label>
          <input
            className="addWarehouse__input"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="addWarehouse__submit">
          <button className="addWarehouse__button">Cancel</button>
          <button className="addWarehouse__button">+ Add Warehouse</button>
        </div>
      </section>
    );
  }
}

export default AddWarehouse;
