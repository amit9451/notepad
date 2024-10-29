import React from 'react';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between', 
      alignItems: 'center',position: 'fixed',
      top: '0',width: '100%',zIndex: '1000'
    }}>
      <h2>My Notepad App</h2>
      <div>
        <a href="#home" style={{ color: '#fff', marginRight: '10px', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: '#fff', marginRight: '10px', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
