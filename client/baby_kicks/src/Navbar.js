import React from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';
import './App.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const{ manager, username} = React.useContext(InventoryContext);


    return(
        <div className='navbar-container'>
            <h3 onClick={() => navigate(`/`)}>Baby Kicks</h3>
        <div>
            {(!manager) ? 
            <div className='navbar-div'>
            <button className ='navbutton' onClick={()=> navigate('/Login')}>Login</button>
            <button className ='navbutton' onClick={()=> navigate('/Register')}>Register</button>
            </div>
            :
            <div className='welcom-div'>
                <p className='welcome-p'>hey there, {manager.username}</p>
            </div>
            }
        </div>

        </div>
    )
}