import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./DisplayingItem.scss";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

export default function DisplayingItem({ inventory }) {
  return (
    <>
      <div className="container__inventory">
        <ul className="inventory">
          <div className="inventory__header">
            <p>
              INVENTORY ITEM{" "}
              <img className="inventory__header-svg" src={sort} alt="sort" />{" "}
            </p>
            <p>
              CATEGORY{" "}
              <img className="inventory__header-svg" src={sort} alt="sort" />{" "}
            </p>
            <p>
              STATUS{" "}
              <img className="inventory__header-svg" src={sort} alt="sort" />{" "}
            </p>
            <p>
              QUANTITY{" "}
              <img className="inventory__header-svg" src={sort} alt="sort" />{" "}
            </p>
            <p>ACTIONS</p>
          </div>

          {inventory.map((item) => {
            return (
              <li className="inventory__list" key={uuidv4()}>
                <div className="inventory__left">
                  <div className="inventory__item">
                    <p className="inventory__subhead">INVENTORY ITEM</p>
                    <Link
                      to={`/inventory/${item.id}`}
                      className="inventory__link"
                    >
                      <p className="inventory__item-name">
                        {item.itemName}
                        <img
                          className="inventory__item-svg"
                          src={chevron}
                          alt="chevron"
                        />
                      </p>
                    </Link>
                  </div>

                  <div className="inventory__category">
                    <p className="inventory__subhead">CATEGORY</p>
                    <p>{item.category}</p>
                  </div>
                </div>

                <div className="inventory__right">
                  <div className="inventory__status">
                    <p className="inventory__subhead">STATUS</p>
                    {item.status.toLowerCase() === "in stock" ? (
                      <p className="inventory__inStock"> {item.status} </p>
                    ) : (
                      <p className="inventory__outOfStock">{item.status}</p>
                    )}
                  </div>

                  <div className="inventory__qty">
                    <p className="inventory__subhead">QTY</p>
                    <p className="inventory__quantity-num"> {item.quantity} </p>
                  </div>
                </div>

                <div className="inventory__buttons">
                  <Link to={`/inventoryDelete/${item.id}`}>
                    <img src={del} alt="delete" />
                  </Link>
                  <Link to={`/inventoryEdit/${item.id}`}>
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
