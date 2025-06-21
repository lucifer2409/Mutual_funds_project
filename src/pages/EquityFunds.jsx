import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import './EquityFunds.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import insta from '../assets/insta.svg';
import youtube from '../assets/youtube.svg';

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
        <div id='insideframeofmainframe8'>
          <img src={logo} alt="" />
          <div id='contentinsideframeofmainframe8'>
            <div id='insidecontentinsideframeofmainframe8'>
              <span id='titleofinsidecontentinsideframeofmainframe8'>
                QUICK LINK
              </span>
              <div className='linksofinsidecontentinsideframeofmainframe8'>

                <div className='linkseparator'>
                  <span className='linktitle2'>Our Funds</span>
                  <span className='goldenlink'>Coming soon...</span>
                </div>
                <div className='linkseparator'>
                  <span className='linktitle2'>Tools & Resources</span>
                  <span className='goldenlink'>Coming soon...</span>
                </div>
              </div>
            </div>
            <div id='insidecontentinsideframeofmainframe8'>
              <span id='titleofinsidecontentinsideframeofmainframe8'>
                Other Links
              </span>
              <div className='linksofinsidecontentinsideframeofmainframe8'>
                <Link className='linktitle2' to='/download-documents'>Downloads</Link>
                <Link className='linktitle2' to='/factsheet'>Fact Sheet</Link>
                <Link className='linktitle2' to='/disclosure'>Disclosures</Link>
                <Link className='linktitle2' to='/navs-page'>NAVs</Link>
                <Link className='linktitle2' to='/annual-reports'>Annual Reports</Link>
                <Link className='linktitle2' to='/investor-services'>Investor Services</Link>
                <Link className='linktitle2' to='/blogs'>Blogs</Link>
                <Link className='linktitle2' to='/total-expense-ratio'>Total expense ratio</Link>
                <Link className='linktitle2' to='/disclosure'>Disclosure</Link>


              </div>
            </div>
            <div id='insidecontentinsideframeofmainframe8'>
              <span id='titleofinsidecontentinsideframeofmainframe8'>
                SEBI
              </span>
              <div className='linksofinsidecontentinsideframeofmainframe8'>
                <Link className='linktitle2' to='/'>SEBI Smart ODR</Link>
                <Link className='linktitle2' to='/'>SEBI Scores</Link>
                <Link className='linktitle2' to='/'>SEBI Scores App (iOS)</Link>
                <Link className='linktitle2' to='/'>SEBI Scores App (Andriod)</Link>
              </div>
            </div>
            <div id='divforconnect'>
              <span id='titleofdivforconnect'>CONNECT WITH US</span>
              <div id='divinsideconnect'>
                <div className='socialmediaicondiv'>
                  <img src={facebook} alt="" className='socialmediaicon' />
                </div>
                <div className='socialmediaicondiv'>
                  <img src={twitter} alt="" className='socialmediaicon' />
                </div>
                <div className='socialmediaicondiv'>
                  <img src={linkedin} alt="" className='socialmediaicon' />
                </div>
                <div className='socialmediaicondiv'>
                  <img src={insta} alt="" className='socialmediaicon' />
                </div>
                <div className='socialmediaicondiv'>
                  <img src={youtube} alt="" className='socialmediaicon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span id='copyrighttext'>
          Copyright © 2025 Wealth Company Private Limited. | All rights reserved.
        </span>
      </div>
    </>
  );
};

export default EquityFunds;
