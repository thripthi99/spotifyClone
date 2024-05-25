import React from 'react'
import Logo from '../../Pages/HeaderComponent/Logo';
import "./auth.css"
import SignupForm from './SignupForm';
const Signup = () => {
    return (
      <section id="authblock">
        <article>
          <Logo />
          <div className="authContent">
            <h1>Sign up for free to start listening.</h1>
            <button>Sign up with Facebook</button>
            <p className="orBlock">
              <strong>or</strong>
            </p>
            <div className="form-content">
              <SignupForm />
            </div>
          </div>
        </article>
      </section>
    );
}

export default Signup
