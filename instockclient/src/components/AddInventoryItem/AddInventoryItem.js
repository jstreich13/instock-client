import "./AddInventoryItem.scss";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import back from "../../Assets/Icons/arrow_back-24px.svg";
import axios from "axios";

class AddInventoryItem extends Component {
  state = {
    itemName: "",
    description: "",
    category: "",
    categoryValues: [
      {
        label: "Electronics",
      },
      {
        label: "Gear",
      },
      {
        label: "Apparel",
      },
      {
        label: "Accessories",
      },
      {
        label: "Health",
      },
    ],
    status: "",
    warehouseName: "",
    quantity: "",
    nameError: false,
    descriptionError: false,
    statusError: false,
    quantityError: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const warehouseName = this.state.warehouseName;
    const itemName = this.state.itemName;
    const description = this.state.description;
    const category = this.state.category;
    const status = this.state.status;
    const quantity = status === "Out of Stock" ? 0 : this.state.quantity;

    if (itemName && description && status && quantity) {
      axios
        .post("http://localhost:8080/inventory", {
          warehouseName,
          itemName,
          description,
          category,
          status,
          quantity,
        })
        .then((res) => {
          alert(`${e.target.name.value} has been submitted as a new item`);
          e.target.reset();
        })
        .catch((err) => {
          alert("Unable to add new item, please try again.");
        });
    } else {
      if (!itemName) this.setState({ nameError: true });
      if (!description) this.setState({ descriptionError: true });
      if (!status) this.setState({ statusError: true });
      if (!quantity) this.setState({ quantityError: true });
    }
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      
    })
  }

  handleName = (e) => {
    this.setState({ itemName: e.target.value });
  };

  handleDescr = (e) => {
    this.setState({ description: e.target.value });
  };

  handleCat = (e) => {
    this.setState({ category: e.target.value });
  };

  handleStatus = (e) => {
    this.setState({ status: e.target.value });
  };

  handleWare = (e) => {
    this.setState({ warehouseName: e.target.value });
  };

  handleQuan = (e) => {
    this.setState({ quantity: e.target.value });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/warehouses")
      .then((res) => {
        this.setState({
          warehouseList: res.data.map((warehouse) => {
            return {
              label: warehouse.name,
            };
          }),
        });
      })
      .catch((res) => console.log(res));
  }

  render() {
    return (
      <div className="add-item-wrap">
        <div className="add-item">
          <div className="compheader">
            <NavLink className="compheader__link" to={"/inventory"}>
              <img className="compheader__icon" src={back}></img>
            </NavLink>
            <h1 className="compheader__title">Add New Inventory Item</h1>
          </div>
          <form
            className="add-item__form"
            id="add-item-form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <div className="add-item__form-info">
              <section className="add-item__form-section">
                <h2 className="add-item__form-title">Item Details</h2>

                <div className="add-item__input-wrap">
                  <label className="add-item__label">Item Name</label>
                  <input
                    className={
                      !this.state.nameError
                        ? "add-item__input"
                        : "add-item__input error"
                    }
                    name="itemName"
                    placeholder="Item Name"
                    onChange={this.changeHandler}
                  ></input>
                </div>

                <div className="add-item__input-wrap">
                  <label className="add-item__label">Description</label>
                  <textarea
                    className={
                      !this.state.descriptionError
                        ? "add-item__textarea"
                        : "add-item__textarea error"
                    }
                    name="description"
                    placeholder="Please enter a brief item description..."
                  ></textarea>
                </div>

                <div className="add-item__input-wrap">
                  <label className="add-item__label">Category</label>
                  <select
                    className="add-item__dropdown"
                    onChange={this.handleCategory}
                    value={this.state.category}
                    name="category"
                  >
                    {this.state.categoryValues.map((option, index) => (
                      <option
                        className="edit-inv-item-form__option"
                        key={index}
                        value={option.label}
                      >
                        {option.label}
                      </option>
                    ))}
                    ;
                  </select>
                </div>
              </section>
              <section className="add-item__form-section add-item__form-section--availability">
                <h2 className="add-item__form-title">Item Availability</h2>
                <div className="add-item__input-wrap">
                  <label
                    className={
                      !this.state.statusError
                        ? "add-item__label"
                        : "error-status"
                    }
                  >
                    Status
                  </label>
                  <div className="add-item__radio-wrapper">
                    <div className="add-item__radio-group">
                      <input
                        type="radio"
                        id="instock"
                        value="In Stock"
                        name="status"
                        checked={this.state.status === "In Stock"}
                        onChange={this.handleStatus}
                      />
                      <label
                        className="add-item__radio-label"
                        htmlFor="instock"
                      >
                        In stock
                      </label>
                    </div>
                    <div className="add-item__radio-group">
                      <input
                        type="radio"
                        id="outstock"
                        value="Out of Stock"
                        name="status"
                        checked={this.state.status === "Out Of Stock"}
                        onChange={this.handleStatus}
                      />
                      <label
                        className="add-item__radio-label"
                        htmlFor="outstock"
                      >
                        Out of stock
                      </label>
                    </div>
                  </div>
                </div>
                <div className="add-item__input-wrap">
                  <label className="add-item__label">Quantity</label>
                  <input
                    className={
                      !this.state.quantityError
                        ? "add-item__input"
                        : "add-item__input error"
                    }
                    name="quantity"
                  ></input>
                </div>
                <div className="add-item__input-wrap">
                  <label className="add-item__label">Warehouse</label>
                  <select
                    className="add-item__dropdown"
                    defaultValue={this.state.warehouse}
                  >
                    {this.state.warehouseList?.map((option, index) => (
                      <option
                        className="add-item__dropdown-item"
                        key={index}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
            </div>
            <div className="add-item__buttons">
              <NavLink to={"/inventory"}> <button className="add-item__btn add-item__btn--cancel">
                Cancel
              </button></NavLink>
              <button
                type="submit"
                form="add-item-form"
                className="add-item__btn"
              >
                + Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddInventoryItem;
