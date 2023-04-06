import React from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';
import { Container} from 'react-bootstrap';

export const Login = () => {
    const navigate = useNavigate();
    
    const { manager, setManager, username, setUsername, manager_id, setManagerId } = React.useContext(InventoryContext);
  


    const handleSubmit = (e) => {
        let username = e.target[0].value;
        let password = e.target[0].value;

        fetch(`http://localhost:8080/managers/${username}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then((data) => {
                setManager(data[0])
            })
            .then((data) => {
                if(manager){
                    console.log(manager)
                    setManagerId(manager.manager_id)
                    setUsername(manager.username)
                    navigate(`/Inventory/manager/${username}`)
                }
                else(alert("try again"))

            })
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>
                <Container className='Register-Container'>
                    <input className='username-input' placeholder='Username'></input>
                    <input className='password-input' placeholder='Password'></input>
                </Container>
                <button type='submit'>Log In</button>
            </form>
            <button onClick= {() => navigate(`/`)}>Main Catalog</button>
        </div>
    )
}