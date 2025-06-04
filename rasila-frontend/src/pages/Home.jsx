import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>Welcome to Rasila Infotainment</h1>
          <p>Your Complete Audio & Video Production Partner</p>
        </div>
      </section>

      <section className="page-section">
        <h1>🎧 Welcome to Rasila Infotainment</h1>
        <p>
          We are a complete audio and video production studio based in India, offering top-quality recording, mixing, mastering, music production, and video editing services under one roof.
        </p>
        <p>
          Whether you’re a solo artist, a band, a filmmaker, or a content creator — we bring your vision to life with world-class production.
        </p>
        <Link to="/services">
          <button>Explore Our Services</button>
        </Link>
      </section>
    </>
  );
}
