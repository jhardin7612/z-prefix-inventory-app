import React from 'react';
import { useNavigate } from 'react-router';

export const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={()=> navigate('/Login')}>Login</button>
            <button onClick={()=> navigate('/Register')}>Register</button>
        </div>
    )
}