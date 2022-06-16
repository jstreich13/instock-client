import "./AddInventoryItem.scss";
import { Component } from "react";
import NavLink from "react-router-dom";
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
        <div className="add-item__header">
            <img className="add-item__icon" src={back}></img>
            <h1 className="add-item__header-title">Add New Inventory Item</h1>
        </div>
        <form className="add-item__form">
            <section className="add-item__form-section">
                <h2 className="add-item__form-title">Item Details</h2>

                <div className="add-item__input-wrap">
                    <label>Item Name</label>
                    <input placeholder="Item Name"></input>
                </div>

                <div className="add-item__input-wrap">
                    <label>Description</label>
                    <textarea placeholder="Please enter a brief item description..."></textarea>
                </div>

                <div className="add-item__input-wrap">
                    <label>Category</label>
                    <select>
                        <option value="Electronics">Electronics</option>
                        <options value="Gear">Gear</options>
                        <options value="Apparel">Apparel</options>
                        <options value="Health">Health</options>
                    </select>
                </div>
            </section>
            <section className="add-item__form-section">
                <h2 className="add-item__form-title">Item Details</h2>
                <div className="add-item__input-wrap">
                    <label>Status</label>
                    <input type="radio" id="instock" name="stock"/>
                    <label for="instock">In stock</label>
                    <input type="radio" id="outstock" name="stock"/>
                    <label for="outstock">Out of stock</label>
                </div>

                <div className="add-item__input-wrap">
                    <label>Quantity</label>
                    <input></input>
                </div>

                <div className="add-item__input-wrap">
                    <label>Warehouse</label>
                    <select>
                        <option value="Electronics">Electronics</option>
                        <options value="Gear">Gear</options>
                        <options value="Apparel">Apparel</options>
                        <options value="Health">Health</options>
                    </select>
                </div>
            </section>
            <div className="add-item__buttons">
                <button>Cancel</button>
                <button>+ Add Item</button>
            </div>
        </form>
    </div>
    )}
}
export default AddInventoryItem;
