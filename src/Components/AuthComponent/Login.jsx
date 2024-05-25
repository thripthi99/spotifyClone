import React from 'react'
import Logo from '../../Pages/HeaderComponent/Logo';
import LoginForm from './LoginForm';


const Login = () => {
    return (
      <section id="authblock">
        <article>
          <h1>Login</h1>
          <Logo />
          <div className="authContent">
            <h1>To continue, log in to Spotify.</h1>
            <button>Continue with Facebook</button>
            <br />
            <button>Continue with Apple</button>
            <br />
            <button>Continue with Google</button>
            <br />
            <button>Continue with Phone Number</button>
            <br />
            <p className="orBlock">
              <strong>or</strong>
            </p>
            <div className="form-content">
              <LoginForm />
            </div>
          </div>
        </article>
      </section>
    );
}

export default Login
