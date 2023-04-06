import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';

export const Login = () => {
    const navigate = useNavigate();

    //need a useState that stores username and password
    //need to grab manager_id and pass to onClick

    //Need to check if username exists in db --if no alert username doesnt exist try again or register
    //      if yes then check password --if no alert password incorrect try again
    //          if good then login goes to users inventory page

    return(
        <div>
           <h1>Login Page</h1> 
           <form>
                <Container className='Register-Container'>
                    <input className='username-input' placeholder='Username'></input>
                    <input className='password-input' placeholder='Password'></input>
                </Container>
            </form>
           <button>Log In</button>
        </div>
    )
}