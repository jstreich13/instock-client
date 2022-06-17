import "./AddInventoryItem.scss";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import back from "../../Assets/Icons/arrow_back-24px.svg"

class AddInventoryItem extends Component {
    state = {
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

  render() {
    return (
    <div className="add-item">
        <div className="compheader">
            <NavLink className="compheader__link" to={"/inventory"}>
                <img className="compheader__icon" src={back}></img>
            </NavLink>
            <h1 className="compheader__title">Add New Inventory Item</h1>
        </div>
        <form className="add-item__form">
            <section className="add-item__form-section">
                <h2 className="add-item__form-title">Item Details</h2>

                <div className="add-item__input-wrap">
                    <label className="add-item__label">Item Name</label>
                    <input className="add-item__input" placeholder="Item Name"></input>
                </div>

                <div className="add-item__input-wrap">
                    <label className="add-item__label">Description</label>
                    <textarea className="add-item__textarea" placeholder="Please enter a brief item description..."></textarea>
                </div>

                <div className="add-item__input-wrap">
                    <label className="add-item__label">Category</label>
                    <select className="add-item__dropdown">
                        <option value="Electronics">Electronics</option>
                        <options value="Gear">Gear</options>
                        <options value="Apparel">Apparel</options>
                        <options value="Health">Health</options>
                    </select>
                </div>
            </section>
            <section className="add-item__form-section">
                <h2 className="add-item__form-title">Item Availability</h2>
                <div className="add-item__input-wrap">
                    <label className="add-item__label">Status</label>
                    <div className="add-item__radio-wrapper">
                        <div className="add-item__radio-group">
                            <input type="radio" id="instock" name="stock"/>
                            <label className="add-item__radio-label" for="instock">In stock</label>
                        </div>
                        <div className="add-item__radio-group">
                            <input type="radio" id="outstock" name="stock"/>
                            <label className="add-item__radio-label" for="outstock">Out of stock</label>
                        </div>
                    </div>
                </div>

                <div className="add-item__input-wrap">
                    <label className="add-item__label">Quantity</label>
                    <input  className="add-item__input" ></input>
                </div>

                <div className="add-item__input-wrap">
                    <label className="add-item__label">Warehouse</label>
                    <select className="add-item__dropdown">
                        <option value="Electronics">Electronics</option>
                        <options value="Gear">Gear</options>
                        <options value="Apparel">Apparel</options>
                        <options value="Health">Health</options>
                    </select>
                </div>
                <div className="add-item__buttons">
                <button className="add-item__btn add-item__btn--cancel">Cancel</button>
                <button className="add-item__btn">+ Add Item</button>
            </div>
            </section>
        </form>
    </div>
    )}
}
export default AddInventoryItem;
