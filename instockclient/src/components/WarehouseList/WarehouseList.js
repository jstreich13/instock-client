import "./WarehouseList.scss";
import { Component } from "react";
import NavLink from "react-router-dom";

class WarehouseList extends Component {
    state = {
        warehouseData: []
    }

    componentDidMount() {
        //get WarehouseData
    }

    getWarehouseList() {
        axios
        .get("http://localhost:8080/warehouses/")
        .then((res) => {
            this.setState({
                warehouseData: res.data
            });
        })
        .catch((err) => {
            console.log("error getting warehouse data")
        })
    }

  render() {
    return <div className="warehouses">
        <div className="warehouses__header">
            <h1 className="warehouses__header-title">Warehouses</h1>
            <input className="warehouses__header-search" placeholder="Search..." />
            <button className="warehouses__header-addbtn">+ Add New Warehouse</button>
        </div>

        <div className="warehouses__list-labels">

        </div>
        

        <div className="warehouses__list">
            {this.state.warehouseData.map((warehouse) => (
                <div className="warehouses__list-item">
                    <p>WAREHOUSE</p>
                    <NavLink></NavLink><p>{warehouse.name}</p>
                </div>
            ))}

        </div>



    </div>
  }
}

export default WarehouseList;
