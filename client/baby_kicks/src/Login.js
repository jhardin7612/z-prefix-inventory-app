import React from 'react';
import { useNavigate } from 'react-router';

export const Login = () => {
    const navigate = useNavigate();
    return(
        <div>
           <h1>Login Page</h1> 
           {/* <button onClick={()=> navigate('inventory/:user_name')}>Log In</button> */}
        </div>
    )
}