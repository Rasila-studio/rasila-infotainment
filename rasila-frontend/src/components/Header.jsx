import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ background: '#111', color: '#fff', padding: '10px' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>🎧 Rasila Infotainment</h2>
      <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px' }}>Services</Link>
      <Link to="/portfolio" style={{ color: 'white', margin: '0 10px' }}>Portfolio</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}
