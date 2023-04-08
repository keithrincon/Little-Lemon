import React from 'react';

function Nav(props) {
  return (
   <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={props.logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
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