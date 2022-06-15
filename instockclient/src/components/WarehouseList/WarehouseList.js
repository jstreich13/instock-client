import "./WarehouseList.scss";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import garbage from "../../Assets/Icons/delete_outline-24px.svg";
import edit_pen from "../../Assets/Icons/edit-24px.svg";
import chevron from "../../Assets/Icons/chevron_right-24px.svg"
class WarehouseList extends Component {
  state = {
    warehouseData: [],
  };

  componentDidMount() {
    this.getWarehouseList();
  }

  getWarehouseList() {
    axios
      .get("http://localhost:8080/warehouses/")
      .then((res) => {
        this.setState({
          warehouseData: res.data,
        });
      })
      .catch((err) => {
        console.log("error getting warehouse data");
      });
  }

  render() {
    return (
      <div className="warehouses">

        <div className="header">
          <h1 className="header__title">Warehouses</h1>
          <input className="header__search" placeholder="Search..." />
          <button className="header__add-btn">+ Add New Warehouse</button>
        </div>

        <div className="labels">
        </div>

        <div className="list">
          {this.state.warehouseData.map((warehouse) => (
            <div className="list__item">
              <div className="list__info">
                  <div className="list__supergrouping">
                    <div className="list__grouping">
                      <p className="list__subtitle">WAREHOUSE</p>
                      <NavLink className="list__link" to={`/warehouses/${warehouse.id}`}>
                        <p className="list__warelink">{warehouse.name}</p>
                        <img className="list__chevron" src={chevron} alt="warehouse link"></img>
                      </NavLink>
                    </div>

                  <div className="list__grouping">
                    <p className="list__subtitle">ADDRESS</p>
                    <p className="list__text">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                  </div>
                </div>

                <div className="list__supergrouping">
                  <div className="list__grouping">
                    <p className="list__subtitle">CONTACT NAME</p>
                    <p className="list__text">{warehouse.contact.name}</p>
                  </div>

                  <div className="list__grouping">
                    <p className="list__subtitle">CONTACT INFORMATION</p>
                    <p className="list__text">{warehouse.contact.phone}</p>
                    <p className="list__text">{warehouse.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="list__actions">
                <img className="list__icons" src={garbage} alt="delete icon" />
                <img className="list__icons" src={edit_pen} alt="edit icon" />
              </div>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WarehouseList;
