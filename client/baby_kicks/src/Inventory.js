import React, { useState, useRef } from 'react';
import { InventoryContext } from './App';
import { Navbar } from './Navbar';
import { Table } from 'react-bootstrap';



export const Inventory = ({ totalInventory }) => {
  const { manager, setGoFetch } = React.useContext(InventoryContext);
  let myStuff = totalInventory.filter((item) => item.manager_id === manager.id);
  const itemRef = useRef({ manager_id: manager.id, name: '', description: '', quantity: 0 });
  const [editMode, setEditMode] = useState(false);
  const editRef = useRef({ id: 0, manager_id: manager.id, name: '', description: '', quantity: 0 });


  //Create Function
  const addItem = () => {
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
  const startEdit = () => {
    setEditMode(true)
  }

  const handlePut =()=>{
    console.log(editRef.current)
    fetch('http://localhost:8080/inventory', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editRef.current),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGoFetch(true)
      })
      .catch(err => console.log(err))

  }


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
      <Navbar />
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
              <td><input type='text' className='form-control' placeholder='name' onChange={(e) => itemRef.current.name = e.target.value} /></td>
              <td><input type='text' className='form-control' placeholder='description' onChange={(e) => itemRef.current.description = e.target.value} /></td>
              <td><input type='text' className='form-control' placeholder='quantity' onChange={(e) => itemRef.current.quantity = e.target.value} /></td>
              <td><button type='button' onClick={() => addItem()}>Add</button></td>
            </tr>
            {(!editMode) ? 
            myStuff.map((item, index) => (
              <tr key={index} >
                <td className='text-center' >{item.id}</td>
                <td onDoubleClick={() => startEdit(item)}>{item.name}</td>
                <td className='text-wrap-center' onDoubleClick={(item) => startEdit(item)}>{item.description}</td>
                <td className='text-center' onDoubleClick={() => startEdit(item)}>{item.quantity}</td>
                <td className='d-flex justify-content-evenly'>
                  <button type='button' onClick={() => { handlePut(item) }}>Delete</button>
                </td>
              </tr>
            ))
            :
            myStuff.map((item, index) => (
              <tr key={index} >
                
                <td><input type='text' defaultValue={item.id} onChange={(e) => editRef.current.id = e.target.value} /></td>
                <td><input type='text' defaultValue={item.name} onChange={(e) => editRef.current.name = e.target.value} /></td>
                <td><input type='text' defaultValue={item.description} onChange={(e) => editRef.current.description = e.target.value} /></td>
                <td><input type='text' defaultValue={item.quantity} onChange={(e) => editRef.current.quantity = e.target.value} /></td>
                <td className='d-flex justify-content-evenly'>
                  <button type='button' onClick={() => { handlePut(item) }}>Save</button>
                </td>
              </tr>
            ))
}



          </tbody>
        </Table>
      </div>
    </div>
  )
}