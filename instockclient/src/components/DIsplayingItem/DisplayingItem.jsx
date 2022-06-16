import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./DisplayingItem.scss";
import deleter from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function DisplayingItem({ inventory }) {
  return (
    <>
      <div className="inv__container">
        <ul className="inv">
          <div className="inv__heading">
            <p>
              INVENTORY ITEM{" "}
              <img className="inv__heading-img" src={sort} alt="sort" />{" "}
            </p>
            <p>
              CATEGORY{" "}
              <img className="inv__heading-img" src={sort} alt="sort" />{" "}
            </p>
            <p>
              STATUS <img className="inv__heading-img" src={sort} alt="sort" />{" "}
            </p>
            <p>
              QUANTITY{" "}
              <img className="inv__heading-img" src={sort} alt="sort" />{" "}
            </p>
            <p>ACTIONS</p>
          </div>

          {inventory.map((item) => {
            return (
              <li className="inv__list" key={uuidv4()}>
                <div className="inv__left-side">
                  <div className="inv__item">
                    <p className="inv__subheading">INVENTORY ITEM</p>
                    <Link to={`/inventory/${item.id}`} className="inv__link">
                      <p className="inv__item-name">
                        {item.itemName}
                        <img
                          className="inv__item-svg"
                          src={chevron}
                          alt="chevron"
                        />
                      </p>
                    </Link>
                  </div>

                  <div className="inv__category">
                    <p className="inv__subheading">CATEGORY</p>
                    <p>{item.category}</p>
                  </div>
                </div>

                <div className="inv__right">
                  <div className="inv__status">
                    <p className="inv__subheading">STATUS</p>
                    {item.status.toLowerCase() === "in-stock" ? (
                      <p className="inv__inStock"> {item.status} </p>
                    ) : (
                      <p className="inv__notInStock">{item.status}</p>
                    )}
                  </div>

                  <div className="inv__qty">
                    <p className="inv__subheading">QTY</p>
                    <p className="inv__quantity-num"> {item.quantity} </p>
                  </div>
                </div>

                <div className="inv__buttons">
                  <Link to={`/deleteInventory/${item.id}`}>
                    <img src={deleter} alt="delete" />
                  </Link>
                  <Link to={`/editInventory/${item.id}`}>
                    <img src={edit} alt="sort" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
