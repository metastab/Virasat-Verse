import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Music,
  BookOpen,
  Landmark,
  Users,
  Utensils
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState('Cultural Map');

  const categories = [
    {
      id: 'Cultural Map',
      label: 'Cultural Map',
      icon: <Compass size={17} />
    },
    {
      id: 'Festivals',
      label: 'Festivals',
      icon: <Calendar size={17} />
    },
    {
      id: 'Art & Crafts',
      label: 'Art & Crafts',
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Pottery / Urn silhouette */}
          <path d="M7 3h10M8 3c0 3-3 6-3 10a7 7 0 0 0 14 0c0-4-3-7-3-10M9 21h6" />
        </svg>
      )
    },
    {
      id: 'Food',
      label: 'Food',
      icon: <Utensils size={17} />
    },
    {
      id: 'Music & Dance',
      label: 'Music & Dance',
      icon: <Music size={17} />
    },
    {
      id: 'Folk Stories',
      label: 'Folk Stories',
      icon: <BookOpen size={17} />
    },
    {
      id: 'Monuments',
      label: 'Monuments',
      icon: <Landmark size={17} />
    },
    {
      id: 'Communities',
      label: 'Communities',
      icon: <Users size={17} />
    }
  ];

  return (
    <aside className="sidebar-container" aria-label="Heritage categories sidebar">
      {/* Category Menu List */}
      <nav className="sidebar-nav">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="sidebar-item-icon">{cat.icon}</span>
              <span className="sidebar-item-label">{cat.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Inspirational Quote Block */}
      <div className="sidebar-footer-quote">
        <span className="quote-mark">“</span>
        <p className="quote-text">
          Many cultures<br />
          One home<br />
          <em>Bharat.</em>
        </p>
      </div>
    </aside>
  );
}
