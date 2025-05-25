import React from 'react';
import Navbar from '../Navbar';
import '../App.css';
import '../styles/Leadership.css';
import mapImage from '../assets/map.svg'; // You'll need to add this image
import logo from '../assets/Logo.svg';
import timer from '../assets/timer.svg'; // Add timer icon image
import leaderImage1 from '../assets/avatar.svg'; // Add placeholder leader images
import leaderImage2 from '../assets/avatar.svg'; // Add placeholder leader images
import leaderImage3 from '../assets/avatar.svg'; // Add placeholder leader images
import birdimage from '../assets/bird.svg';
import rightarrow2 from '../assets/rightarrow2.svg'; // Add right arrow image
import add from '../assets/add.svg'; // Add add icon image
import rightarrow3 from '../assets/rightarrow3.svg'; // Add right arrow image for scrolling
import trailing_box from '../assets/trailing_box.svg'; // Add trailing box image
import { useRef } from 'react';
import Phone from '../assets/Phone.svg'; // Add phone icon image
import mapimage from '../assets/mapimage.png'; // Add map image
import layer0 from '../assets/layer0.png'; // Add layer image
import buildingline from '../assets/buildingline.svg'; // Add building line image
const Leadership = () => {
  const scrollContainerRef = useRef(null);
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 300, behavior: 'smooth' }); // Scroll 300px to right smoothly
    }
  };
  return (
    <>
      <Navbar />
      <div className='h-[519px] w-[1440px] bg-[#282828] flex pt-[24px] pr-[100px] pb-[100px] pl-[100px]
 flex-col items-center gap-[48px]'>
        <img src={birdimage} alt="" className='w-[1551px] h-[275px]' />
        <span id='firsttext'>More Than a Mutual Fund.  <span id='secondtext'>A Mindset.</span></span>
      </div>
      <div className='flex w-[1240px] p-[48px] justify-center items-center gap-[10px] rounded-[24px] bg-[#FFFFFF] shadow-[0px_4px_24px_rgba(0,0,0,0.10)] absolute top-[660px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <span className='othertext flex flex-col gap-[16px]'>
          <div>
            <span id='ourmutualfundtext'>Our Mutual Fund is part of The Wealth Company —</span> the asset and wealth management arm of the Pantomath Group, a name trusted for its depth in merchant banking, private equity, and capital markets. Our roots shape the way we invest: with precision, discipline, and an eye for potential long before it’s widely recognized.
          </div>
          <div>
            We don’t just follow trends. We do the work — upfront and ongoing. Before investing, we commit to deep due diligence that uncovers not just financials, but fundamentals. After investing, we stay engaged—tracking performance, identifying improvements, and staying informed as responsible shareholders.
          </div>
          <div>
            That’s our private equity DNA at work—quietly, constructively, and always in your interest. It’s an approach shaped by experience across private and public markets. One that reflects our core belief: that meaningful outcomes come from meaningful involvement.
          </div>
        </span>
      </div>

      <div className='flex w-[1240px] pt-[72px] pb-[72px] flex-col items-center gap-[48px] bg-[#ffffff] absolute top-[1400px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex w-[608px] flex-col items-center gap-[8px]'>
          <div id='toptextdiv'>
            <span id='insidetextfortoptextdiv'>The Thinking:</span>
          </div>
          <h2 id='belowtext'>
            Where investing
            means staying involved.
          </h2>
        </div>
        <div className='flex flex-col items-center gap-[24px] w-[100%]'>
          <span id='leaderstext'>Leaders</span>
          <div className='flex items-center gap-[24px] w-[1240px] overflow-auto scroll-container' ref={scrollContainerRef}>
            <div className='cardsfortheleaders'>
              <div id='frame1'>
                <span className='topofframe1'>Prasanna Pathak</span>
                <span className='bottomofframe1'>CEO</span>
              </div>
              <img src={leaderImage1} alt="" className='cardimage' />
              <div className='bottomframe1'>
                <div className='leftsideofbottomframe1'>
                  <span id='readpreview'>Read Preview</span>
                  <img src={rightarrow2} alt="" id='rightarrow2' />
                </div>
                <div id='rightsideofbottomframe1'>
                  <img src={add} alt="" id='addicon' />
                </div>
              </div>
            </div>
            <div className='cardsfortheleaders'>
              <div id='frame1'>
                <span className='topofframe1'>Prasanna Pathak</span>
                <span className='bottomofframe1'>CEO</span>
              </div>
              <img src={leaderImage1} alt="" className='cardimage' />
              <div className='bottomframe1'>
                <div className='leftsideofbottomframe1'>
                  <span id='readpreview'>Read Preview</span>
                  <img src={rightarrow2} alt="" id='rightarrow2' />
                </div>
                <div id='rightsideofbottomframe1'>
                  <img src={add} alt="" id='addicon' />
                </div>
              </div>
            </div>
            <div className='cardsfortheleaders'>
              <div id='frame1'>
                <span className='topofframe1'>Prasanna Pathak</span>
                <span className='bottomofframe1'>CEO</span>
              </div>
              <img src={leaderImage1} alt="" className='cardimage' />
              <div className='bottomframe1'>
                <div className='leftsideofbottomframe1'>
                  <span id='readpreview'>Read Preview</span>
                  <img src={rightarrow2} alt="" id='rightarrow2' />
                </div>
                <div id='rightsideofbottomframe1'>
                  <img src={add} alt="" id='addicon' />
                </div>
              </div>
            </div>
            <div className='cardsfortheleaders'>
              <div id='frame1'>
                <span className='topofframe1'>Prasanna Pathak</span>
                <span className='bottomofframe1'>CEO</span>
              </div>
              <img src={leaderImage1} alt="" className='cardimage' />
              <div className='bottomframe1'>
                <div className='leftsideofbottomframe1'>
                  <span id='readpreview'>Read Preview</span>
                  <img src={rightarrow2} alt="" id='rightarrow2' />
                </div>
                <div id='rightsideofbottomframe1'>
                  <img src={add} alt="" id='addicon' />
                </div>
              </div>
            </div>
            <div className='cardsfortheleaders'>
              <div id='frame1'>
                <span className='topofframe1'>Prasanna Pathak</span>
                <span className='bottomofframe1'>CEO</span>
              </div>
              <img src={leaderImage1} alt="" className='cardimage' />
              <div className='bottomframe1'>
                <div className='leftsideofbottomframe1'>
                  <span id='readpreview'>Read Preview</span>
                  <img src={rightarrow2} alt="" id='rightarrow2' />
                </div>
                <div id='rightsideofbottomframe1'>
                  <img src={add} alt="" id='addicon' />
                </div>
              </div>
            </div>
          </div>
          <div
            id='rightscrolldiv'
            className='absolute right-0 top-[65%] -translate-y-1/2 z-10 cursor-pointer'
            onClick={handleScroll}
            style={{ transform: 'translateY(-50%)', pointerEvents: 'auto' }}
          >
            <img src={rightarrow3} alt="Scroll right" />
          </div>
        </div>

      </div>

      <div id='trusteediv' className='flex w-[1240px] pt-[72px] pb-[72px] flex-col items-center gap-[48px] bg-[#ffffff] absolute top-[2216px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <span id='trustee'>
          Trustee
        </span>
        <div className='flex items-center gap-[24px]'>
          <div className='trusteecard'>
            <div id='topoftrusteecard'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecard'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecard'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecard'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
        </div>
      </div>

      <div id='directordiv' className='flex w-[1240px] pt-[72px] pb-[72px] flex-col items-center gap-[48px] bg-[#ffffff] absolute top-[2912px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <span id='trustee'>
          Directors
        </span>
        <div className='flex items-center gap-[24px]'>
          <div className='trusteecard'>
            <div id='topoftrusteecardfordirector'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecardfordirector'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecardfordirector'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
          <div className='trusteecard'>
            <div id='topoftrusteecardfordirector'>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomoftrusteecard' className='flex flex-col items-center gap-[12px]'>
                <div id='topofbottomoftrusteecard'>
                  <span id='nameoftrustee'>Prasanna Pathak</span>
                  <span id='positionoftrustee'>Trustee</span>
                </div>
                <div id='bottomofbottomoftrusteecard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </div>
              </div>
            </div>
            <div id='bottomoftrusteecard2'>
              <span id='readmore2'>
                Read more
              </span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>

          </div>
        </div>
      </div>

      <div className='flex bg-[#ffffff] absolute top-[3600px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]' id='ciodiv'>
        <span id='ciotext'>
          CIO
        </span>
        <div className='flex items-center gap-[24px]'>
          <div className='ciocard'>
            <div id='topofciocard'>
              <span id='textfortopofciocard'>“Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.”</span>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomofciocard'>
                <div id='topofbottomofciocard'>
                  <span id='nameofciotrustee'>Prasanna Pathak</span>
                  <span id='positionofciotrustee'>Trustee</span>
                </div>
                <span id='bottomofbottomofciocard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </span>
              </div>
            </div>
            <div id='bottomofciocard2'>
              <span id='readmore2'>READ MORE</span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>
          </div>
          <div className='ciocard'>
            <div id='topofciocard'>
              <span id='textfortopofciocard'>“Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.”</span>
              <div id='imagedivfortrustee'>
                <img src={leaderImage2} alt="Trustee" className='trusteeimage' />
              </div>
              <div id='bottomofciocard'>
                <div id='topofbottomofciocard'>
                  <span id='nameofciotrustee'>Prasanna Pathak</span>
                  <span id='positionofciotrustee'>Trustee</span>
                </div>
                <span id='bottomofbottomofciocard'>
                  Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                </span>
              </div>
            </div>
            <div id='bottomofciocard2'>
              <span id='readmore2'>READ MORE</span>
              <img src={rightarrow2} alt="Right Arrow" id='rightarrow2' />
            </div>
          </div>
        </div>
      </div>

      <div id='sponsorsdiv' className='flex w-[1240px] pt-[72px] pb-[72px] flex-col items-center gap-[48px] bg-[#ffffff] absolute top-[4230px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='sponsorscard'>

          <div className='chip'>
            Sponsors
          </div>
          <div className='bottomsectionofsponsorscard'>
            <img src={layer0} alt="" id='layer0' />
            <div className='bottombottomsectionofsponsorscard'>
              <span id='headofbottomsectionofsponsorscard'>Pantomath Capital</span>
              <span id='othertextforsponsorscard'>
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
              </span>
            </div>
          </div>
        </div>
        <div className='sponsorscard'>

          <div className='chip'>
            Sponsors
          </div>
          <div className='bottomsectionofsponsorscard'>
            <div id='frameforlayer0'>
              <img src={layer0} alt="" id='layer0' />
              <img src={layer0} alt="" id='layer0' />
              <img src={layer0} alt="" id='layer0' />
              <img src={layer0} alt="" id='layer0' />
            </div>

            <div className='bottombottomsectionofsponsorscard'>
              <span id='headofbottomsectionofsponsorscard'>Partners</span>
              <span id='othertextforsponsorscard'>
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id='mapssection' className='flex w-[1440px] h-[100%] bg-[#ffffff] absolute top-[5000px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <img src={mapImage} alt="" id='mapimage' />

        {/* this is the right section of the map div */}
        <div id='rightsectionofmapdiv'>
          <div id='headingofrightsectiondiv'>
            <span id='headingofrightsection'>
              Our Offices
            </span>
            <span id='textforrightsection1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </span>
          </div>

          {/* Section for selectinf city and state */}
          <div id='selectcityandstate'>
            <div id='statediv'>
              <span id='state_label'>State</span>
              <div id="selectforstate">
                <div id='inputtextcontainer'>
                  <span id='inputtext'>E.g. Maharashtra</span>
                  <img src={trailing_box} alt="" id='trailing_box' />
                </div>
              </div>
            </div>
            <div id='statediv'>
              <span id='state_label'>City</span>
              <div id="selectforstate">
                <div id='inputtextcontainer'>
                  <span id='inputtext'>E.g. Mumbai</span>
                  <img src={trailing_box} alt="" id='trailing_box' />
                </div>
              </div>
            </div>
          </div>

          {/* section for address */}
          <div id='addresssection'>
            <div className='frameforaddresssection'>
              <div id='imageforaddresssection'>
                <img src={buildingline} alt="" />
              </div>
              <span id='textforaddresssection'>
                Pantomath Nucleus House, Saki Vihar Road, Andheri (E), 400072, Mumbai, Maharashtra
              </span>
            </div>

            <div className='frameforaddresssection'>
              <div id='imageforaddresssection'>
                <img src={Phone} alt="" />
              </div>
              <span id='textforaddresssection'>
                +91 8655674386
              </span>
            </div>


            <div className='frameforaddresssection'>
              <div id='imageforaddresssection'>
                <img src={timer} alt="" />
              </div>
              <span id='textforaddresssection'>
                Monday - Friday (9:30 AM - 5:30 PM)
              </span>
            </div>
          </div>

        </div>
      </div>

      <div id='mainframe8' className='absolute top-[5550px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[48px] bg-[#ffffff] w-[1440px] h-[100%]'>
        <div className="footer-container" style={{margin:'0px'}}>
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
            <li><a href="/equity-funds">Equity Funds</a></li>
            <li><a href="#">Debt Funds</a></li>
            <li><a href="#">Hybrid Funds</a></li>
            <li><a href="#">Tax Saver Fund (ELSS)</a></li>
            <li><a href="#">International Funds</a></li>
            <li><a href="#">Domestic FOF's</a></li>
            <li><a href="#">Index Funds</a></li>
          </ul>
        </div>
      </div>
    </div >

      <div className="copyright-bar">
        <p>Copyright © 2025 Wealth Company Private Limited. | All rights reserved.</p>
      </div>
      </div >
    </>
  );
};

export default Leadership;
