import React from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';
import { Container } from 'react-bootstrap';
import { Inventory } from './Inventory';
import './login.css';
import { Navbar } from './Navbar';


export const Login = () => {
    const navigate = useNavigate();
    const { manager, setManager } = React.useContext(InventoryContext);


    const handleSubmit = (e) => {
        let username = e.target[0].value;
        let password = e.target[0].value;

        fetch(`http://localhost:8080/managers/${username}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((data) => {
                setManager(data[0]);
                navigate(`/Inventory/manager/${manager.username}`)
            })
    }

    return (
        <div className='login-div'>
            <Navbar/>
                <div>
                    <h1>Login Page</h1>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                        <Container className='Register-Container'>
                            <input className='username-input' placeholder='Username'></input>
                            <input className='password-input' placeholder='Password' type='password'></input>
                        </Container>
                        <button type='submit'>Enter</button>
                    </form>
                    <button onClick={() => navigate(`/`)}>Go Back</button>
                </div>             
        </div>
    )
}