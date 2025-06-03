import React from 'react';

export default function Portfolio() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Work</h1>
      <p>Check out our latest productions on YouTube:</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/videoseries?list=UU-AgQ4Z6QDG3CrQK6U3KtnQ"
          title="Rasila Infotainment Videos"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/B2UnZNhU7kk"
          title="Sample Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
