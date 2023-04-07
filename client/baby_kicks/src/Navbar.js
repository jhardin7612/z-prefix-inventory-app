import React from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';

export const Navbar = () => {
    const navigate = useNavigate();
    const{ manager, username} = React.useContext(InventoryContext);


    return(
        <div className='navbar-container'>
            {(!manager) ? 
            <div className='navbar-div'>
            <button onClick={()=> navigate('/Login')}>Login</button>
            <button onClick={()=> navigate('/Register')}>Register</button>
            </div>
            :
            <div className='welcom-div'>
                <p className='welcome-p'>Welcome, {manager.first_name}</p>
            </div>
            }
        </div>
    )
}