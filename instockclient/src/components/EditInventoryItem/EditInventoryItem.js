import './EditInventoryItem.scss';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';

class EditInventoryItem extends Component {
    //state holds item info, values for drop downs, and error status of different input fields
    state = {
        itemId: this.props.match.params.id,
        name: null,
        description: null,
        category: null, 
        status: null,
        quantity: null,
        warehouse: null,
        warehouseList: null,
        categoryValues: [
            {
                label: "Electronics"
            },
            {
                label: "Gear"
            },
            {
                label: "Apparel"
            },
            {
                label: "Accessories"
            },
            {
                label: "Health"
            }
        ],
        nameError: false,
        descError: false,
        quantError: false
    };

    //Gets the inventory item and the list of warehouses when the component is mounted
    componentDidMount() {
        axios.get('http://localhost:8080/warehouses')
            .then(res => {
                this.setState({warehouseList: res.data.map( warehouse => {
                    return {
                        label: warehouse.name,
                    }
                })});
            })
            .catch(res => console.log(res));
        axios.get(`http://localhost:8080/inventories/${this.state.itemId}`)
            .then(res => {
                this.setState({
                    name: res.data.itemName,
                    description: res.data.description,
                    category: res.data.category,
                    status: res.data.status,
                    warehouse: res.data.warehouseName,
                    quantity: res.data.quantity
                });
            })
            .catch(res => console.log(res));
    };
    
    //change handler for radio buttons
    handleRadio = (e) => {
        this.setState({status: e.target.value});
    };;

    //change handler for name input
    handleName = (e) => {
        this.setState({name: e.target.value});
    };

    //change handler for description input
    handleDesc = (e) => {
        this.setState({description: e.target.value});
    };

    //change handler for warehouse select
    handleWarehouse = (e) => {
        this.setState({warehouse: e.target.value});
    };
    
    //change handler for category select
    handleCategory =  (e) => {
        this.setState({category: e.target.value});
    };

    //change handler for quantity
    handleQuant = (e) => {
        this.setState({quantity: e.target.value});
    }


    //event handler for submitting form
    //checks for errors in the input and if everything is good, sends the data to the backend
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name){
            this.setState({nameError: true});
        }
        if(!this.state.description){
            this.setState({descError: true});
        }
        if(!this.state.quantity){
            this.setState({quantError: true});
        }
        else{
            axios.put(`http://localhost:8080/inventories/${this.state.itemId}`, {
                itemName: this.state.name,
                warehouseName: this.state.warehouse,
                description: this.state.description,
                quantity: this.state.quantity,
                status: this.state.status, 
                category: this.state.category
            })
                .then(res => console.log(res))
                .catch(res => console.log(res));
        }
    }

    //not really sure how to comment some of this...
    //take note of the ternaries for setting the classes due to error status in state lines: 144 & 146 & 159
    //take note of radio buttons using state to show selection lines: 157 & 158
    //take note of mapping through to populate select fields lines:149 & 163
    render() {
        if(this.state.warehouseList === null){
            return(<></>)
        }
        else{ return(
            <div className='edit-inv-item__boxshadow'>
            <div className='edit-inv-item'>
                <div className='edit-inv-item__header-holder'>
                <img onClick={() => useHistory(-1)} className='edit-inv-item__backIcon' alt="Back Button" src={backArrow}/>
                <h1 className='edit-inv-item__header'>Edit Inventory Item</h1>
                </div>
                <div className='edit-inv-item__form-holder'>
                    <form id='editInvForm' onSubmit={this.handleSubmit} className='edit-inv-item-form'>
                        <div className='edit-inv-item-form__details'>
                            <h2 className='edit-inv-item-form__title'>Item Details</h2>
                            <h3 className='edit-inv-item-form__label'>Item Name</h3>
                            <input className={`edit-inv-item-form__small-text${this.state.nameError ? ' edit-inv-item__error': ''}`} type='text' onChange={this.handleName} name='name' defaultValue={this.state.name} ></input>
                            <h3 className='edit-inv-item-form__label'>Description</h3>
                            <textarea className={`edit-inv-item-form__big-text${this.state.descError ? ' edit-inv-item__error': ''}`} name='description' onChange={this.handleDesc} type='textarea' defaultValue={this.state.description}></textarea>
                            <h3 className='edit-inv-item-form__label'>Category</h3>
                            <select className='edit-inv-item-form__dropdown' onChange={this.handleCategory} value={this.state.category}>
                                {this.state.categoryValues.map((option, index) => (
                                    <option className='edit-inv-item-form__option' key={index} value={option.label}>{option.label}</option>
                                ))};
                            </select>
                        </div>
                        <div className='edit-inv-item-form__availability'>
                            <h2 className='edit-inv-item-form__title'>Item Availability</h2>
                            <h3 className='edit-inv-item-form__label'>Status</h3>
                            <input className='edit-inv-item-form__radio' type='radio' value='In Stock' name='status' checked={this.state.status === 'In Stock'} onChange={this.handleRadio}/> <label className='edit-inv-item-form__label--radio'>In Stock</label>
                            <input className='edit-inv-item-form__radio' type='radio' value='Out of Stock' name='status' checked={this.state.status === 'Out of Stock'} onChange={this.handleRadio}/> <label className='edit-inv-item-form__label--radio'>Out of Stock</label>
                            {this.state.status === 'In Stock' ? <div><h3 className='edit-inv-item-form__label'>Quantity</h3><input className={`edit-inv-item-form__number${this.state.quantError ? ' edit-inv-item__error':''}`} onChange={this.handleQuant} type='number' defaultValue={this.state.quantity}></input></div> : <></>}
                            <h3 className='edit-inv-item-form__label'>Warehouse</h3>
                            <select className='edit-inv-item-form__dropdown' onChange={this.handleWarehouse} value={this.state.warehouse}>
                                    {this.state.warehouseList?.map((option, index) => (
                                        <option className='edit-inv-item-form__option' key={index} value={option.label}>{option.label}</option>
                                    ))};
                            </select>
                        </div>
                    </form>
                </div>
                <div className='edit-inv-item-form__buttons'>
                        <button onClick={() => useHistory(-1)} className='edit-inv-item-form__cancel'>Cancel</button>
                        <button type='submit' className='edit-inv-item-form__save' form='editInvForm'>Save</button>
                </div>
            </div>
            </div>
        )
    }}
}

export default EditInventoryItem;