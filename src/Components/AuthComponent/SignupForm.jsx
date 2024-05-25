import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import firebaseConfig from "firebase";
import firebase from './../../firebase';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router';

const SignupForm = ({history}) => {
     let [state, setstate] = useState({
       email: "",
       email1:"",
       password: "",
       username: "",
       month: "",
       dd: "",
       yy: "",
       gender: "",
       loading: false
     });
     let { email, email1, password , username , month , dd , yy , gender , loading} = state;
     let HandleChange = e => {
       let { name, value } = e.target;
       setstate({ ...state, [name]: value });
     };
     let handleSubmit =async e => {
       e.preventDefault();
       try{
         setstate({ loading: true })
         if (email === email1) {
           let USER_DATA = await firebase.auth().createUserWithEmailAndPassword(email, password)
           toast.success("successfully user Registered");
           let ConfirmMessage = ` A verification message has been sent to ${email} verify it and login again`
           USER_DATA.user.sendEmailVerification();
           toast.info(ConfirmMessage)
           setstate({ loading: false });
           history.push('/login');
         } else {
           console.log('email is not matching')
            toast.error("email is not matching");
         }
         
       }catch(e){
         
         toast.error(e.message);
         }
     };
    return (
      <div id="formBlock">
        <form>
          <div>
            <h2>Sign up with your email address</h2>
          </div>
          <div className="form-group">
            <label htmlFor="email">What's your email ?</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={HandleChange}
              value={email}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email1">Confirm your Email </label>

            <input
              className="form-control"
              type="email"
              placeholder="Enter your Email again."
              name="email1"
              onChange={HandleChange}
              value={email1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create a password</label>

            <input
              className="form-control"
              type="password"
              placeholder="Create a password"
              name="password"
              onChange={HandleChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">What should we call you?</label>

            <input
              className="form-control"
              type="text"
              placeholder="Enter a profile name."
              name="username"
              onChange={HandleChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>This appears on your profile</label>
          </div>
          <div className="form-group">
            <label htmlFor="dob">What's your date of birth?</label>
            <main className="dateblock">
              <input
                type="text"
                name="month"
                value={month}
                onChange={HandleChange}
                placeholder="Month"
              />

              <input
                type="text"
                name="dd"
                value={dd}
                onChange={HandleChange}
                placeholder="DD"
              />

              <input
                type="text"
                name="yy"
                value={yy}
                onChange={HandleChange}
                placeholder="YYYY"
              />
            </main>
          </div>
          <div>
            <label htmlFor="">What's your gender?</label>
            <main className="genderblock" value={gender} onChange={HandleChange}>
              <span>
                <input type="radio" name="gender" value="Male" />
                Male
              </span>
              <span>
                <input type="radio" name="gender" value="Female" />
                Female
              </span>
              <span>
                <input type="radio" name="gender" value="Non-binary" />
                Non-binary
              </span>
            </main>
          </div>
          <br />
          <div className="checkboxblock">
            <input type="checkbox" name="checkit" />
            <span>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </span>
          </div>
          <br />
          <div className="captchatext">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            <p>
              To learn more about how Spotify collects, uses, shares and
              protects your personal data, please see Spotify's Privacy Policy.
            </p>
          </div>
          <div className="signupbtn">
            <button onClick={handleSubmit}>{loading === true ? 'Loading...' : "Sign Up" }</button>
          </div>
          <div>
            <p>have an account ?{""} <Link to="/login" exact>Login</Link></p>
          </div>
        </form>
      </div>
    );
}

export default withRouter(SignupForm)
