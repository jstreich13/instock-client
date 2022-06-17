import axios from "axios";
import { Component } from "react";
import "./InventoryItemDetails.scss";
import { Link } from "react-router-dom";
import editpage from "../../assets/icons/edit-white24px.svg";
import backarrow from "../../assets/icons/arrow_back-24px.svg";

const siteInventory = "https://alex-instock-server.herokuapp.com/inventory";

class InventoryItemDetails extends Component {
  state = {
    inDetails: [],
  };

  Id = this.props.match.params.id;

  componentDidMount() {
    axios
      .get(`${siteInventory}${this.Id}`)
      .then((response) => {
        this.setState({
          inDetails: response.data,
        });
      })
      .catch((error) => {
        console.log("There is an error: ", error);
      });
  }

  render() {
    const { inDetails } = this.state;
    const { description, itemName, category, status, quantity, warehouseName } =
      inDetails;

    return (
      <section className="item-details">
        <section className="item-details__wrap">
          <article className="item-details__header">
            <section className="item-details__subheader">
              <Link to="/inventory">
                <img
                  className="item-details__firstIcon"
                  src={backarrow}
                  alt="arrow to go back to last page"
                />
              </Link>
              <h1 className="item-details__pageheader">{itemName}</h1>
            </section>
            <Link
              className="item-details__edit-link"
              to={`/InventoryEdit/${this.Id}`}
            >
              <div className="item-details__edit">
                <img
                  className="item-details__secondIcon"
                  src={editpage}
                  alt="pencil signifying edit of page"
                />
                <p className="item-details__edit-text">Edit</p>
              </div>
            </Link>
          </article>
          <article className="item-details__mainBody">
            <article className="item-details__bodyHeader">
              <div className="item-details__description">
                <h5 className="item-details__title">ITEM DESCRIPTION:</h5>
                <p className="item-details__bodyText">{description}</p>
              </div>
              <div className="item-details__category">
                <h5 className="item-details__title">CATEGORY:</h5>
                <p className="item-details__bodyText">{category}</p>
              </div>
            </article>
            <article className="item-details__bodyContent">
              <article className="item-details__bottomHeader">
                <div className="item-details__status">
                  <h5 className="item-details__title">STATUS:</h5>
                  {status === "In Stock" ? (
                    <p className="item-details__in-stock">{status}</p>
                  ) : (
                    <p className="item-details__out-stock">{status}</p>
                  )}
                </div>
                <div className="item-details__quantity">
                  <h5 className="item-details__title">QUANTITY:</h5>
                  <p className="item-details__bodyText">{quantity}</p>
                </div>
              </article>
              <article className="item-details__warehouse">
                <h5 className="item-details__title">WAREHOUSE:</h5>
                <p className="item-details__bodyText">{warehouseName}</p>
              </article>
            </article>
          </article>
        </section>
      </section>
    );
  }
}

export default InventoryItemDetails;
