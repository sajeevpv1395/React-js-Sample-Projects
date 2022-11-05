import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header1 from "./ReactRouterTutorial/component header/Header1";
import Home1 from "./ReactRouterTutorial/Home1";
import About1 from "./ReactRouterTutorial/About1";
import Contact from "./ReactRouterTutorial/Contact";
import SampleCrud from './React Crud/SampleCrud';


function App() {
  return (
    <div>
      <Router>
        <Header1 />

       
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route exact path="/about" element={<About1 />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>


      <h1>hiiii</h1>
      <SampleCrud/>
    </div>
  );
}

export default App;

/* 

 // const [count,setCount]=useState(0);
import React, { useEffect, useState } from 'react'

const [count,setCount]=useState(0)
  useEffect(()=>
  {
setCount(count+5)
  },[])
  return (
    <div>
   <h1>{count}</h1>
    </div>
    
    
      <Button variant="contained">Hello World</Button>
     <Loginpage/>
    
    import Button from '@mui/material/Button';
import Loginpage from './Includes/Loginpage.js';
import { Login } from '@mui/icons-material';
    
  
          <button onClick={()=>setLogin(!Login)}>Login</button>

  const [Login,setLogin] = useState(false);


    */
