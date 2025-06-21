import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import arrowrightline from './assets/arrowrightline.svg'
import arrowleftline from './assets/arrowleftline.svg'
import iceberg from './assets/iceberg.svg'
import animation from "./assets/animation.json";
import Blogs from './pages/Blogs'
import Blogsummary from './pages/Blogsummary'
import layer1 from './assets/Layer_1.svg'
import { ParallaxLayer } from '@react-spring/parallax'
import Navspage from './pages/NAVSpage'
import { Parallax } from '@react-spring/parallax'
import Disclosurepage from './pages/Disclosurepage'
import Polygon2 from './assets/Polygon2.svg'
import Annualreports from './pages/Annualreports'
import downaarrowwithcircle from './assets/downarrowwithcircle.svg'
import React from 'react'
import './App.css'
import Disclaimer from './pages/Disclaimer'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Totalexpenseratio from './pages/Totalexpenseratio'
import hand from './assets/hand.svg'
import OBJECTS from './assets/OBJECTS.svg'
import SignupForm from './SignupForm'
import Downloaddocumentspage from './pages/Downloaddocumentspage'
// import Form from './form'
import Polygon1 from './assets/Polygon1.svg'
import facebook from './assets/facebook.svg'
import Navbar from './Navbar'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import youtube from './assets/youtube.svg'
import insta from './assets/insta.svg'
import cash from './assets/cash.svg'
import Investorservicespage from './pages/Investorservicespage'
import leftarrow from './assets/leftarrow.svg'
import rightarrow from './assets/rightarrow.svg'
import content_slider from './assets/content_slider.svg'
import arrowdropright from './assets/arrowdropright.svg'
import logo from './assets/Logo.svg'  // Updated to match the correct case
import Leadership from './pages/Leadership'
import EquityFunds from './pages/EquityFunds';
import { GSAPProvider } from './context/GSAPContext';
import { useGSAP } from './context/GSAPContext';
import Factsheet from './pages/Factsheet'

function MainContent() {
  const { staggerCards } = useGSAP();
  const cardsRef = useRef(null);
  const heroRef = useRef(null);
  const calculatorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Animate cards with stagger effect
    const cards = document.querySelectorAll('.blackcards, .cardsofmiddleframe1, .cardsofmainframe4');
    if (cards.length > 0) {
      staggerCards(cards);
    }
  }, []);

  // Update state for the SIP calculator
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [calculationResults, setCalculationResults] = useState({
    investedAmount: 1200000,
    wealthGained: 1123390.76,
    futureValue: 2323390.76,
    gainPercentage: 50
  });

  // Handle calculator input changes with proper numeric parsing
  const handleInvestmentChange = (e) => {
    let value = parseFloat(e.target.value) || 0;
    if (value < 100) value = 100;
    if (value > 100000) value = 100000;
    setMonthlyInvestment(value);
  };

  const handleReturnChange = (e) => {
    let value = parseFloat(e.target.value) || 0;
    if (value < 0) value = 0;
    if (value > 30) value = 30;
    setExpectedReturn(value);
  };

  const handleDurationChange = (e) => {
    let value = parseInt(e.target.value) || 0;
    if (value < 1) value = 1;
    if (value > 50) value = 50;
    setInvestmentDuration(value);
  };

  // Calculate SIP returns - this now happens only on button click
  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 12 / 100;
    const n = parseFloat(investmentDuration) * 12;

    const investedAmount = P * n;
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const wealthGained = futureValue - investedAmount;
    const gainPercentage = Math.round((wealthGained / investedAmount) * 100);

    setCalculationResults({
      investedAmount,
      wealthGained,
      futureValue,
      gainPercentage: gainPercentage > 0 ? gainPercentage : 0
    });
  };

  // Format number as Indian currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <>
      <Navbar />
      <div id='mainframe1' ref={heroRef}>
        <div id='leftframe'>
          <div id='insideleftframe1'>
            <h1 id='header1'>
              Investing,
              the way It should Be
            </h1>
            <span id='contentinsideleftframe1'>
              Deep diligence before. Active involvement after
            </span>

          </div>
          <button className='goldenbutton' onClick={() => navigate('/equity-funds')}>
            Explore Fund
          </button>

        </div>
        <div id='rightframe'>
          <img src={layer1} alt="" />
        </div>
      </div>
      <div id='mainframe2' ref={cardsRef}>
        <div className='blackcards'>
          <div className='insideblackcardframe1'>
            <div className='imageframeforblackcard'>
              <div className='insideimageframeforblackcard'>
                <img src={Polygon1} alt="" className='polygonimage' />
                <img src={cash} alt="" className='cashimage' />
              </div>
            </div>
            <div className='contentframeforblackcard'>
              <div className='insidecontentframeforblackcard1'>
                <span id='contentinsideblackcard1'>
                  Why us?
                </span>
                <h2 className='contentinsideblackcard2'>
                  Where others Scan,
                  We scrutinize.
                </h2>
              </div>
              <div className='insidecontentframeforblackcard3'>
                It starts with investigative depth: not just numbers, but management intent, competitive realities, and what could go wrong. We go further because surface-level filters miss what matters.
              </div>
            </div>
          </div>

        </div>
        <div className='blackcards'>
          <div className='insideblackcardframe1'>
            <div className='imageframeforblackcard'>
              <div className='insideimageframeforblackcard'>
                <img src={Polygon1} alt="" className='polygonimage' />
                <img src={cash} alt="" className='cashimage' />
              </div>
            </div>
            <div className='contentframeforblackcard'>
              <div className='insidecontentframeforblackcard1'>
                <span id='contentinsideblackcard1'>
                  Investment Philosophy
                </span>
                <h2 className='contentinsideblackcard2'>
                  We're building the fund we wish existed.
                </h2>
              </div>
              <div id='downframeforblackcard'>
                <div className='div1'>
                  <span className='contentinsidedownframe1'>
                    Before Investing: we question, challenge, and verify.
                  </span>
                  <span className='contentinsidedownframe2'>
                    It's not enough for a company to look good on paper. We examine the business model, capital efficiency, leadership mindset, and long-term viability.
                  </span>
                </div>
                <div className='div1'>
                  <span className='contentinsidedownframe1'>
                    After: we stay informed and involved.
                  </span>
                  <span className='contentinsidedownframe2'>
                    Once we invest, we keep track—not just of performance, but of progress. We believe accountability creates outcomes.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className='background'>
        <img src={Polygon2} alt="" className='h-[40vh]' />
      </div> */}

      <div className='parallaxContainer1'>
        <div className='insideparallaxContainer1'>
          <div className='leftsideofparallaxContainer1'>
            <span id='whyustext'>Why us?</span>
            <span id='text2insideparallaxContainer1'>
              Where Others  Scan,
              We Scrutinize.
            </span>
            <span id='text3insideparallaxContainer1'>
              It starts with investigative depth: not just numbers, but management intent, competitive realities, and what could go wrong. We go further because surface-level filters miss what matters.
            </span>
            <img src={downaarrowwithcircle} alt="" className='w-[32px] h-[32px]' id='downarrow' />
          </div>
          <div className='rightsideofparallaxContainer1'>
            <img src={hand} alt="" />
          </div>
        </div>
        <div className='insideparallaxContainer2'>
          <div id='insideofinsideparallaxContainer2'>
            <div id='leftsideofinsideparallaxContainer2'>
              <span id='headingofinsideparallaxContainer2'>
                Investment Philosophy
              </span>
              <h2 id='contentinsideofinsideparallaxContainer2'>
                We're building the fund we wish existed.
              </h2>
              <div id='contentinsideofinsideparallaxContainer2div'>
                <span className='headingofcontentinsideofinsideparallaxContainer2div'>
                  Before Investing: we question, challenge, and verify.
                </span>
                <br />
                <span className='othercontentinsideofinsideparallaxContainer2div'>
                  It’s not enough for a company to look good on paper. We examine the business model, capital efficiency, leadership mindset, and long-term viability.
                </span>
              </div>
              <div id='contentinsideofinsideparallaxContainer2div'>
                <span className='headingofcontentinsideofinsideparallaxContainer2div'>
                  After: we stay informed and involved.
                </span>
                <br />
                <span className='othercontentinsideofinsideparallaxContainer2div'>
                  Once we invest, we keep track—not just of performance, but of progress. We believe accountability creates outcomes.
                </span>
              </div>
              <img src={downaarrowwithcircle} alt="" className='w-[32px] h-[32px]'/>
            </div>
            <div className='rightsideofparallaxContainer1'>
              <img src={iceberg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id='mainframe3'>
        <img src={leftarrow} alt="" className='iconbuttons' />
        <div id='middleframe1'>
          <div id='topframe'>
            <span id='contentinsidetopframe'>
              Selective funds for serious investors
            </span>
            <div id='buttonsinsidetopframe'>
              <button className='defaultgoldenbutton'>
                NFO
              </button>
              <button className='defaultgoldenbutton'>
                Equity
              </button>
              <button className='defaultgoldenbutton'>
                Index
              </button>
              <button className='defaultgoldenbutton'>
                Debt
              </button>
              <button className='defaultgoldenbutton'>
                Hybrid
              </button>
              <button className='defaultgoldenbutton'>
                ETF
              </button>
            </div>
          </div>
          <div id='middleframeofmiddleframe1'>
            <div className='cardsofmiddleframe1'>
              <div className='topframeofcard'>
                <span id='textinsidetopframe'>The power of stable, trusted companies</span>
              </div>
              <div className='bottomframeofcard'>
                <div className='insidebottomframeofcard1'>
                  <span className='top1'>LARGE CAP</span>
                  <h2 className='top2'>Wealth Large Cap Fund</h2>
                </div>
                <div className='insidebottomframeofcard2'>
                  <span className='percent'>
                    2.62%
                  </span>
                  <div className='insidepercent'>
                    <button className='insidepercentbuttons'>1Y</button>
                    <button className='insidepercentbuttons'>3Y</button>
                    <button className='insidepercentbuttons'>5Y</button>
                  </div>
                </div>
                <div className='insidebottomframeofcard3'>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                </div>
                <button className='blackbutton'>
                  See more
                </button>
              </div>
            </div>
            <div className='cardsofmiddleframe1'>
              <div className='topframeofcard'>
                <span id='textinsidetopframe'>The power of stable, trusted companies</span>
              </div>
              <div className='bottomframeofcard'>
                <div className='insidebottomframeofcard1'>
                  <span className='top1'>LARGE CAP</span>
                  <h2 className='top2'>Wealth Large Cap Fund</h2>
                </div>
                <div className='insidebottomframeofcard2'>
                  <span className='percent'>
                    2.62%
                  </span>
                  <div className='insidepercent'>
                    <button className='insidepercentbuttons'>1Y</button>
                    <button className='insidepercentbuttons'>3Y</button>
                    <button className='insidepercentbuttons'>5Y</button>
                  </div>
                </div>
                <div className='insidebottomframeofcard3'>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                </div>
                <button className='blackbutton'>
                  See more
                </button>
              </div>
            </div>
            <div className='cardsofmiddleframe1'>
              <div className='topframeofcard'>
                <span id='textinsidetopframe'>The power of stable, trusted companies</span>
              </div>
              <div className='bottomframeofcard'>
                <div className='insidebottomframeofcard1'>
                  <span className='top1'>LARGE CAP</span>
                  <h2 className='top2'>Wealth Large Cap Fund</h2>
                </div>
                <div className='insidebottomframeofcard2'>
                  <span className='percent'>
                    2.62%
                  </span>
                  <div className='insidepercent'>
                    <button className='insidepercentbuttons'>1Y</button>
                    <button className='insidepercentbuttons'>3Y</button>
                    <button className='insidepercentbuttons'>5Y</button>
                  </div>
                </div>
                <div className='insidebottomframeofcard3'>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                  <div id='leftcontainerofinsidebottomframeofcard3'>
                    <span id='textinsideleftcontainerofinsidebottomframeofcard3'>
                      Total investment
                    </span>
                    <div className='container1'>
                      ₹10,000
                    </div>
                  </div>
                </div>
                <button className='blackbutton'>
                  See more
                </button>
              </div>
            </div>

          </div>
          <img src={content_slider} alt="" id='contentslider' />
        </div>
        <img src={rightarrow} alt="" className='iconbuttons' />
      </div>
      <div id='mainframe4'>
        <h1 id='headinginsidemainframe4'>
          Market insights
        </h1>
        <div className='insidecontentofmainframe4'>
          <div className='cardsofmainframe4'>
            <h2 className='headingofcard'>
              Daily Market Update
            </h2>
            <div className='contentinsidecard'>
              <div className='insidecontentinsidecard1'>
                <img src={OBJECTS} alt="" className='OBJECTSIMAGE' />
              </div>
              <div className='insidecontentinsidecard2'>
                <div className='insidecontentinsidecard3'>
                  <div className='insidecontentinsidecard4'>
                    <span className='content1insidecard4'>13 May, 2025</span>
                    <span className='content2insidecard4'>Daily Technical & Derivatives Report</span>
                  </div>
                  <span className='content3insidecard4'>
                    The domestic currency market remained closed due to Buddha Purnima.The euro weakened against the U.S. dollar as the U.S. and China agreed to temporarily re...
                  </span>
                </div>
                <div className='bottomdivformainframe4'>
                  <div id='leftdivformainframe4'>
                    <span id='readmore'>Read more</span>
                    <img src={arrowdropright} alt="" className='rightarrowdrop' />
                  </div>
                  <div id='rightdivformainframe4'>
                    <img src={arrowrightline} alt="" className='arrowleftline' />
                    <img src={arrowleftline} alt="" className='arrowrightline' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cardsofmainframe4'>
            <h2 className='headingofcard'>
              Daily Market Update
            </h2>
            <div className='contentinsidecard'>
              <div className='insidecontentinsidecard1'>
                <img src={OBJECTS} alt="" className='OBJECTSIMAGE' />
              </div>
              <div className='insidecontentinsidecard2'>
                <div className='insidecontentinsidecard3'>
                  <div className='insidecontentinsidecard4'>
                    <span className='content1insidecard4'>13 May, 2025</span>
                    <span className='content2insidecard4'>Daily Technical & Derivatives Report</span>
                  </div>
                  <span className='content3insidecard4'>
                    The domestic currency market remained closed due to Buddha Purnima.The euro weakened against the U.S. dollar as the U.S. and China agreed to temporarily re...
                  </span>
                </div>
                <div className='bottomdivformainframe4'>
                  <div id='leftdivformainframe4'>
                    <span id='readmore'>Read more</span>
                    <img src={arrowdropright} alt="" className='rightarrowdrop' />
                  </div>
                  <div id='rightdivformainframe4'>
                    <img src={arrowrightline} alt="" className='arrowleftline' />
                    <img src={arrowleftline} alt="" className='arrowrightline' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cardsofmainframe4'>
            <h2 className='headingofcard'>
              Daily Market Update
            </h2>
            <div className='contentinsidecard'>
              <div className='insidecontentinsidecard1'>
                <img src={OBJECTS} alt="" className='OBJECTSIMAGE' />
              </div>
              <div className='insidecontentinsidecard2'>
                <div className='insidecontentinsidecard3'>
                  <div className='insidecontentinsidecard4'>
                    <span className='content1insidecard4'>13 May, 2025</span>
                    <span className='content2insidecard4'>Daily Technical & Derivatives Report</span>
                  </div>
                  <span className='content3insidecard4'>
                    The domestic currency market remained closed due to Buddha Purnima.The euro weakened against the U.S. dollar as the U.S. and China agreed to temporarily re...
                  </span>
                </div>
                <div className='bottomdivformainframe4'>
                  <div id='leftdivformainframe4'>
                    <span id='readmore'>Read more</span>
                    <img src={arrowdropright} alt="" className='rightarrowdrop' />
                  </div>
                  <div id='rightdivformainframe4'>
                    <img src={arrowrightline} alt="" className='arrowleftline' />
                    <img src={arrowleftline} alt="" className='arrowrightline' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='mainframe5'>
        <div className="signup-container">
          <h2 className="signup-heading">New to The Wealth Company</h2>

          <div className="signup-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullname">Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter name"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Enter Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Enter Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email id"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pan">PAN Number</label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  placeholder="Eg. AIMAA000C"
                  className="form-control"
                />
              </div>
            </div>

            <button type="submit" className="proceed-btn">Proceed</button>
          </div>
        </div>
      </div>
      <div id='mainframe6' ref={calculatorRef}>
        <div className="sip-calculator-container">
          <div className="sip-calculator-left">
            <h2 className="sip-calculator-title">SIP Calculator</h2>

            <div className="sip-input-group">
              <div className='monthly-investment-group'>
                <label className="sip-label">Monthly Investment (₹)</label>
                <input
                  type="number"
                  value={monthlyInvestment}
                  onChange={handleInvestmentChange}
                  className="sip-input"
                  min="100"
                  max="100000"
                />
              </div>

              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={monthlyInvestment}
                onChange={handleInvestmentChange}
                className="sip-range"
              />
              <div className="range-values">
                <span>₹100</span>
                <span>₹1000</span>
                <span>₹100000</span>
              </div>
            </div>

            <div className="sip-input-group">
              <div className='expected-return-group'>
                <label className="sip-label">Expected Annual Return Rate (%)</label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={handleReturnChange}
                  className="sip-input"
                  min="0"
                  max="30"
                  step="0.1"
                />
              </div>

              <input
                type="range"
                min="0"
                max="30"
                step="0.1"
                value={expectedReturn}
                onChange={handleReturnChange}
                className="sip-range"
              />
              <div className="range-values">
                <span>0%</span>
                <span>12%</span>
                <span>30%</span>
              </div>
            </div>

            <div className="sip-input-group">
              <div className='investment-duration-group'>
                <label className="sip-label">Investment Duration (Years)</label>
                <input
                  type="number"
                  value={investmentDuration}
                  onChange={handleDurationChange}
                  className="sip-input"
                  min="1"
                  max="50"
                  step="1"
                />
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={investmentDuration}
                onChange={handleDurationChange}
                className="sip-range"
              />
              <div className="range-values">
                <span>1 year</span>
                <span>10</span>
                <span>50 year</span>
              </div>
            </div>

            <button className="calculate-btn" onClick={calculateSIP}>Calculate</button>
          </div>

          <div className="sip-calculator-right">
            <div className="donut-chart" style={{
              background: `conic-gradient(
                #2D603E 0% ${calculationResults.gainPercentage}%, 
                #AD8E53 ${calculationResults.gainPercentage}% 70%, 
                #282828 70% 100%
              )`
            }}>
              <div className="donut-inner">
                <span className="donut-value">{calculationResults.gainPercentage}%</span>
              </div>
            </div>

            <div className="investment-results">
              <div className="result-item">
                <div className="color-indicator black-indicator"></div>
                <div className="result-details">
                  <span className="result-title">Invested Amount</span>
                  <span className="result-amount">₹{formatCurrency(calculationResults.investedAmount)}</span>
                </div>
              </div>

              <div className="result-item">
                <div className="color-indicator gold-indicator"></div>
                <div className="result-details">
                  <span className="result-title">Wealth Gained</span>
                  <span className="result-amount">₹{formatCurrency(calculationResults.wealthGained)}</span>
                </div>
              </div>

              <div className="result-item">
                <div className="color-indicator green-indicator"></div>
                <div className="result-details">
                  <span className="result-title">Future Value</span>
                  <span className="result-amount">₹{formatCurrency(calculationResults.futureValue)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='mainframe7'>
        <h1 className='headinginsidemainframe7'>
          Connect with us
        </h1>
        <div className='contentinsidemainframe7'>
          <div className='socialmediaicons'>
            <img src={linkedin} alt="" className='socialmediaicon' />
          </div>
          <div className='socialmediaicons'>
            <img src={facebook} alt="" className='socialmediaicon' />
          </div>
          <div className='socialmediaicons'>
            <img src={twitter} alt="" className='socialmediaicon' />
          </div>
          <div className='socialmediaicons'>
            <img src={insta} alt="" className='socialmediaicon' />
          </div>
          <div className='socialmediaicons'>
            <img src={youtube} alt="" className='socialmediaicon' />
          </div>
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
}

function App() {
  return (
    <Router>
      <GSAPProvider>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/equity-funds" element={<EquityFunds />} />
          <Route path='/navs-page' element={<Navspage />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/total-expense-ratio" element={<Totalexpenseratio />} />
          <Route path="/factsheet" element={<Factsheet />} />
          <Route path='annual-reports' element={<Annualreports />} />
          <Route path="/download-documents" element={<Downloaddocumentspage />} />
          <Route path="/investor-services" element={<Investorservicespage />} />
          <Route path="/disclosure" element={<Disclosurepage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog-summary' element={<Blogsummary />} />
          {/* Add other routes as needed */}
        </Routes>
      </GSAPProvider>
    </Router>
  );
}

export default App;
