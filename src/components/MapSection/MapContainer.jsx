import React, { useState } from 'react';
import { Plus, Minus, Crosshair } from 'lucide-react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { feature } from 'topojson-client';
import indiaTopoJson from '../../../data/india.json';
import './MapContainer.css';

// Extract the states geojson data from the topojson file
const indiaGeoJson = feature(indiaTopoJson, indiaTopoJson.objects.states).features;

export default function MapContainer() {
  const legendItems = [
    { label: 'Festivals', color: 'var(--legend-festivals)' },
    { label: 'Art & Crafts', color: 'var(--legend-crafts)' },
    { label: 'Monuments', color: 'var(--legend-monuments)' },
    { label: 'Food', color: 'var(--legend-food)' },
    { label: 'Nature', color: 'var(--legend-nature)' }
  ];

  // Map state for panning and zooming
  const defaultCenter = [80, 22]; // Center coordinates of India for a better fit
  const [position, setPosition] = useState({ coordinates: defaultCenter, zoom: 1 });
  
  // Interactive states
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleReset = () => {
    setPosition({ coordinates: defaultCenter, zoom: 1 });
    setSelectedState(null); // Clear selection on map reset
  };

  const handleMoveEnd = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="map-section-wrapper">
      <div className="map-frame">
        
        {/* Selected State Banner (Top Center) */}
        {selectedState && (
          <div className="map-selected-banner">
            <span className="map-selected-banner-label">Selected Region</span>
            <h3 className="map-selected-banner-name">{selectedState}</h3>
          </div>
        )}

        {/* The interactive SVG Map of India */}
        <div id="map-container" className="map-empty-viewport" aria-label="Interactive Map Area" style={{ backgroundColor: 'transparent', padding: '20px' }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1100 }}
            style={{ width: "100%", height: "100%", outline: "none" }}
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              maxZoom={4}
            >
              <Geographies geography={indiaGeoJson}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.st_nm;
                    const isSelected = selectedState === stateName;
                    
                    return (
                      <Geography
                        key={geo.rsmKey || geo.properties.st_code || geo.id}
                        geography={geo}
                        className={`geography-path ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedState(stateName)}
                        onDoubleClick={() => setSelectedState(null)}
                        onMouseEnter={() => setHoveredState(stateName)}
                        onMouseLeave={() => setHoveredState(null)}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Map Floating HUD: Zoom Controls (Top Left) */}
        <div className="map-hud-controls" aria-label="Map Controls">
          <button type="button" className="map-hud-btn" title="Zoom In" aria-label="Zoom in" onClick={handleZoomIn}>
            <Plus size={16} />
          </button>
          <button type="button" className="map-hud-btn" title="Zoom Out" aria-label="Zoom out" onClick={handleZoomOut}>
            <Minus size={16} />
          </button>
          <button type="button" className="map-hud-btn" title="Center View" aria-label="Center view" onClick={handleReset}>
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

        {/* Map Floating Legend (Bottom Right of Map) */}
        <div className="map-legend-bar" aria-label="Map Legend">
          {legendItems.map((item) => (
            <div key={item.label} className="map-legend-item">
              <span className="legend-dot" style={{ backgroundColor: item.color }} />
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Hover Tooltip (Bottom Left of Map) */}
        {hoveredState && (
          <div className="map-tooltip">
            {hoveredState}
          </div>
        )}

      </div>
    </div>
  );
}
