import React from 'react';
import { Routes, Route } from "react-router";
import { HomePage } from './Homepage';
import { Login } from './Login';
import { Register } from './Register';
import { ItemDetails } from './ItemDetails';
import { Inventory } from './Inventory';



export const RouteHandler = ({totalInventory}) => {

    return(
    
            <Routes>
                <Route path = '/' element ={<HomePage totalInventory={totalInventory}/>}/>
                <Route path = '/Login' element ={<Login/>}/>
                <Route path = '/Register' element ={<Register/>}/>
                <Route path = '/Inventory/:item_id' element ={<ItemDetails totalInventory={totalInventory}/>}/>
                <Route path = '/Inventory/:user_name' element ={<Inventory/>}/>
            </Routes>
    )
}