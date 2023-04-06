import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';


export const HomePage = ({totalInventory}) => {
    const navigate = useNavigate();
    

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
        </div>
    )
}