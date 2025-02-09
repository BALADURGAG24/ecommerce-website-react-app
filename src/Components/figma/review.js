import React, { Component } from 'react';
import ReactDOM  from 'react-dom/client';
import './review.css';
import { Link } from 'react-router-dom';
class  Review extends Component {
  render() {
    return (

      <div className='paybybg'>
      <div className='bys1'>
      <div className='bys2'><div className='pp'>User Review</div></div>
      <div className='syo'><br></br>
      <div className='fc1'><label>User Name</label>
      <input className='fc1' type="text" name="0c1" ></input></div><br></br>
      <div className='fc2'><label>Product Name</label>
       <input className='fc2' type="text" name="0c1" ></input></div><br></br>
       <div className='fc3'><label>User Review</label>
       <input className='fc3' type="text" name="0c1"  ></input></div><br></br>
      </div>
      <div className='bt1'><Link to="response"><button >Submit</button></Link></div>
      </div>
      </div>
      
 
  )
}
}

export default Review;