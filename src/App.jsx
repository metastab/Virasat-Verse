import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MapContainer from './components/MapSection/MapContainer';
import DetailPanel from './components/DetailPanel/DetailPanel';
import OverlayFooter from './components/OverlayFooter/OverlayFooter';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <header className="app-header">
        <Navbar />
      </header>

      {/* Main 3-Column Work Area */}
      <main className="app-main-layout">
        {/* Left Heritage Filter Sidebar */}
        <section className="app-sidebar-pane" aria-label="Heritage Navigation">
          <Sidebar />
        </section>

        {/* Center Interactive Map Section (Empty container prepared for map mount) */}
        <section className="app-map-pane" aria-label="Cultural Heritage Map Section">
          <MapContainer />
        </section>

        {/* Right Cultural Detail & Exploration Panel */}
        <section className="app-detail-pane" aria-label="Regional Heritage Details">
          <DetailPanel />
        </section>
      </main>

      {/* Persistent Overlay Footer Artwork across all content */}
      <OverlayFooter />
    </div>
  );
}
