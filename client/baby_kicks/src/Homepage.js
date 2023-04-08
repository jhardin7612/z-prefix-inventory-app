import React from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import './home.css'


export const HomePage = ({ totalInventory }) => {
    const navigate = useNavigate();


    return (
        <div className='home-div'>

            <Navbar />

            <h1 className='site-title'> Kicking in Style!</h1>
            <p>Find your little one a pair today or sell the ones they might have outgrown!</p>

    
            <div className='home-item-div'>
                {totalInventory.map((item, index) => {
                    return (
                        <div className='sep-item-div' key={index} onClick={() => navigate(`/Inventory/${item.id}`, { state: { item_id: item.id } })}>
                            <h5 >{item.name}</h5>
                            <div className='home-desc-div'><p className='home-desc-p'>{item.description}</p></div>
                            <p>Quantity: {item.quantity}</p>
                        </div>)
                })}
            </div>
         

        </div>
    )
}