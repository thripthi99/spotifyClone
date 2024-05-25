import React, { useState  } from 'react'
import { toast  } from 'react-toastify';

import { Link , withRouter } from 'react-router-dom';
import firebase from "../../firebase";


const LoginForm = ({ history }) => {
    let [state, setstate] = useState({
        email:"" , password : "" , loading:false ,
    })
    let { email, password , loading } = state;
    let HandleChange = e => {
      let { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };
    let handleSubmit = async e => {
        e.preventDefault()
        try {
            setstate({ loading: true });
            let userdata = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(userdata);
            if (userdata.user.emailVerified === true) {
                 toast.success(`successfully ${email} has been logged in`);
                 history.push("/");
            } else {
                history.push("/login")
                toast.error(`email not yet verified got to ${email} verify then login`)
            }
           

        } catch (e) {
            toast.error(e.message)
        }
        setstate({loading:false})
    }
    return (
      <div id="formBlock">
        <form>
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

          <div className="loginbtn">
            <div className="checkboxblocklogin">
              <input type="checkbox" name="checkit" />
              <span>Remember me</span>
            </div>
            <button onClick={handleSubmit}>
              {loading === true ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    );
}

export default withRouter(LoginForm)
