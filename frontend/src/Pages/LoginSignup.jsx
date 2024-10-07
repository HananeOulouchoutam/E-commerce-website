import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='loginsinup'>
      <div className="loginsinup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
              <input type="text"  placeholder='Your name'/>
              <input type="email" placeholder="Email Address"  />
              <input type="password" placeholder="***********"  />
          </div>
          <button>Continue</button>
          <p className='loginsinup-login'>Aalready hve an account ? <span>Login</span></p>
          <div className="loginsignup-agree">
              <input type="checkbox" name='' id=''/>
              <p>By continuing, i agree to the terms of use & privary police.</p>

          </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
