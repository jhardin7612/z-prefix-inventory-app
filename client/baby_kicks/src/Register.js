import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';

export const Register = () => {
    const navigate = useNavigate();

    //need to fetch with post method to create 
    const postManager = (e) => {

        let manObj = {first_name: e.target[0].value,
            last_name: e.target[1].value,
            user_name: e.target[2].value,
            password: e.target[3].value}

            console.log(manObj);


        fetch('http://localhost:8080/managers', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(manObj)
        })
        .then(data => data.json())
        .catch(err => {console.log(err)})
     }


return (
    <div>
        <h2>Enter Information Below</h2>
        <form onSubmit={(e) => {e.preventDefault(); postManager(e); navigate('/Login')}}>
            <Container className='Register-Container'>
                <input className='firstname-input' placeholder='First Name'></input>
                <input className='lastname-input' placeholder='Last Name'></input>
                <input className='username-input' placeholder='Username'></input>
                <input className='password-input' placeholder='Password' type='password'></input>
            </Container>
            <button type="submit">Register</button>
        </form>

    </div>
)}
