import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Leadership.css';
import mapImage from '../assets/map.svg'; // You'll need to add this image
import logo from '../assets/Logo.svg';
import timer from '../assets/timer.svg'; // Add timer icon image
import leaderImage1 from '../assets/avatar.svg'; // Add placeholder leader images
import Scrolltotoplink from '../Scrolltotop';
import leaderImage2 from '../assets/avatar.svg'; // Add placeholder leader images
import leaderImage3 from '../assets/avatar.svg'; // Add placeholder leader images
import birdimage from '../assets/bird.svg';
import rightarrow2 from '../assets/rightarrow2.svg'; // Add right arrow image
import add from '../assets/add.svg'; // Add add icon image
import rightarrow3 from '../assets/rightarrow3.svg'; // Add right arrow image for scrolling
import trailing_box from '../assets/trailing_box.svg'; // Add trailing box image
import { useRef } from 'react';
import facebook from '../assets/facebook.svg'; // Add Facebook icon image
import twitter from '../assets/twitter.svg'; // Add Twitter icon image
import linkedin from '../assets/linkedin.svg'; // Add LinkedIn icon image
import insta from '../assets/insta.svg'; // Add Instagram icon image
import youtube from '../assets/youtube.svg'; // Add YouTube icon image
import Phone from '../assets/Phone.svg'; // Add phone icon image
import chess from '../assets/chess.svg'
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
      <div className='h-[519px] w-[1440px] bg-[#FCF5E8] flex pt-[24px] pr-[100px] pb-[100px] pl-[100px]
 items-center gap-[48px]' id='mainframe1forleadership'>
        <span id='lefttextformainframe1'>
          <span id='goldentext'>More Than a Mutual Fund.</span>
          <span id='black'>A Mindset.</span>
        </span>
        <div id='chessDiv'>
          <img src={chess} alt="" id='chessimage' />
        </div>




      </div>
      <div className='flex w-[1240px] p-[48px] justify-center items-center gap-[10px] rounded-[24px] bg-[#FFFFFF] shadow-[0px_4px_24px_rgba(0,0,0,0.10)] absolute top-[660px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]' id='mainframe2forleadership'>
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

      <div className='flex w-[1240px] pt-[72px] pb-[72px] flex-col items-center gap-[48px] bg-[#ffffff] absolute top-[1400px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]' id='mainframe3forleadership'>
        <div className='flex w-[608px] flex-col items-center gap-[8px]' id='textdivforleadership'>
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
          <div className='flex items-center gap-[24px] w-[1240px] overflow-auto scroll-container' ref={scrollContainerRef} id='scrollablediv'>

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


            {/* <div className='card-back'>
              <div id='insidecardback'>
                <div id='topofinsidecardback'>
                  spapa
                </div>
              </div>
            </div> */}
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
        <div className='flex items-center gap-[24px]' id='trusteescards'>
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
        <div className='flex items-center gap-[24px]' id='directorscards'>
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
        <div className='flex items-center gap-[24px]' id='ciocards'>
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

      <div id='mainframe8' className='absolute top-[5550px] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[48px] bg-[#ffffff] w-[1440px] h-[100%]' style={{ marginTop: '400px' }}>
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
                <Scrolltotoplink className='linktitle2' to='/download-documents'>Downloads</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/factsheet'>Fact Sheet</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/disclosure'>Disclosures</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/navs-page'>NAVs</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/annual-reports'>Annual Reports</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/investor-services'>Investor Services</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/blogs'>Blogs</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/total-expense-ratio'>Total expense ratio</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/disclosure'>Disclosure</Scrolltotoplink>


              </div>
            </div>
            <div id='insidecontentinsideframeofmainframe8'>
              <span id='titleofinsidecontentinsideframeofmainframe8'>
                SEBI
              </span>
              <div className='linksofinsidecontentinsideframeofmainframe8'>
                <Scrolltotoplink className='linktitle2' to='/'>SEBI Smart ODR</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/'>SEBI Scores</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/'>SEBI Scores App (iOS)</Scrolltotoplink>
                <Scrolltotoplink className='linktitle2' to='/'>SEBI Scores App (Andriod)</Scrolltotoplink>
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
      </div >
    </>
  );
};

export default Leadership;
