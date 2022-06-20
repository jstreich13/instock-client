import { Component } from "react";
import "./AddWarehouse.scss";
import axios from "axios";
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg'
import { NavLink } from "react-router-dom";

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
    }, 
    nameError: false,
    addressError: false,
    cityError: false,
    countryError: false,
    contactNameError: false,
    contactPositionError: false,
    phoneError: false,
    emailError: false,
  };

  changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleContact = (e) => {
    this.setState({
      contact:{...this.state.contact, [e.target.name]: e.target.value}});
}


  newWarehouse = (e) => {
    e.preventDefault()

     //Regular Expressions to test phone number and email
     const phoneRegEx = /^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/;
     const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

     //Test email against RegEx
     const verifyEmail = (email) => {
       return emailRegEx.test(email);
     };
 
     //Test phone number against RegEx
     const verifyPhone = (phone) => {
       return phoneRegEx.test(phone);
     };

  if(!this.state.name){
      this.setState({nameError: true});
  } 
  if(!verifyEmail(this.state.contact.email)){
      this.setState({emailError: true});
  }
  if(!verifyPhone(this.state.contact.phone)){
      this.setState({phoneError: true});
  }
  if(!this.state.address){
      this.setState({addressError: true});
  }
  if(!this.state.city){
      this.setState({cityError: true});
  }
  if(!this.state.country){
      this.setState({countryError: true});
  }
  if(!this.state.contact.name){
      this.setState({contactNameError: true});
  }
  if(!this.state.contact.position){
      this.setState({contactPositionError: true});
  }
  else{
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
}

  render() {
    return (
      <section className="addWarehouse__boxshadow">
      <div className="addWarehouse">
        <h1 className="addWarehouse__title"><img className="addWarehouse__arrow" onClick={() => window.history.back()} src={arrowIcon} alt="Arrow Back"/> Add New Warehouse</h1>
        <form className="addWarehouse__container" >
        <div className="addWarehouse__warehouse">
          <h2 className="addWarehouse__subtitle">Warehouse Details</h2>

          <div className="addWarehouse__form">
          <label className="addWarehouse__label">Warehouse Name</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="warehouse"
            name="warehouse"
            type="text"
            placeholder="Warehouse Name"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Street Address</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">City</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={this.changeHandler}
          />

          <label className="addWarehouse__label">Country</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={this.changeHandler}
          />
        </div>
        </div>
        <div className="addWarehouse__contacts">
          <h2 className="addWarehouse__subtitle">Contact Details</h2>

          <div className="addWarehouse__form">
          <label className="addWarehouse__label">Contact Name</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="name"
            name="name"
            type="text"
            placeholder="Contact Name"
            onChange={this.handleContact}
          />

          <label className="addWarehouse__label">Position</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="position"
            name="position"
            type="text"
            placeholder="Position"
            onChange={this.handleContact}
          />

          <label className="addWarehouse__label">Phone Number</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={this.handleContact}
          />

          <label className="addWarehouse__label">Email</label>
          <input
            className={`addWarehouse__input${this.state.nameError ? ' addWarehouse__input-error': ''}`}
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleContact}
          />
        </div>
        </div>
        </form>
        <div className="addWarehouse__submit">
          <NavLink to='/' className="addWarehouse__link"><button className="addWarehouse__cancel">Cancel</button></NavLink>
          <button className="addWarehouse__add" onClick={this.newWarehouse}>+ Add Warehouse</button>
        </div>
      </div>
      </section>
    );
  }
}

export default AddWarehouse;
