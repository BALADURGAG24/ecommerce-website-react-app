import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './response.css';
import { Link } from 'react-router-dom';

class  Response extends Component {
render() {
  
  return (
  <div className='tbgs'>
    <div className='tbgs1'>Thank you for the response!!!<br></br>
    It means lot to us!!!</div>
  
    <div className='yas'><Link to="/"><button>back to home</button></Link></div>
  </div>
  );
}
}

export default Response;