import React from 'react'
import "./style.css";
import img2 from './image/password.jfif';
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Logout = () => {
  return (
    <div className='logout'>
      <div className="logout-forgot">
        <div className="logout-link">
          <div className="logout-img">
            <img src={img2} alt="" />
            <h1>Forgot Password</h1>
          </div>
          <div className="logout-email">
              <AiOutlineMail fontSize={17} color="#757575"/>
              <input type="email" name="" id="" placeholder='example@email.com'/>
          </div>
          <button>Reset</button>
        </div>
          <div className='logout-btn'>
            <span><a href="#">Already have an account</a></span>
            
          <Link to="/">
            
            <p><a href="#">Login here</a></p>
          </Link>
          </div>
      </div>
    </div>
  )
}

export default Logout;