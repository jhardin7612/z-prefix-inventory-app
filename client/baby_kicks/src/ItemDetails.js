import React, {useState} from 'react';
import { useNavigate, useLocation} from 'react-router';


export const ItemDetails = ({totalInventory}) => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { item_id} = state;
    let showItem = totalInventory.filter((item)=> item.id ===item_id);
    showItem =showItem[0];
 
  

    return(
        <div className ='ItemDetails_div'>
            <h3>{showItem.name}</h3>
            <div className='Full-descr-box'>
                <p>{showItem.description}</p>
            </div>
            <p>Quantity: {showItem.quantity}</p>
            
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}