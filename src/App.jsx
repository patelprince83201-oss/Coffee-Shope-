import React from 'react'
import Navbar from './navbar/navbar';
import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import About from "./About/Aboutfront";
import LoginForm from './Loginfolder/LoginForm';
import Menufolder from './Menu/Menufolder';

const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route  path="/" element={<Homepage />}> </Route>
   <Route  path="/About" element={<About/>}> </Route>
    <Route path="/Location" element={< Menufolder />}> </Route>
        <Route path="/Login" element={<LoginForm/>}> </Route>
    </Routes>


    </> 

    
  )
} 

export default App
