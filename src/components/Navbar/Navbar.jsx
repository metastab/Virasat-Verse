import React, { useState } from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    'Home',
    'Explore',
    'AI Guide',
    'Stories',
    'Communities',
    'Games',
    'About'
  ];

  return (
    <header className="navbar-container">
      {/* Brand / Logo */}
      <div className="navbar-brand">
        <div className="navbar-logo-icon" aria-hidden="true">
          {/* Stylized Lotus Motif */}
          <svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="lotus-svg">
            <path d="M18 2C18 2 12 12 12 18C12 21.3 14.7 24 18 24C21.3 24 24 21.3 24 18C24 12 18 2 18 2Z" fill="#C85A32" />
            <path d="M18 10C18 10 9 14 6 20C4.5 23 7 26 10.5 25C14.5 24 17.5 21 18 19V10Z" fill="#DF7A44" opacity="0.9" />
            <path d="M18 10C18 10 27 14 30 20C31.5 23 29 26 25.5 25C21.5 24 18.5 21 18 19V10Z" fill="#DF7A44" opacity="0.9" />
            <path d="M18 16C18 16 4 19 2 24C1 26.5 3.5 27.5 6 26.5C11 24.5 16 22 18 21V16Z" fill="#E89B5F" opacity="0.8" />
            <path d="M18 16C18 16 32 19 34 24C35 26.5 32.5 27.5 30 26.5C25 24.5 20 22 18 21V16Z" fill="#E89B5F" opacity="0.8" />
          </svg>
        </div>
        <div className="navbar-brand-text">
          <span className="navbar-title">VirasatVerse</span>
          <span className="navbar-subtitle">Discover • Learn • Preserve • Together</span>
        </div>
      </div>

      {/* Main Navigation Links */}
      <nav className="navbar-links" aria-label="Main Navigation">
        {navLinks.map((link) => (
          <button
            key={link}
            type="button"
            className={`navbar-link ${activeTab === link ? 'active' : ''}`}
            onClick={() => setActiveTab(link)}
          >
            {link}
            {activeTab === link && <span className="navbar-active-indicator" />}
          </button>
        ))}
      </nav>

      {/* Right Controls: Search, Language & User Avatar */}
      <div className="navbar-actions">
        <div className="navbar-search-box">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            placeholder="Search places, festivals, art, food..."
            className="navbar-search-input"
          />
        </div>

        <button type="button" className="navbar-lang-selector" aria-label="Change Language">
          <Globe size={17} className="lang-globe-icon" />
          <span className="lang-text">EN</span>
          <ChevronDown size={14} className="lang-chevron" />
        </button>

        <div className="navbar-user-avatar" title="Account profile">
          <span>A</span>
        </div>
      </div>
    </header>
  );
}
