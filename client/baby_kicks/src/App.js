import React, {useState, useEffect} from 'react';
import './App.css';
import { HomePage } from './Homepage';

function App() {
  const[totalInventory, setTotalInventory] = useState([]);

  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
