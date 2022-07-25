import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
    
    const handleLogout = () => {
        let path = '/login';
        navigate(path);
        window.localStorage.clear(); //clear all localstorage
        window.localStorage.removeItem("data");
    }

    
    return(                       
      <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
          <div>
            <Navbar.Brand>Ai Services</Navbar.Brand>
          </div>
          <div className="text-end">
            <Button id="logout" type="submit" onClick={handleLogout} variant="light">Logout</Button>
          </div>
        </Nav>
      </Navbar>
    ) 
}

export default Header;