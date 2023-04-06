import React, {useState, useEffect} from 'react';
import './App.css';
import { RouteHandler } from './RouteHandler';

function App() {
  const[totalInventory, setTotalInventory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')
    .then(res => res.json())
    .then(data => setTotalInventory(data))
  },[])
  

  return (
    <div className="App">
    <RouteHandler totalInventory = {totalInventory}/>
    </div>
  )
}

export default App;
