import React from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import { InventoryContext } from './App';


export const HomePage = ({totalInventory}) => {
    const navigate = useNavigate();
    const {username, setUsername, manager_id, manager, setManagerId } = React.useContext(InventoryContext);

    return(
        <div>
            <Navbar/>
           <h1>Hustling Momma!</h1> 
           <ul>
           {totalInventory.map((item,index) => {
            return(<div key ={index}>
                <h5 onClick={() => navigate(`/inventory/${item.id}`)}>{item.name}</h5>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)
           })}
           </ul> 
           {(!manager) ? null : <button onClick = {()=> navigate(`/Inventory/manager/${username}`)}>My Inventory</button>}
           
        </div>
    )
}