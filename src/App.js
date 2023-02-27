import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import ThreeD from './components/ThreeD';
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const [c,setC]=useState(0)
  return (
    <div className="App" style={{display:"flex"}}>
     <Sidebar setC={setC}/>
     <ThreeD c={c} setC={setC}/>
    </div>
  );
}

export default App;
