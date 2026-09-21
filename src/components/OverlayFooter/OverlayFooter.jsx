import React from 'react';
import footerOverlayImg from '../../assets/footer_03.png';
import './OverlayFooter.css';

/**
 * OverlayFooter:
 * Persistent footer overlay graphics using assets/footer_03.png.
 * Positioned above all content across the page (z-index: 100)
 * with pointer-events: none so clicks and interactions pass through seamlessly.
 */
export default function OverlayFooter() {
  return (
    <div className="overlay-footer-wrapper" aria-hidden="true">
      <img
        src={footerOverlayImg}
        alt=""
        className="overlay-footer-graphic"
      />
    </div>
  );
}
