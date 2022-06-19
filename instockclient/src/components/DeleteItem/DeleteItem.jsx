// import React, { Component } from "react";
// import "./DeleteInventory.scss";
// import Trash from "../../../instockclient/src/Assets/Icons/delete_outline-24px.svg";
// import axios from "axios";

// class DeleteInventory extends Component {
//   refreshPage = () => {
//     window.location.reload();
//   };

//   deleteInventory = () => {
//     axios
//       .delete(`http://localhost:8080/inventories/${this.props.id}`)
//       //==INVENTORY or INVENTORIES??
//       .then((response) => {
//         this.refreshPage();
//       });
//   };

//   render() {
//     return (
//       /////// INSERT MODAL HERE
//       //   <Popup
//       //     trigger={
//       //       <input
//       //
//       //       ></input>
//       //     }
//       //     delete-modal
//       //
//       //   >
//       <div className="delete-modal">
//         <button className="delete-modal__close" onClick={close}>
//           &times;
//         </button>
//         <div className="delete-modal__text">
//           <h1 className="delete-modal__title">
//             {" "}
//             Delete {this.props.itemName} inventory item?{" "}
//           </h1>
//           <p className="delete-modal__content">
//             Would you really like to delete {this.props.itemName} from
//             inventory? (This action cannot be undone.)
//           </p>
//         </div>
//         <div className="delete-modal__actions">
//           <button
//             className="delete-modal__button-cancel"
//             onClick={() => {
//               close();
//             }}
//           >
//             Cancel
//           </button>
//           <button
//             className="delete-modal__button-delete"
//             onClick={this.deleteInventory}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default DeleteInventory;
