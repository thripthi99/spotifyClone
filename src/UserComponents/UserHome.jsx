import React from 'react'
import UserLeftBlock from './UserLeftBlock'
import UserrightBlock from './UserrightBlock'
import "./userblock.css";
const UserHome = () => {
    return (
      <section id="userblock">
        <article>
          <UserLeftBlock />
          <UserrightBlock />
        </article>
      </section>
    );
}

export default UserHome
