import "./InventoryHeader.scss";
import { Link } from "react-router-dom";
import SearchIcon from "../../../../Assets/Icons/search-24px.svg";

export default function InventoryHeader() {}
return (
  <section className="inventory-header">
    <p className="inventory-header__text">Inventory</p>
    <div className="inventory-header__search-container">
      <p className="inventory-header__search-text">Search...</p>
      <img className="inventory-header__search-image" src={SearchIcon} />
    </div>
    <div className="inventory-header__item-button">
      <p className="inventory-header__item-button--text">+Add New Item</p>
    </div>
  </section>
);
