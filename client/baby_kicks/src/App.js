import React, {useState, useEffect} from 'react';
import './App.css';
import { RouteHandler } from './RouteHandler';
export const InventoryContext = React.createContext();



function App() {
  const[totalInventory, setTotalInventory] = useState([]);
  const[ manager, setManager] = useState(null);

  const[goFetch, setGoFetch]=useState(false);

  useEffect(() => {
    setGoFetch(false)
    fetch('http://localhost:8080/inventory')
    .then(res => res.json())
    .then(data => setTotalInventory(data))
  },[goFetch, totalInventory])
  

  return (
    <InventoryContext.Provider value={ {goFetch, setGoFetch, manager, setManager}}> 
    <div className="App">
    <RouteHandler totalInventory = {totalInventory}/>
    </div>
    </InventoryContext.Provider>
  )
}

export default App;
