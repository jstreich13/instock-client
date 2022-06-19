import { Component } from "react";
import "./AddWarehouse.scss";
import axios from "axios";
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg'

class AddWarehouse extends Component {
  state = {
    warehouse: '',
    address: '',
    city: '',
    country: '',
    contact: {
        name:'',
        position: '',
        phone: '',
        email:''
    }
    
  };

  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  newWarehouse = (e) => {
    e.preventDefault()
    
    axios
        .post('http://localhost:8080/warehouses',{
            name: this.state.warehouse,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            contact: {
                name: this.state.contact.name,
                position: this.state.contact.position,
                phone: this.state.contact.phone,
                email:this.state.contact.email
            } 
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  render() {
    return (
      <section className="addWarehouse">
        <h1 className="addWarehouse__title"><img src={arrowIcon} alt="Arrow Back"/> Add New Warehouse</h1>

        <div className="addWarehouse__warehouse">
          <h2 className="addWarehouse__subtitle">Warehouse Details</h2>

          <label className="addWarehouse__label">Warehouse Name</label>
          <input
            className="addWarehouse__input"
            id="warehouse"
            name="warehouse"
            type="text"
            placeholder="Warehouse Name"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Street Address</label>
          <input
            className="addWarehouse__input"
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">City</label>
          <input
            className="addWarehouse__input"
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Country</label>
          <input
            className="addWarehouse__input"
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={this.changeHandler}
          />
        </div>
        <div className="addWarehouse__contacts">
          <h2 className="addWarehouse__subtitle">Contact Details</h2>

          <label className="addWarehouse__label">Contact Name</label>
          <input
            className="addWarehouse__input"
            id="name"
            name="name"
            type="text"
            placeholder="Contact Name"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Position</label>
          <input
            className="addWarehouse__input"
            id="position"
            name="position"
            type="text"
            placeholder="Position"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Phone Number</label>
          <input
            className="addWarehouse__input"
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Email</label>
          <input
            className="addWarehouse__input"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.changeHandler}
          />
        </div>
        <div className="addWarehouse__submit">
          <button className="addWarehouse__button">Cancel</button>
          <button className="addWarehouse__button" onClick={this.newWarehouse}>+ Add Warehouse</button>
        </div>
      </section>
    );
  }
}

export default AddWarehouse;
