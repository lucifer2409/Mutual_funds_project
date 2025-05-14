import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import './EquityFunds.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const EquityFunds = () => {
    return (
        <>
            <Navbar />
            <div className="equity-container">
                {/* Header with "Back" link */}
                <div className="equity-header">
                    <Link to="/" className="back-link">
                        <span>←</span> Equity Funds (6)
                    </Link>

                    <div className="header-filters">
                        <div className="annual-returns">
                            Annual Returns <span>1 YEAR ↓</span>
                        </div>
                        <div className="returns">
                            Returns <span>HIGH TO LOW ↓</span>
                        </div>
                    </div>
                </div>

                {/* Fund Cards Grid */}
                <div className="fund-cards-grid">
                    {/* Repeating the same card structure 6 times */}
                    {[...Array(6)].map((_, index) => (
                        <div className="fund-card" key={index}>
                            <div className="card-content">
                                <div className='top-heading-card-content'>
                                    <h3 className="fund-name">Wealth Large Cap Fund</h3>
                                    <div className="fund-type">
                                        LARGE CAP
                                    </div>
                                </div>
                                <div className='returns-section'>
                                    <div className='leftsideofreturnsection'>
                                        <h1 className='headingofleftsideofreturnsection'>Annualized returns</h1>
                                        <div className='bottomsectionofleftsidereturnsection'>
                                            <div className='defaultselectedbutton'>
                                                1Y
                                            </div>
                                            <div className='otherbuttons'>
                                                3Y
                                            </div>
                                            <div className='otherbuttons'>
                                                5Y
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rightsideofreturnsection'>
                                        <span>2.62%</span>
                                    </div>
                                </div>

                                <div className='investment-div'>
                                    <div className='leftsideofinvestmentdiv'>
                                        <div id='insideleftsideofinvestmentdiv'>
                                            <span id='topsectionofleftsideofinvestmentdiv'>
                                                Risk Factor
                                            </span>
                                            <span id='bottomsectionofleftsideofinvestmentdiv'>
                                                Very High Riskinfo
                                            </span>
                                        </div>
                                    </div>
                                    <div className='leftsideofinvestmentdiv'>
                                        <div id='insideleftsideofinvestmentdiv'>
                                            <span id='topsectionofleftsideofinvestmentdiv'>
                                                Start investing with min
                                            </span>
                                            <span id='bottomsectionofleftsideofinvestmentdiv'>
                                                ₹100
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className='buttonsgroup'>
                                    <button className="invest-btn">
                                        Know more
                                    </button>
                                    <button className="gold-button-invest">
                                        Invest
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id='mainframe8'>
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
            </div>
        </>
    );
};

export default EquityFunds;
