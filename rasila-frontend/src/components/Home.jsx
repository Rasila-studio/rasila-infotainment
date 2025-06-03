import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎧 Welcome to Rasila Infotainment</h1>
      <p>
        We are a complete audio and video production studio based in India, offering top-quality recording, mixing, mastering, music production, and video editing services under one roof.
      </p>
      <p>
        Whether you’re a solo artist, a band, a filmmaker, or a content creator — we bring your vision to life with world-class production.
      </p>
      <Link to="/services">
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>Explore Our Services</button>
      </Link>
    </div>
  );
}
