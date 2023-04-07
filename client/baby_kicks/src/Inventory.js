import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { InventoryContext } from './App';
import EasyEdit from 'react-easy-edit';
import { Navbar } from './Navbar';


export const Inventory = ({ totalInventory }) => {
    const { username, managerId, setGoFetch } = React.useContext(InventoryContext);
    const navigate = useNavigate();
    const[showForm, setShowForm] = useState(false);


    let myStuff = totalInventory.filter((item) => item.manager_id === managerId);


    //Add Function
    const addItem = (e) => {
        let toAdd = {
            mananger_id: managerId,
            name: e.target[0].value,
            description: e.target[1].value,
            quantity: e.target[2].value
        }
        console.log('toAdd obj ', toAdd)

        fetch('http://localhost:8080/Inventory', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toAdd)
        })
            .then(res => res.json())
            .then(data => {console.log(data)})
            .catch(err => console.log(err))
    }

    //Delete Function
    const deleteItem = (item) => {

        fetch(`http://localhost:8080/Inventory`, { //takes a really long time, page doesnt rerender once deleted automatically
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                setGoFetch(true)

            })
            .catch(err => console.log(err))
    }

    //Edit Function
    const editItem = (item) => {
        console.log('edit function')

    }
    // onClick={() => navigate(`/inventory/${item.id}`)

    return (
        <div>
            <Navbar/>
            <h1>Your Collection</h1>

            <button onClick={()=> setShowForm(true)}>Add Item</button>
            

            {(showForm) ? <form onSubmit={(e)=> {e.preventDefault(); addItem(e); setShowForm(false)}}>
                <input type='text' placeholder='name'/><input className='add-descr-input' type='text' placeholder='description'/><input type='number' placeholder='quantity'/><button type='submit'>Submit</button>
            </form> : null}

            <div className='flex-container'>
                <ul>
                    {myStuff.map((item, index) => {
                        return (<div key={index}>
                            <EasyEdit onSave={() => editItem(item)} value={item.name} type='text' />
                            <EasyEdit onSave={() => editItem(item)} value={item.description} type='text' />
                            <div className='flex-container'><span>Quantity: </span><EasyEdit onSave={() => editItem(item)} type='number' value={item.quantity}></EasyEdit></div>
                            <button onClick={() => { deleteItem(item) }}>Delete</button>
                        </div>)
                    })}
                </ul>
            </div>
            
        </div>
    )
}