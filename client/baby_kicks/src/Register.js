import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Container} from 'react-bootstrap';

export const Register = () => {
    const navigate = useNavigate();
    const managerRef = useRef({first_name: '', last_name:'', username:'', password:'' })

    const postManager = () => {
        console.log('manRef ' , managerRef)
        fetch('http://localhost:8080/managers', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(managerRef.current)
        })
        .then(data => data.json())
        .catch(err => {console.log(err)})
     }


return (
    <div>
        <h2>Enter Information Below</h2>
        
            <div className='Register-Container'>
                <input className='firstname-input' placeholder='First Name' onChange={(e)=>{managerRef.current.first_name =e.target.value}}></input>
                <input className='lastname-input' placeholder='Last Name' onChange={(e)=>{managerRef.current.last_name =e.target.value}}></input>
                <input className='username-input' placeholder='Username' onChange={(e)=>{managerRef.current.username =e.target.value}}></input>
                <input className='password-input' placeholder='Password' type='password' onClick={(e)=>{managerRef.current.password =e.target.value}}></input>
            </div>
            <button onClick={() => {postManager(); navigate('/Login')}}>Register</button>
      

    </div>
)}
