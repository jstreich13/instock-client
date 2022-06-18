import "./WarehouseList.scss";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import garbage from "../../Assets/Icons/delete_outline-24px.svg";
import edit_pen from "../../Assets/Icons/edit-24px.svg";
import chevron from "../../Assets/Icons/chevron_right-24px.svg";
import sort from "../../Assets/Icons/sort-24px.svg";
import DeleteWarehouseModal from "../DeleteWarehouseModal/DeleteWarehousehouseModal";
class WarehouseList extends Component {
  state = {
    warehouseData: [],
    modal: false,
    deleteId: ""
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

  handleModal = (deleteId) => {
    this.setState({
      modal: !this.state.modal,
      deleteId: deleteId
    })
  }

  handleDelete = async () => {
    await axios.delete(`http://localhost:8080/warehouses/${this.state.deleteId}/delete`
    );
    this.handleModal();
    this.getWarehouseList();
  }

  render() {
    return (
      <div className="warehouses-wrap">
<<<<<<< HEAD
      <div className="warehouses">
=======
        <div className="warehouses">
          <div className="wareheader">
            <h1 className="wareheader__title">Warehouses</h1>
            <input className="wareheader__search" placeholder="Search..." />
            <button className="wareheader__add-btn">+ Add New Warehouse</button>
          </div>
>>>>>>> develop

          <ul className="labels">
            <li className="labels__item">
              WAREHOUSE
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="labels__item">
              ADDRESS
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="labels__item">
              CONTACT NAME
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="labels__item">
              CONTACT INFORMATION
              <img className="labels__icon" src={sort} alt="sort icon"></img>
            </li>
            <li className="labels__item">ACTIONS</li>
          </ul>

          <div className="list">
            {this.state.warehouseData.map((warehouse) => (
              <div className="list__item">
                <div className="list__info">
                  <div className="list__supergrouping">
                    <div className="list__grouping">
                      <p className="list__subtitle">WAREHOUSE</p>
                      <NavLink
                        className="list__link"
                        to={`/warehouses/${warehouse.id}`}>
                        <p className="list__warelink">{warehouse.name}</p>
                        <img
                          className="list__chevron"
                          src={chevron}
                          alt="warehouse link"
                        ></img>
                      </NavLink>
                    </div>

                    <div className="list__grouping">
                      <p className="list__subtitle">ADDRESS</p>
                      <p className="list__text">
                        {warehouse.address}, <br></br>
                        {warehouse.city}, {warehouse.country}
                      </p>
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
                  <img className="list__icons" src={garbage} alt="delete icon" onClick={()=> this.handleModal(warehouse.id)}/>
                  <img className="list__icons" src={edit_pen} alt="edit icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {this.state.modal && this.state.modal === true ? (
          <DeleteWarehouseModal
            warehouseData={this.state.warehouseData}
            handleModal={this.handleModal}
            deleteHandler={this.handleDelete}
            deleteId={this.state.deleteId}
          />
        ) : (
          <></>
        )}
      </div>
      </div>
    );
  }
}

export default WarehouseList;
