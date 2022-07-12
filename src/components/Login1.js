import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



  function Login1() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setMessage] = useState("");
      
  let handleSubmit = async (e) => {
    e.preventDefault();
  const headers= {
  'Content-Type': 'application/json',
  'Accept':'application/json',
  'Access-Control-Allow-Origin': '*'
  }
  axios.post('http://127.0.0.1:8000/api/login/', {
  username: username,
  password:password,
} ,{headers: headers }).then(res =>{
  if(res.status===200){
    localStorage.setItem('data', JSON.stringify(res.data));
  navigate('/Dashboard')
    
  }
}
  ).catch(err=>console.log(err))

}

    return (         
        <div className="Login1">
          <Link to={'/login'} style={{color: "black"}}className="nav-link"></Link>
          <div className="outer">
            <div className="inner">
                  <h3 className="h4 text-gray-900 mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>  
                        <div className="form-group">
                          <label>username</label>  
                            <input 
                              type="username"
                              pattern="[a-z]*" 
                              autoComplete="new-username"
                              className="form-control"
                              name="username" 
                              id="username"  
                              value={username}
                              placeholder="Enter username"
                              onChange={(e) => setusername(e.target.value)}   
                            />  
                        </div>
                          
                        <div className="form-group">
                          <label>Password</label> 
                            <input 
                              type="password"  
                              autoComplete="new-password" 
                              className="form-control" 
                              name="password" 
                              id="password"
                              value={password} 
                              placeholder="Enter password" 
                              onChange={(e) => setpassword(e.target.value)}  
                            />  
                        </div>                        
                        <button type="submit" className="colors">
                          Login
                        </button>
                        <p className="forgot-password text-right">
                            Create a New User: 
                              <Link to="/regster">Register</Link>
                        </p> 
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                    </form> 
            </div>          
          </div>          
        </div>               
  
    ); 
    
  }

  
export default Login1;