import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./DisplayingItem.scss";
import deleter from "../../Assets/Icons/delete_outline-24px.svg";
import edit from "../../Assets/Icons/edit-24px-copy.svg";
import sort from "../../Assets/Icons/sort-24px.svg";
import chevron from "../../Assets/Icons/chevron_right-24px.svg";
import { Component } from "react";
import axios from "axios";
import arrowBack from "../../Assets/Icons/arrow_back-24px.svg";

export default class DisplayingItem extends Component {
  state = { inventoryItem: {} };
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          inventoryItem: res.data,
        });
      })
      .catch((err) => {
        console.log("error getting inventory item");
      });
  }

  render() {
    if (this.state.inventoryItem) {
      const {
        itemName,
        id,
        status,
        quantity,
        category,
        description,
        warehouseName,
      } = this.state.inventoryItem;
      console.log(this.state.inventoryItem);
      return (
        <>
          <div className="header-wrapper">
            <div className="inv__container">
              <ul className="inv">
                {/* <div className="inv__heading">
                <p>
                  INVENTORY ITEM{" "}
                  <img className="inv__heading-img" src={sort} alt="sort" />{" "}
                </p>
                <p>
                  CATEGORY{" "}
                  <img className="inv__heading-img" src={sort} alt="sort" />{" "}
                </p>
                <p>
                  STATUS{" "}
                  <img className="inv__heading-img" src={sort} alt="sort" />{" "}
                </p>
                <p>
                  QUANTITY{" "}
                  <img className="inv__heading-img" src={sort} alt="sort" />{" "}
                </p>
                <p>ACTIONS</p>
              </div> */}
                <li className="inv__list" key={uuidv4()}>
                  <div className="inv__left-side">
                    <div className="inv__item">
                      <div className="inv__item-title">
                        <Link to={`/inventory/${id}`} className="inv__link">
                          <img
                            className="inv__item-img"
                            src={arrowBack}
                            alt="arrow"
                          />
                          <p className="inv__item-name">{itemName}</p>
                        </Link>
                        <div className="inv__buttons">
                          <Link
                            className="inv__buttons--edit-container"
                            to={`/editInventory/${id}`}
                          >
                            <img
                              className="inv__buttons--edit-icon"
                              src={edit}
                              alt="sort"
                            />
                            <p className="inv__buttons--edit">Edit</p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="inv__description">
                      <p className="inv__subheading">DESCRIPTION</p>
                      <p>{description}</p>
                    </div>

                    <div className="inv__category">
                      <p className="inv__subheading">CATEGORY</p>
                      <p>{category}</p>
                    </div>
                  </div>
                  <div className="inv__right-tablet">
                    <div className="inv__right">
                      <div className="inv__status">
                        <p className="inv__subheading">STATUS</p>
                        {status === "In Stock" ? (
                          <p className="inv__inStock"> {status} </p>
                        ) : (
                          <p className="inv__notInStock">{status}</p>
                        )}
                      </div>

                      <div className="inv__qty">
                        <p className="inv__subheading">QUANTITY</p>
                        <p className="inv__quantity-num"> {quantity} </p>
                      </div>
                    </div>
                    <div className="inv__description">
                      <p className="inv__subheading">WAREHOUSE</p>
                      <p>{warehouseName}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    } else {
      return <h3>Item Loading</h3>;
    }
    console.log(this.state.inventoryItem);
  }
}
