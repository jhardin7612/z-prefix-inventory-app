import React, {useState, useEffect} from 'react';
import './App.css';
import { RouteHandler } from './RouteHandler';
export const InventoryContext = React.createContext();



function App() {
  const[totalInventory, setTotalInventory] = useState([]);
  const[ manager, setManager] = useState();
  const[username, setUsername]=useState('');
  const[manager_id, setManagerId]=useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')
    .then(res => res.json())
    .then(data => setTotalInventory(data))
  },[])
  

  return (
    <InventoryContext.Provider value={ {manager, setManager, username, setUsername, manager_id, setManagerId}}> 
    <div className="App">
    <RouteHandler totalInventory = {totalInventory}/>
    </div>
    </InventoryContext.Provider>
  )
}

export default App;
