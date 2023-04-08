import React, {useState, useEffect} from 'react';
import './App.css';
import { RouteHandler } from './RouteHandler';
export const InventoryContext = React.createContext();



function App() {
  const[totalInventory, setTotalInventory] = useState([]);
  const[ manager, setManager] = useState(null);
  const[username, setUsername]=useState(null);
  const[managerId, setManagerId]=useState(null);
  const[goFetch, setFetch]=useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/inventory')
    .then(res => res.json())
    .then(data => setTotalInventory(data))
  },[goFetch, totalInventory])
  

  return (
    <InventoryContext.Provider value={ {goFetch, manager, setManager, username, setUsername, managerId, setManagerId}}> 
    <div className="App">
    <RouteHandler totalInventory = {totalInventory}/>
    </div>
    </InventoryContext.Provider>
  )
}

export default App;
