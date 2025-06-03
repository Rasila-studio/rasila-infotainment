import React from 'react';

export default function Services() {
  const services = [
    "🎙️ Recording (Vocals, Instruments, Dubbing)",
    "🎚️ Mixing & Mastering (Industry standard quality)",
    "🎼 Music Production (Beat making, full songs)",
    "🎥 Video Editing (Music videos, reels, promos)",
    "📹 Full Video Shoots (Studio & Outdoor)",
    "🧑‍💻 Background Scores & Jingles for Ads",
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Services</h1>
      <ul>
        {services.map((service, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
