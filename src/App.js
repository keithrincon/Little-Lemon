import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <>
    <Header />
      <Nav logo={logo} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
