import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './more.css';
import { Link } from 'react-router-dom';

class More extends Component {
render() {
  
  return (

    <div className='mbg'>
    <div className='ct2'>
        <div className='mi'>
        <h1>More</h1><br></br><br></br><br></br>
        for further details
        <br></br>
        Contact us:<br></br>8877040422<br></br> 8877040421
        </div>
        <div className='bkk'>
        <Link to="/"><button>
          back to home</button>
          </Link>
        </div>
    </div>

    </div>



  );
}
}

export default More;