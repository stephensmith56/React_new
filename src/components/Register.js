import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var FormData = require('form-data');
var data = new FormData();
data.append('email', email);
data.append('username', username);
data.append('fname', fname);
data.append('lname', lname);
data.append('password', password);
var axios = require('axios');
var config = {
  method: 'post',
  url: 'http://127.0.0.1:8000/api/register/',
 
  data : data
};
console.log('data',data)
axios(config)
.then(function (response) {
  console.log(response.data)
  
  
 
  let response1 = JSON.stringify(response.data)
  console.log(response1);
  setMessage(response1);
  if (response1 === {"message":"Account Registered Successfully"}
    ) {
    navigate('/login');
  }
})
.catch(function (error) {
  setMessage(error);
  console.log(error);
});

} catch (err) {
  console.log(err);
}

};
  
  return (  
    <div className="">
      <div className="outer">
        <div className="inner">  
          <div className="text-center">  
            <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
          </div>  
                
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>username</label> 
                <input
                  type="text"
                  name="username"
                  value={username}
                  id="exampleFirstName"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => setusername(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label>email</label> 
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  placeholder="email"
                  onChange={(e) => setemail(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label>fname</label> 
                <input
                  type="text"
                  className="form-control"
                  value={fname}
                  placeholder="fname"
                  onChange={(e) => setfname(e.target.value)}
                />
            </div>
            <div className="form-group"> 
              <label>lname</label> 
                <input
                  type="text"
                  value={lname}
                  className="form-control"
                  placeholder="lname"
                  onChange={(e) => setlname(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label>password</label> 
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="password"
                  onChange={(e) => setpassword(e.target.value)}
                /> 
            </div> 
            <button type="submit" className="colors">  
              Create User  
            </button>
            <p className="forgot-password text-right">
              Already registered: 
              <Link to="/Login">Login</Link>
            </p>  
                    
          </form>  
        </div>
      </div>
    </div>
      
  )  
}  
  
export default Register; 