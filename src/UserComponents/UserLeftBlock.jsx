import React from 'react'
import Logo from '../Pages/HeaderComponent/Logo'

const UserLeftBlock = () => {
    return (
      <div className="userleftblock">
        <Logo />
        <div className="userleftlist">
          <ul>
            <li>
              <a href="">
                <span>
                  <i class="fas fa-home"></i>
                </span>{" "}
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <i class="fas fa-search"></i>
                </span>
                <span> Search</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <i class="fas fa-books"></i>
                </span>
                <span>Your Library</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="leftlist2">
          <ul>
            <li>
              <a href="">
                <span>
                  <i class="fal  fa-plus-square"></i>
                </span>{" "}
                <span> Create PlayList</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <i class="fad  fa-heart-square"></i>
                </span>
                <span> Liked Songs</span>
              </a>
            </li>
          </ul>
        </div>

        <hr style={{ width: "80%", margin: "0 auto" }} />
        <footer>
          <p>
            <span>
              <i class="fal fa-arrow-circle-down"></i>
            </span>
            <span>Install App</span>
          </p>
        </footer>
      </div>
    );
}

export default UserLeftBlock
