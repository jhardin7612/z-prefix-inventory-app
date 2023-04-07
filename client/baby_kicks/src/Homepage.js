import React from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import { InventoryContext } from './App';


export const HomePage = ({totalInventory}) => {
    const navigate = useNavigate();
    const {username, setUsername, managerId, manager, setManagerId } = React.useContext(InventoryContext);
    console.log('homepage man obj ', manager)

    return(
        <div>
            <Navbar/>
           <h1>Baby Kicks!</h1> 
           <ul>
           {totalInventory.map((item,index) => {
            return(<div key ={index}>
                <h5 onClick={() => navigate(`/Inventory/${item.id}`, {state: {item_id: item.id}})}>{item.name}</h5>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)
           })}
           </ul> 
           {(manager) ? <button onClick = {()=> navigate(`/Inventory/manager/${username}`)}>My Inventory</button> : null}
           
        </div>
    )
}