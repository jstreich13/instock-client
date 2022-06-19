import { Component } from "react";
import "./WarehouseInventoryList.scss";
import deleteIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrow from "../../Assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class WarehouseInventoryList extends Component {

  state = {
    id: this.props.warehouseId,
    inventory: []
  }
  
  componentDidMount() {
    axios
      .get(`http://localhost:8080/inventories`)
        .then((response) => {

          this.setState({
            inventory: response.data
          })
        })
  }

  
  render() {
    return (
      <section className="warehouseInventoryList">
        <ul className="item">
          <li className="item__section">
            INVENTORY ITEM
            <img className="item__icons" src={sortIcon} alt="Sort Icon" />
          </li>
          <li className="item__section">
            CATEGORY
            <img className="item__icons" src={sortIcon} alt="Sort Icon" />
          </li>
          <li className="item__section">
            STATUS
            <img className="item__icons" src={sortIcon} alt="Sort Icon" />
          </li>
          <li className="item__section item__section--tablet">
            QUANTITY
            <img className="item__icons" src={sortIcon} alt="Sort Icon" />
          </li>
          <li className="item__section item__section--desktop">
            QTY <img className="item__icons" src={sortIcon} alt="Sort Icon" />
          </li>
          <li className="item__section">ACTIONS</li>
        </ul>

        <section className="list">
          {this.state.inventory.map((data) => {
            return (
              <section className="list__container">
                <div className="list__group-container">
                  <div className="list__group">
                    <div className="list__inventory-container" key={data.id}>
                      <p className="list__title">INVENTORY ITEM</p>
                      <NavLink to='' className='list__link'><p className="list__inventory">
                        {data.itemName}
                        <img
                          className="list__inventory-arrow"
                          src={arrow}
                          alt="Expand Arrow"
                        />
                      </p></NavLink>
                    </div>
                    <div className="list__category-container">
                      <p className="list__title">CATEGORY</p>
                      <p className="list__category">{data.category}</p>
                    </div>
                  </div>
                  <div className="list__group">
                    <div className="list__status-container">
                      <p className="list__title">STATUS</p>
                      {(data.status === 'In Stock' ? <p className="list__instock">{data.status}</p> : <p className="list__outofstock">{data.status}</p>)}
                    </div>
                    <div className="list__quantity-container">
                      <p className="list__title">QTY</p>
                      <p className="list__quantity">{data.quantity}</p>
                    </div>
                  </div>
                </div>
                <div className="list__image-container">
                  <img
                    className="list__image"
                    src={deleteIcon}
                    alt="Delete Item"
                  />
                  <NavLink className="list__link"to='/'><img className="list__image" src={editIcon} alt="Edit Icon" /></NavLink>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    );
  }
}

export default WarehouseInventoryList;
