import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';

export const Register = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h2>Enter Information Below</h2>
            <button onClick={()=> navigate('/Login')}>Register</button>
        </div>
    )
}