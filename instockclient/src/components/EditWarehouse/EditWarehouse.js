import './EditWarehouse.scss';
import { Component } from 'react';
import axios from 'axios';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';

class EditWarehouse extends Component {
    state = {

        id: this.props.match.params.id,
        name: null,
        address: null,
        city: null,
        country: null,
        contact: {
            name: null,
            position: null,
            phone: null,
            email: null
        },
        nameError: false,
        addressError: false,
        cityError: false,
        countryError: false,
        contactNameError: false,
        contactPositionError: false,
        phoneError: false,
        emailError: false,
        apiReturned: false
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/warehouses/${this.state.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    city: res.data.city,
                    country: res.data.country, 
                    contact: res.data.contact,
                    apiReturned: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }
    
    handleContact = (e) => {
        const name = e.target.name;
        this.setState({contact:{...this.state.contact, [name]: e.target.value}});
    }

    handleSubmit = (e) => {
        //Regular Expressions to test phone number and email
        const phoneRegEx = /^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/;
        const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        //Test email against RegEx
        const verifyEmail = (email) => {
          return emailRegEx.test(email);
        };
    
        //Test phone number against RegEx
        const verifyPhone = (phone) => {
          return phoneRegEx.test(phone);
        };

        e.preventDefault();
        if(!this.state.name){
            this.setState({nameError: true});
        }
        else{
            this.setState({nameError: false});
        }
        if(!verifyEmail(this.state.contact.email)){
            this.setState({emailError: true});
        }
        else{
            this.setState({emailError: false});
        }
        if(!verifyPhone(this.state.contact.phone)){
            this.setState({phoneError: true});
        }
        else{
            this.setState({phoneError: false});
        }
        if(!this.state.address){
            this.setState({addressError: true});
        }
        else{
            this.setState({addressError: false});
        }
        if(!this.state.city){
            this.setState({cityError: true});
        }
        else{
            this.setState({cityError: false});
        }
        if(!this.state.country){
            this.setState({countryError: true});
        }
        else{
            this.setState({countryError: false});
        }
        if(!this.state.contact.name){
            this.setState({contactNameError: true});
        }
        else{
            this.setState({contactNameError: false});
        }
        if(!this.state.contact.position){
            this.setState({contactPositionError: true});
        }
        else{
            this.setState({contactPositionError: false});
        }
        if(!this.state.addressError && !this.state.cityError && !this.state.countryError && !this.state.contactNameError && !this.state.contactPositionError && !this.state.phoneError && !this.state.emailError){
            axios.put(`http://localhost:8080/warehouses/${this.state.id}`, {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                country: this.state.country,
                contact: this.state.contact,
                id: this.state.id
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        };

    }

    render(){
        if(!this.state.apiReturned){
            return(<></>);
        }
        else{
            return(
                <div className='edit-warehouse__boxshadow'>
                <div className='edit-warehouse'>
                    <div className='edit-warehouse__header-holder'>
                        <img onClick={() => window.history.back()} src={backArrow} alt="back icon" className='edit-warehouse__backIcon'/>
                        <h1 className='edit-warehouse__header'>Edit Warehouse</h1>
                    </div>
                    <div className='edit-warehouse__form-holder'>
                    <form onSubmit={this.handleSubmit} id='editWarehouseForm'className='edit-warehouse-form'>
                        <div className='edit-warehouse-form__details'>
                            <h2 className='edit-warehouse-form__title'>Warehouse Details</h2>
                            <p className='edit-warehouse-form__label'>Warehouse Name</p>
                            <input onChange={this.handleChange} name='name' placeholder='Warehouse Name' defaultValue={this.state.name} className={`edit-warehouse-form__small-text${this.state.nameError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>Street Address</p>
                            <input onChange={this.handleChange} name='address' placeholder='Street Address' defaultValue={this.state.address} className={`edit-warehouse-form__small-text${this.state.addressError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>City</p>
                            <input onChange={this.handleChange} name='city' placeholder='City' defaultValue={this.state.city} className={`edit-warehouse-form__small-text${this.state.cityError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>Country</p>
                            <input onChange={this.handleChange} name='country' placeholder='Country' defaultValue={this.state.country} className={`edit-warehouse-form__small-text${this.state.countryError ? ' edit-warehouse__error': ''}`}></input>
                        </div>
                        <div className='edit-warehouse-form__contact'>
                            <h2 className='edit-warehouse-form__title'>Contact Details</h2>
                            <p className='edit-warehouse-form__label'>Contact Name</p>
                            <input onChange={this.handleContact} name='name' placeholder='Contact Name' defaultValue={this.state.contact.name} className={`edit-warehouse-form__small-text${this.state.contactNameError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>Position</p>
                            <input onChange={this.handleContact} name='position' placeholder='Position' defaultValue={this.state.contact.position} className={`edit-warehouse-form__small-text${this.state.contactPositionError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>Phone Number</p>
                            <input onChange={this.handleContact} name='phone' placeholder='Phone Number' defaultValue={this.state.contact.phone} className={`edit-warehouse-form__small-text${this.state.phoneError ? ' edit-warehouse__error': ''}`}></input>
                            <p className='edit-warehouse-form__label'>Email</p>
                            <input onChange={this.handleContact} name='email' placeholder='Email' defaultValue={this.state.contact.email} className={`edit-warehouse-form__small-text${this.state.emailError ? ' edit-warehouse__error': ''}`}></input>
                        </div>
                    </form>
                    </div>
                    <div className='edit-warehouse-form__buttons'>
                        <button onClick={() => window.history.back()} className='edit-warehouse-form__cancel'>Cancel</button>
                        <button form='editWarehouseForm' type='submit' className='edit-warehouse-form__save'>Save</button>
                    </div>
                </div>
                </div>
            )
        }
        
    }
}

export default EditWarehouse;