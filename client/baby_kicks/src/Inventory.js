import React, {useState} from 'react';
import { useNavigate } from 'react-router';

export const Inventory = ({totalInventory}) => {
    const navigate = useNavigate();
    let myStuff = totalInventory.filter((item) => item.manager_id === 1);
    return(
        <div>
           <h1>User inventory</h1> 
           <ul>
           {myStuff.map((item,index) => {
            return(<div key ={index}>
                <h5 onClick={() => navigate(`/inventory/${item.id}`)}>{item.name}</h5>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)
           })}
           </ul> 
            <button onClick= {() => navigate(`/`)}>Main Catalog</button>
        </div>
    )
}