import './WarehouseDetails.scss';
import { Component } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../Assets/Icons/arrow_back-24px.svg';
import WarehouseInventoryList from '../WarehouseInventoryList/WarehouseInventoryList';

class WarehouseDetails extends Component {
    state={
        id: this.props.match.params.id,
        address: null,
        city: null,
        country: null,
        warehouseName: null,
        contactName: null,
        position: null,
        phone: null,
        email: null
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/warehouses/${this.state.id}`)
            .then(res => {
                this.setState({
                    warehouseName: res.data.name,
                    address: res.data.address,
                    city: res.data.city,
                    country: res.data.country,
                    contactName: res.data.contact.name,
                    position: res.data.contact.position,
                    phone: res.data.contact.phone,
                    email: res.data.contact.email
                });
            })
            .catch( err => console.log(err));
    }

    render(){
        if(this.state.address === null) {
            return(<></>);
        }
        else{
            return(
                <div className='warehouse-details__boxshadow'>
                    <div className='warehouse-details'>
                        <div className='warehouse-details__header-holder'>
                            <img onClick={() => useHistory(-1)} src={backArrow} alt="back icon" className='warehouse-details__backIcon'/>
                            <h1 className='warehouse-details__header'>{this.state.warehouseName}</h1>
                        </div>
                        <div className='warehouse-details__info-holder' >
                            <div className='warehouse-details__address'>
                                <h3 className='warehouse-details__title'>WAREHOUSE ADDRESS:</h3>
                                <p className='warehouse-details__text'>{this.state.address}, {this.state.city}, {this.state.country}</p>
                            </div>
                            <div className='warehouse-details__contact-name'>
                                <h3 className='warehouse-details__title'>CONTACT NAME:</h3>
                                <p className='warehouse-details__text'>{this.state.contactName}</p>
                                <p className='warehouse-details__text'>{this.state.position}</p>
                            </div>
                            <div className='warehouse-details__contact-info'>
                            <h3 className='warehouse-details__title'>CONTACT INFORMATION:</h3>
                                <p className='warehouse-details__text'>{this.state.phone}</p>
                                <p className='warehouse-details__text'>{this.state.email}</p>
                            </div>
                        </div>
                        <div>
                            <WarehouseInventoryList />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WarehouseDetails;