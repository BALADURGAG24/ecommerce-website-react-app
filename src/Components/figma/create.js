import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './create.css';
import { Link } from 'react-router-dom';
class  Create extends Component {
render() {
  return (

    <div className='lbgc'>
    <div className='bx1c'>
        <img className='logollc' src="rttt.jpg"></img>
       <br></br><br></br> 
  
       <div className="a1c" ><div className='lab1'><label>Your Name</label></div><input className='kk1' type='text' placeholder='xxxxxxxxxx' name='Id' ></input></div>
       <br></br><br></br><br></br>
       <div className="a2c" ><div className='lab1'><label>Email Id/Phone Number</label></div><input className='kk1' type='text' placeholder='abc@gmail.com/9842xxxxxx' name='Id' ></input></div>
       <br></br><br></br><br></br>
       <div className="a3c" ><div className='lab1'><label>Pasword</label></div><input className='kk1' type='password' placeholder='At least 6 characters' name='Id' ></input></div>
       <br></br><br></br><br></br>
       <div className="a4c" ><div className='lab1'><label>Re enter password</label></div><input className='kk1' type='password' placeholder='Confirm Password' name='Id' ></input></div>
       <br></br><br></br><br></br>
       <div className="a5c" ><div className='lab1'><label>Address</label></div><input className='kk2' type='text' placeholder='' name='Id' ></input></div>
      
       <div className='lowc'><Link to="Is"><button>Create Your Raptech Account</button></Link></div>
    </div>
    </div>
 
  )
}
}

export default Create;