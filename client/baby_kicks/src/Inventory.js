import React, { useState, useRef } from 'react';
import { InventoryContext } from './App';
import { Navbar } from './Navbar';
import { Table} from 'react-bootstrap';



export const Inventory = ({ totalInventory }) => {
    const { manager, setGoFetch } = React.useContext(InventoryContext);
    let myStuff = totalInventory.filter((item) => item.manager_id === manager.id);
    const itemRef = useRef({ manager_id: manager.id, name: '',  description: '' , quantity: 0}); //use itemref.current.[key]to update each w/ onClick


    //Create Function
    const addItem = () => {
      console.log(itemRef.current)
        fetch('http://localhost:8080/inventory', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(itemRef.current),
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                setGoFetch(true)
            })
            .catch(err => console.log(err))
    }

    //Update  Function
 

    //Delete Function
    const deleteItem = (item) => {
        fetch(`http://localhost:8080/Inventory`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                setGoFetch(true)
                console.log(data)
            })
            .catch(err => console.log(err))
    }
   
    return (
        <div>
        <Navbar/>
        <h2 className='inv-title'>Your Current Stock</h2>
        <div className='inv-div'>
           
        <Table>
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th className='quantity-header'>Quantity</th>
            
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr key='add'> 
            <td className='text-center'>0</td>
            <td className=''><input type='text' className='form-control' placeholder='name' onChange={(e)=> itemRef.current.name = e.target.value}/></td>
            <td><input type='text' className='form-control' placeholder='description' onChange={(e)=> itemRef.current.description = e.target.value}/></td>
            <td><input type='text' className='form-control' placeholder='quantity' onChange={(e)=> itemRef.current.quantity = e.target.value}/></td>
            <td><button type='button' onClick={() => addItem()}>Add</button></td>
          </tr>
          {myStuff.map((item, index) => (
            <tr key={index} >
              <td className='text-center' >{item.id}</td>
              <td>{item.name}</td>
              <td className='text-wrap-center'>{item.description}</td>
              <td className='text-center' >{item.quantity}</td>
              <td className='d-flex justify-content-evenly'>
                <button type='button' onClick={()=> {deleteItem(item)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      </div>
    )
}