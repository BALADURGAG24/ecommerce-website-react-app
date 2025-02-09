import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './login.css';
import { Link } from 'react-router-dom';

class  Login extends Component {
render() {
  return (

    <div className='lbg'>
    <div className='bx1'>
        <img className='logoll' src="login.png"></img>
       <br></br><br></br> <br></br><br></br><br></br>
       <input className="a1" type='text' placeholder='Email Id' name='Id' ></input>
       <br></br><br></br>
       <input className="a2" type='password' placeholder='Password' name='Id' ></input>
       <br></br>
       <submit><button><Link to="/">submit</Link></button></submit>
    </div>
    </div>
   
 
  )
}
}

export default Login;