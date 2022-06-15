import { Link } from "react-router-dom";
import "./SingleVideo.scss";
import "./InventoryItem/scss";
import rightArrow from "../../assets/images/icons/chevron_right-24px.svg";
import iconEdit from "../../assets/images/icons/edit-24px.svg";
import InventoryDelete from "../../components/InventoryDelete/InventoryDelete";
import "./InventoryList.scss";
import search from "../../assets/icons/search-24px.svg";
import InventoryItem from "../InventoryItem/InventoryItem";
import sort from "../../assets/icons/sort-24px.svg";

// //the component which builds one iem item in the parent InventoryTable list/container

export default function InventoryList({
  inventoryInfo,
  currentlyOpen,
  modalOpen,
  ModalClose,
  idSelected,
}) {
  return (
    <div className="inventory-list__container">
      <div className="inventory-list__subheader">
        <h1 className="inventory-list__title">Inventory</h1>
        <div className="inventory-list__search">
          <input
            className="inventory-list__searchbar"
            type="text"
            placeholder="Search..."
          ></input>
          <img
            className="inventory-list__searchicon"
            src={search}
            alt="search icon"
          />
          <Link to={"/addingInventory"} className="inventory-list__add--link">
            <button className="inventory-list__button">+ Add New Item</button>
          </Link>
        </div>
      </div>
      <ul className="inventory__tablet-list">
        <li className="inventory__tablet-list--title">
          <h3>INVENTORY ITEM</h3>
          <img className="inventory__tablet-icon" src={sort} alt="sort" />
        </li>
        <li className="inventory__tablet-list--title">
          <h3>CATEGORY</h3>
          <img className="inventory__tablet-icon" src={sort} alt="sort" />
        </li>
        <li className="inventory__tablet-list--title">
          <h3>STATUS</h3>
          <img className="inventory__tablet-icon" src={sort} alt="sort" />
        </li>
        <li className="inventory__tablet-list--title">
          <h3>QTY</h3>
          <img className="inventory__tablet-icon" src={sort} alt="sort" />
        </li>
        <li className="inventory__tablet-list--title">
          <h3>WAREHOUSE</h3>
          <img className="inventory__tablet-icon" src={sort} alt="sort" />
        </li>
        <li className="inventory__tablet-list--title">ACTIONS</li>
      </ul>

      {inventoryInfo.map((data) => {
        return (
          <InventoryItem
            key={data.id}
            id={data.id}
            warehouse={data.warehouseName}
            item={data.itemName}
            category={data.category}
            status={data.status}
            qty={data.quantity}
            modalOpen={modalOpen}
            ModalClose={ModalClose}
            currentlyOpen={currentlyOpen}
            idSelected={idSelected}
          />
        );
      })}
    </div>
  );
}

// export default function SingleVideo({ currentVideo, videos }) {
//   console.log(currentVideo);
//   return (
//     <>
//       {videos
//         .filter((vid) => vid.id !== currentVideo.id)
//         .map((video) => {
//           return (
//             <Link key={video.id} to={"/videos/" + video.id}>
//               <li className="single-videos">
//                 <img
//                   className="next-videos__image"
//                   src={video.image}
//                   alt={video.title}
//                 />
//                 <div className="nextvideos__details">
//                   <h3 className="next-videos__title">{video.title}</h3>
//                   <p className="next-videos__publisher">{video.channel}</p>
//                 </div>
//               </li>
//             </Link>
//           );
//         })}
//     </>
//   );
// }
