import React from 'react'
import './WarehouseInventoryList.scss'
import inventory from '../../Assets/JSON Data/inventories.json'
import deleteIcon from '../../Assets/Icons/delete_outline-24px.svg'
import editIcon from '../../Assets/Icons/edit-24px.svg'

function WarehouseInventoryList() {
    console.log(inventory);

  return (
   <section>
    {inventory.map(data =>{
        return(
            <section>
            <div key={data.id}>
                <h4>INVENTORY</h4>
                <p>{data.itemName}</p>
            </div>
            <div>
                <h4>STATUS</h4>
                <p>{data.status}</p>
            </div>
            <div>
                <h4>CATEGORY</h4>
                <p>{data.category}</p>
            </div>
            <div>
                <h4>QTY</h4>
                <p>{data.quantity}</p>
            </div>
            <div>
                <img src={deleteIcon} alt='Delete Item'/>
                <img src={editIcon} alt='Edit Icon'/>
            </div>
            </section>
        )
    })}
   </section>
       
  )
}

export default WarehouseInventoryList