import React, { useState } from 'react';
import {
  Heart,
  Glasses,
  Mountain,
  Users,
  Languages,
  Award,
  Bot,
  ArrowRight,
  ChevronRight,
  Trophy,
  Share2
} from 'lucide-react';
import heroImage from '../../assets/himachal_temple_hero.jpg';
import kulluDussehraImg from '../../assets/kullu_dussehra.jpg';
import natiDanceImg from '../../assets/nati_dance.jpg';
import woodenTempleImg from '../../assets/wooden_temple.jpg';
import himachaliApplesImg from '../../assets/himachali_apples.jpg';
import './DetailPanel.css';

export default function DetailPanel() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Festivals', 'Culture', 'Places', 'Food', 'People'];

  const highlightCards = [
    { title: 'Kullu Dussehra', image: kulluDussehraImg },
    { title: 'Nati Dance', image: natiDanceImg },
    { title: 'Wooden Temples', image: woodenTempleImg },
    { title: 'Himachali Cuisine', image: himachaliApplesImg }
  ];

  return (
    <aside className="detail-panel-container" aria-label="Cultural details pane">
      {/* Top Scenic Banner */}
      <div className="detail-hero-card">
        <img
          src={heroImage}
          alt="Himachal Pradesh scenic pagoda temple"
          className="detail-hero-img"
        />
        <div className="detail-hero-quote">
          <span>"Where the mountains sing ancient stories"</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="detail-content-body">
        {/* Title and Top Actions */}
        <div className="detail-header-row">
          <div className="detail-header-title-wrap">
            <h2 className="detail-region-title">Himachal Pradesh</h2>
            <p className="detail-region-subtitle">
              Land of Gods, Forests and Living Traditions
            </p>
          </div>
          <div className="detail-action-buttons">
            <button
              type="button"
              className={`detail-icon-btn heart-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Add to favorites"
              title="Save to favorites"
            >
              <Heart size={18} fill={isFavorite ? '#e11d48' : 'none'} color={isFavorite ? '#e11d48' : 'currentColor'} />
            </button>
            <button
              type="button"
              className="detail-vr-btn"
              title="Enter Virtual Reality experience"
            >
              <Glasses size={16} />
              <span>Visit (VR)</span>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="detail-tabs-wrapper">
          <div className="detail-tabs-list">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`detail-tab-pill ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button type="button" className="detail-tab-scroll-btn" aria-label="More tabs">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Quick Stats Grid (2 Cards per Row for Breathing Space) */}
        <div className="detail-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Mountain size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Capital</span>
              <span className="stat-value">Shimla</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Users size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Population</span>
              <span className="stat-value">~ 73 lakhs</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Languages size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Languages</span>
              <span className="stat-value">Hindi, Pahari</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap">
              <Award size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Famous For</span>
              <span className="stat-value">Kullu Dussehra, Nati</span>
            </div>
          </div>
        </div>

        {/* Descriptive Narrative */}
        <div className="detail-description">
          <p>
            Himachal Pradesh, nestled in the lap of the Himalayas, is a land of
            snow-clad peaks, serene valleys and a rich cultural heritage. From the
            grand Kullu Dussehra to the rhythmic Nati dance, from ancient temples
            to vibrant handicrafts, Himachal is a beautiful blend of nature,
            spirituality and living traditions.
          </p>
        </div>

        {/* AI Assistant Banner */}
        <div className="detail-ai-assistant-card">
          <div className="ai-icon-box">
            <Bot size={22} />
          </div>
          <div className="ai-text-box">
            <h4 className="ai-card-title">Ask VirasatVerse AI</h4>
            <p className="ai-card-subtitle">
              Learn about Himachal's festivals, places, people and more...
            </p>
          </div>
          <button type="button" className="ai-arrow-btn" aria-label="Ask AI">
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Highlights Media Cards */}
        <div className="detail-highlights-section">
          <div className="highlights-grid">
            {highlightCards.map((card) => (
              <div key={card.title} className="highlight-item-card">
                <div className="highlight-thumb-frame">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="highlight-thumb-img"
                  />
                </div>
                <span className="highlight-card-title">{card.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards: Play & Learn / Contribute */}
        <div className="detail-cta-grid">
          <div className="cta-split-card">
            <div className="cta-icon trophy-icon">
              <Trophy size={19} />
            </div>
            <div className="cta-split-info">
              <h5 className="cta-split-title">Play & Learn</h5>
              <p className="cta-split-desc">Quizzes, challenges and rewards</p>
            </div>
            <ArrowRight size={15} className="cta-split-arrow" />
          </div>

          <div className="cta-split-card">
            <div className="cta-icon community-icon">
              <Share2 size={19} />
            </div>
            <div className="cta-split-info">
              <h5 className="cta-split-title">Contribute</h5>
              <p className="cta-split-desc">Share stories, photos and knowledge</p>
            </div>
            <ArrowRight size={15} className="cta-split-arrow" />
          </div>
        </div>

        {/* Heritage Script Sign-off */}
        <div className="detail-signoff-quote">
          <span>Our heritage, Our future</span>
        </div>

        {/* Additional height spacer for debug purposes */}
        <div className="detail-debug-spacer" aria-hidden="true" />
      </div>
    </aside>
  );
}
