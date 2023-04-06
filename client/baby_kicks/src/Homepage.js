import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';


export const HomePage = ({totalInventory}) => {
    const navigate = useNavigate();
    console.log(totalInventory);

    return(
        <div>
           <h1>Welcome to BabyKicks!</h1> 
           <ul>
           {totalInventory.map((item,index) => {
            return(<div key ={index}>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
            </div>)
           })}
           </ul>
        </div>
    )
}