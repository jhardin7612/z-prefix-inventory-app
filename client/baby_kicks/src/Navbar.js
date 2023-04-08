import React from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';
import './App.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const{ manager, setManager, username} = React.useContext(InventoryContext);


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
            <div className='welcome-div'>
                <span className='username-span' onClick = {()=> navigate(`/Inventory/manager/${username}`)}><u>{username}</u></span>
                <button onClick= {()=> {setManager(null); navigate('/') }} > Logout </button>
            </div>
            }
        </div>

        </div>
    )
}