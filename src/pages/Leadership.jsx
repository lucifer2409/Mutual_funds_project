import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import '../styles/Leadership.css';
import mapImage from '../assets/map.svg'; // You'll need to add this image
import logo from '../assets/Logo.svg';
import leaderImage1 from '../assets/avatar.svg'; // Add placeholder leader images
import leaderImage2 from '../assets/avatar.svg'; // Add placeholder leader images
import leaderImage3 from '../assets/avatar.svg'; // Add placeholder leader images

const Leadership = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>More Than a Mutual Fund. <span className="gold-text">A Mindset.</span></h1>
          
          <p className="hero-paragraph">
            Our Mutual Fund is one of the leading companies in the professional financial industry created by its depth to meticulous learning across equity, debt, and capital markets. Our roots always the way we invest, with precision discipline, and an eye to protect long-term in a volatile marketplace.
          </p>
          
          <p className="hero-paragraph">
            We don't just follow trends. We do the work – options and emerging beliefs reporting, we connect to deep diligence that connects our outcomes will just mindsets we follow contextual investment opportunities, benefiting entrepreneurs and capital providers.
          </p>
          
          <p className="hero-paragraph">
            That's our ultimate quality filter to watch liquidity, conventionality, and market in your interest. It's no accident? Backed by experienced licence people and a clear mandate, we help clients navigate challenging environments professionally.
          </p>
        </div>
      </div>

      {/* The Thinking Section */}
      <div className="thinking-section">
        <div className="thinking-header">
          <h2>The Thinking:</h2>
          <h1>Where investing <br/>means staying involved.</h1>
        </div>

        {/* Leaders Section */}
        <div className="leaders-section">
          <h2>Leaders</h2>
          
          <div className="leaders-carousel">
            <div className="leader-card active">
              <div className="leader-image">
                <img src={leaderImage1} alt="Priyasmita Poddar" />
              </div>
              <div className="leader-content">
                <h3>Priyasmita Poddar</h3>
                <span className="leader-title">CEO</span>
                <p className="leader-bio">
                  Always believed the power of long-term thinking. Since leading the Bank's corporate finance, I've focused on connecting the dots of liquidity requirements and creating post-transaction value. 
                </p>
                <p className="leader-bio">
                  Previously, worked at General Electric and JP Morgan managing investments. Handled tactics in operational finance, private equity, and mergers & acquisitions.
                </p>
                <div className="read-more">
                  <a href="#" className="read-more-link">READ MORE</a>
                </div>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src={leaderImage2} alt="Debashish Sensarma" />
              </div>
              <div className="leader-content">
                <h3>Debashish Sensarma</h3>
                <span className="leader-title">CIO</span>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src={leaderImage3} alt="Dr. Junaid" />
              </div>
              <div className="leader-content">
                <h3>Dr. Junaid</h3>
                <span className="leader-title">MD</span>
              </div>
            </div>

            <div className="leader-controls">
              <button className="carousel-dot active"></button>
              <button className="carousel-dot"></button>
              <button className="carousel-dot"></button>
              <button className="carousel-dot"></button>
            </div>
          </div>
        </div>

        {/* Trustees Section */}
        <div className="trustees-section">
          <h2>Trustee</h2>
          
          <div className="trustees-grid">
            {[...Array(4)].map((_, index) => (
              <div className="trustee-card" key={`trustee-${index}`}>
                <img src={leaderImage1} alt="Trustee" className="trustee-image" />
                <h3>Mr. Mahesh Lakhani</h3>
                <span className="trustee-title">Trustee</span>
                <p className="trustee-bio">
                  Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development.
                </p>
                <button className="read-more-btn">READ MORE</button>
              </div>
            ))}
          </div>
        </div>

        {/* Directors Section */}
        <div className="directors-section">
          <h2>Directors</h2>
          
          <div className="directors-grid">
            {[...Array(4)].map((_, index) => (
              <div className="director-card" key={`director-${index}`}>
                <img src={leaderImage1} alt="Director" className="director-image" />
                <h3>Mr. Hashmat Dangarwa</h3>
                <span className="director-title">Director</span>
                <p className="director-bio">
                  Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development.
                </p>
                <button className="read-more-btn">READ MORE</button>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="advisory-section">
          <div className="advisory-grid">
            <div className="advisory-card">
              <div className="advisory-content">
                <p className="advisory-quote">
                  Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development.
                </p>
                <div className="advisory-person">
                  <img src={leaderImage1} alt="Advisory" className="advisory-image" />
                  <div className="advisory-details">
                    <h3>Umesh Sharma</h3>
                    <span className="advisory-title">Advisor</span>
                  </div>
                </div>
                <button className="read-more-btn">READ MORE</button>
              </div>
            </div>

            <div className="advisory-card">
              <div className="advisory-content">
                <p className="advisory-quote">
                  Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development.
                </p>
                <div className="advisory-person">
                  <img src={leaderImage2} alt="Advisory" className="advisory-image" />
                  <div className="advisory-details">
                    <h3>Fatima Zahra</h3>
                    <span className="advisory-title">Advisor</span>
                  </div>
                </div>
                <button className="read-more-btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-container">
          <div className="partners-section">
            <div className="partner-box">
              <h3 className="partner-heading">Pantomath Capital</h3>
              <p className="partner-text">
                Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development. 
                It is often used as a temporary placeholder in layouts, designs, and mockups before the final copy is ready.
              </p>
              <button className="partner-button">KNOW MORE</button>
            </div>
            
            <div className="partner-box">
              <h3 className="partner-heading">Partners</h3>
              <p className="partner-text">
                Lorem ipsum is a dummy or placeholder text used in typesetting, printing, and web development. 
                It is often used as a temporary placeholder in layouts, designs, and mockups before the final copy is ready.
              </p>
              <button className="partner-button">KNOW MORE</button>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="offices-section">
          <div className="offices-container">
            <h2>Our Offices</h2>
            <p className="offices-text">
              Lorem ipsum is a dummy or placeholder text used in typesetting and web development. It is often used as a temporary placeholder in layouts, designs, and mockups before the final copy is ready.
            </p>

            <div className="offices-content">
              <div className="map-container">
                <img src={mapImage} alt="Office Locations Map" className="office-map" />
              </div>
              
              <div className="offices-info">
                <div className="office-detail">
                  <label>Head Office:</label>
                  <input type="text" readOnly value="Mumbai" className="office-input" />
                </div>

                <div className="office-detail">
                  <label>Regional Office:</label>
                  <input type="text" readOnly value="Bengaluru" className="office-input" />
                </div>

                <div className="office-address">
                  <span className="office-icon">📍</span>
                  <p>Hashmatjee Building House, 12nd Floor, South Wing, Oomer GT. Road 400 001, Mumbai, MAHARASHTRA</p>
                </div>

                <div className="office-contact">
                  <span className="office-icon">📞</span>
                  <p>+91-800002132</p>
                </div>

                <div className="office-hours">
                  <span className="office-icon">⏰</span>
                  <p>Monday - Friday, 9:00 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer id="mainframe8">
        <div className="footer-container">
          <div className="footer-column logo-column">
            <div className="footer-logo">
              <img src={logo} alt="The Wealth Company" className="footer-logo-img" />
              <div className="footer-logo-text">
                <div className="company-name">The Wealth Company</div>
                <div className="company-subtitle">MUTUAL FUND</div>
              </div>
            </div>
          </div>
          <div className='mainframeoffootercolumn'>
            <div className="footer-column">
              <h3>Products Offered</h3>
              <ul className="footer-links">
                <li><a href="#">Equity Funds</a></li>
                <li><a href="#">Debt Funds</a></li>
                <li><a href="#">Hybrid Funds</a></li>
                <li><a href="#">Tax Saver Fund (ELSS)</a></li>
                <li><a href="#">International Funds</a></li>
                <li><a href="#">Domestic FOF's</a></li>
                <li><a href="#">Index Funds</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Products Offered</h3>
              <ul className="footer-links">
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Non Business Days</a></li>
                <li><a href="#">NAV History</a></li>
                <li><a href="#">IDCW</a></li>
                <li><a href="#">Total Expens Ration</a></li>
                <li><a href="#">Press Release</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Outer information</h3>
              <ul className="footer-links">
                <li><a href="#">Equity Funds</a></li>
                <li><a href="#">Debt Funds</a></li>
                <li><a href="#">Hybrid Funds</a></li>
                <li><a href="#">Tax Saver Fund (ELSS)</a></li>
                <li><a href="#">International Funds</a></li>
                <li><a href="#">Domestic FOF's</a></li>
                <li><a href="#">Index Funds</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
          <p>Copyright © 2025 Wealth Company Private Limited. | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Leadership;
