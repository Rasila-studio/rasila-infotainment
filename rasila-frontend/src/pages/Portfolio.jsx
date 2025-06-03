import React from "react";

export default function Portfolio() {
  return (
    <section className="page-section">
      <h1>Our Work</h1>
      <p>Check out our latest productions on YouTube:</p>

      <div className="portfolio-grid">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=UU-AgQ4Z6QDG3CrQK6U3KtnQ"
          title="Rasila Infotainment Videos"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/B2UnZNhU7kk"
          title="Sample Video"
          allowFullScreen
        />
      </div>
    </section>
  );
}
