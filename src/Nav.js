import React from 'react';

function Nav(props) {
  return (
    <nav>
      <ul>
      <img src={props.logo} alt="Logo" />
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online </a></li>
        <li><a href="#">Login </a></li>
      </ul>
    </nav>
  );
}

export default Nav;