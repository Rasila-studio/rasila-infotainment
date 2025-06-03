import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'nowrap' }}>
        <span>Developed with ❤️ by Ayush Raj Sharma</span>
        <a
          href="https://www.instagram.com/ashade_darker"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'white', display: 'flex', alignItems: 'center', height: '22px' }}
          aria-label="Instagram"
        >
          {/* Instagram official logo SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ display: 'block' }}
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}