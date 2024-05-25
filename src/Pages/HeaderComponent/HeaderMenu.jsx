import React  from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';

const HeaderMenu = () => {

    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Download</Link>
            </li>
            <li className="path">
              <a href=""></a>
            </li>
            <li>
              <Link to="/signup" >SignUp</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
}

export default HeaderMenu
