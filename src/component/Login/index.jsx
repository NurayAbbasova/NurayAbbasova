import React,{useState} from 'react';
import "./style.css";
import img1 from './image/login.jfif';
import {Link} from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";




const Login = () => {

    const [show,setShow] = useState(false)

    const handleToggle = ()=>{

    setShow(prevState => !prevState);
  }

  return (
    <div className='main'>
        <div className="login">
            <div className="login-photo">
              <img src={img1} alt="" />
              <h1>Welcome Back!</h1>
            </div>
            <div className="login-email">
              <AiOutlineMail fontSize={17} color='#757575' />
              <input type="email" name="" id="" placeholder='example@email.com'/>
            </div>
            <div className="login-password">
              <span onClick={handleToggle} >
                {
                  show ? <AiFillEye fontSize={19} color="#757575"/> :
                  <AiFillEyeInvisible fontSize={19} color="#757575"/>

                }
              </span>
              <input type={show ? "text" : "password"}  name="" id="" placeholder='password'/>
            </div>
            <Link to="/logout">
            <a href="#">Forgot Password?</a>
            </Link>
            <button className='btn'>LOG IN</button>
            <div className="login-social">
              <span>Or connect with social</span>
              
            </div>
            <div className="social-media">
                <button className='btn1'>Facebook</button>
                <button className='btn2'>Google</button>
              </div>
        </div>
    </div>
  )
}

export default Login;