import './EditInventoryItem.scss';
import { Component } from 'react';
import axios from 'axios';

class EditInventoryItem extends Component {
    state = {
        name: this.props.name,
        description: this.props.description,
        category: this.props.category, 
        status: this.props.status,
        warehouse: this.props.warehouse,
        warehouseList: null,
        categoryValues: [
            {
                label: "Electronics",
                value: "electronics"
            },
            {
                label: "Gear",
                value: "gear"
            },
            {
                label: "Apparel",
                value: 'apparel'
            },
            {
                label: "Accessories",
                value: "accessories"
            },
            {
                label: "Health",
                value: "health"
            }
        ]
    };

    componentDidMount() {
        axios.get('http://localhost:8080/warehouses')
            .then(res => {
                this.setState({warehouseList: res.data.map( warehouse => {
                    return {
                        label: warehouse.name,
                        value: warehouse.name.toLowerCase()
                    }
                })});
            })
            .catch(res => console.log(res));
    };
    


    render() {
        if(this.state.warehouseList === null){
            return(<></>)
        }
        else {return(
            <div className='edit-inventory'>
                <h1 className='edit-inventory__header'>Edit Inventory Item</h1>
                <div className='edit-inventory-holder'>
                    <div className='edit-inventory-details'>
                        <h2 className='edit-inventory-details__header'>Item Details</h2>
                        <form className='edit-inventory-details__form'>
                            <label className='edit-inventory-details__form-label'>Item Name</label>
                            <input type='text' defaultValue="temp text" ></input>
                            <label className='edit-inventory-details__form-label'>Description</label>
                            <input type='textarea' defaultValue='temp text'></input>
                            <label>Category</label>
                            <select value={this.state.category}>
                                {this.state.categoryValues.map((option, index) => (
                                    <option key={index} value={option.value}>{option.label}</option>
                                ))};
                            </select>
                        </form>
                    </div>
                    <div className='edit-inventory-holder__availability'>
                        <form>
                            <label>Status</label>
                            <input type='radio' value='In Stock' name='status'/> In Stock
                            <input type='radio' value='Out of Stock' name='status'/> Out of Stock
                            <label>Warehouse</label>
                            <select defaultValue={this.state.warehouse}>
                                    {this.state.warehouseList?.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))};
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        )
    }}
}

export default EditInventoryItem;