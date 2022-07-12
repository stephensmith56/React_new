import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';  
import Login1 from "./components/Login1";
import Dashboard from "./components/Dashboard/Dashboard";
import Regster from "./components/Register";
import AutoInspection from "./components/AutoInspection";
import Header from "./components/Header";



function App() {
  return (
    <div className=""> 
        <Router>           
              <Header />
              
              <Routes>        
                <Route exact path='/login' element={<Login1/>} />     
                <Route path='/Regster' element={<Regster/>} />    
                <Route exact path='/Dashboard' element={<Dashboard/>} />
                <Route exact path='/AutoInspection' element={<AutoInspection/>} />  
                <Route exact path='/Header' element={<Header/>} />
              </Routes>
        </Router>
    </div> 
  
  );
}

export default App;
