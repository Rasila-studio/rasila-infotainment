import React from "react";

export default function Portfolio() {
  return (
    <section className="page-section">
      <h1>Our Work</h1>
      <p>Check out our latest productions on YouTube:</p>

      <div className="portfolio-grid">
        <iframe
          src="https://www.youtube.com/embed/dkx5Tod6o6k?si=gNK56no3lQyLqWlq&amp;controls=0"
          title="Trahimam by Ayush Raj Sharma"
          allowFullScreen autoplay
        />
        <iframe
          src="https://www.youtube.com/embed/K73JaxW6rGY?si=UHJjDc-8B3-kSrRi&amp;controls=0"
          title="Sample Video"
          allowFullScreen autoplay 
        />
      </div>
    </section>
  );
}
