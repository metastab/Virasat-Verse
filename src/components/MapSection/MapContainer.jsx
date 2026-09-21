import React from 'react';
import { Plus, Minus, Crosshair } from 'lucide-react';
import './MapContainer.css';

export default function MapContainer() {
  const legendItems = [
    { label: 'Festivals', color: 'var(--legend-festivals)' },
    { label: 'Art & Crafts', color: 'var(--legend-crafts)' },
    { label: 'Monuments', color: 'var(--legend-monuments)' },
    { label: 'Food', color: 'var(--legend-food)' },
    { label: 'Nature', color: 'var(--legend-nature)' }
  ];

  return (
    <div className="map-section-wrapper">
      {/* Outer Map Frame Container spanning full central area */}
      <div className="map-frame">
        {/*
          Empty container for the interactive map.
          As specified: DO NOT CREATE THE MAP (it will be done later).
          Mount your Leaflet, MapLibre, or custom SVG map inside this #map-container.
        */}
        <div id="map-container" className="map-empty-viewport" aria-label="Interactive Map Area">
          <div className="map-placeholder-indicator">
            <span className="map-placeholder-title">Cultural Heritage Map</span>
            <span className="map-placeholder-hint">Container ready for Leaflet / MapLibre integration</span>
          </div>
        </div>

        {/* Map Floating HUD: Zoom Controls (Top Left) */}
        <div className="map-hud-controls" aria-label="Map Controls">
          <button type="button" className="map-hud-btn" title="Zoom In" aria-label="Zoom in">
            <Plus size={16} />
          </button>
          <button type="button" className="map-hud-btn" title="Zoom Out" aria-label="Zoom out">
            <Minus size={16} />
          </button>
          <button type="button" className="map-hud-btn" title="Center View" aria-label="Center view">
            <Crosshair size={15} />
          </button>
        </div>

        {/* Map Floating HUD: Compass Rose (Top Right) */}
        <div className="map-hud-compass" aria-label="Compass Rose">
          <svg viewBox="0 0 48 48" className="compass-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="19" stroke="#71675a" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
            <text x="24" y="9" textAnchor="middle" fill="#2d261e" fontSize="8" fontFamily="var(--font-serif)" fontWeight="bold">N</text>
            <text x="24" y="44" textAnchor="middle" fill="#71675a" fontSize="7" fontFamily="var(--font-sans)">S</text>
            <text x="43" y="26.5" textAnchor="middle" fill="#71675a" fontSize="7" fontFamily="var(--font-sans)">E</text>
            <text x="5" y="26.5" textAnchor="middle" fill="#71675a" fontSize="7" fontFamily="var(--font-sans)">W</text>
            <path d="M24 11L26.5 24H21.5L24 11Z" fill="#B84A28" />
            <path d="M24 37L21.5 24H26.5L24 37Z" fill="#57524C" />
            <path d="M11 24L24 21.5V26.5L11 24Z" fill="#71675A" opacity="0.8" />
            <path d="M37 24L24 26.5V21.5L37 24Z" fill="#71675A" opacity="0.8" />
            <circle cx="24" cy="24" r="2.5" fill="#fcfaf6" stroke="#2d261e" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Map Floating Legend (Bottom of Map) */}
        <div className="map-legend-bar" aria-label="Map Legend">
          {legendItems.map((item) => (
            <div key={item.label} className="map-legend-item">
              <span className="legend-dot" style={{ backgroundColor: item.color }} />
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
