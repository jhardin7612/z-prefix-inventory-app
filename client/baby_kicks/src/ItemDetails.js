import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';

export const ItemDetails = ({totalInventory}) => {
    const navigate = useNavigate();
    const { item_id } = useParams();
   
    const[showItem, setShowItem] = useState();
  
    useEffect(() => {
        fetch(`http://localhost:8080/inventory/${item_id}`)
        .then(res => res.json())
        .then(data => setShowItem(data[0]))
    }, [])
    

    return(
        <div className ='ItemDetails_div'>
            <h2>{showItem.name}</h2>
            <div className='DescriptionBox'>
            <p className='FullDescription'>{showItem.description}</p>
            </div>
            <p>Quantity: {showItem.quantity}</p>
            <button onClick={() => navigate('/')}>Go Back</button>
        </div>
    )
}