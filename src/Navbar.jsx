import './App.css'
import logoImage from './assets/Logo.svg'
import logopart1 from './assets/logopart1.svg'
import logopart2 from './assets/logopart2.svg'
import dropdown from './assets/Group.svg'
import React from 'react'
import calculatorIcon from './assets/stock-line.svg'
import mainlogo from './assets/mainlogo.svg'
import logo2 from './assets/logo2.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import rightside from './assets/rightside.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isfunddropdownOpen, setIsfunddropdownOpen] = useState(false);
    const [istoolsdropdownOpen, setIstoolsdropdownOpen] = useState(false);
    const [isopenforourfunds, setIsopenforourfunds] = useState(true);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="navbar">
                <div id='insideNavbar1'>
                    <div id='leftsideofthenavbar'>
                        <div id='container1'>
                            <img src={logo2} alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                        </div>
                        <div id='container3'>
                            <nav className='navbar-list' onClick={() => navigate('/leadership')}>About us</nav>
                            <div className='navbar-lists'>
                                <div className='nav-item-wrapper'>
                                    <nav className='navbar-list'>Our Funds</nav>
                                    <img src={dropdown} alt="" className='dropdownimage' />
                                </div>
                                <div className='maincontainerofnav1'>
                                    <div className='insidecontainerofnav1'>
                                        <div className='leftsideofnav1'>
                                            <span className='ourfundstext'>Our Funds</span>
                                            <div id='belowcontainer1'>
                                                <div className='leftsideofbelowcontainer1'>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span
                                                            className='boxestext cursor-pointer'
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // Stop event bubbling
                                                                navigate('/equity-funds');
                                                                console.log('I am been clicked');
                                                            }}
                                                        >
                                                            Equity funds
                                                        </span>
                                                    </div>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>Debt Funds</span>
                                                    </div>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>Hybrid Funds</span>
                                                    </div>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>Tax Saver Fund (ELSS)</span>
                                                    </div>
                                                </div>
                                                <div className='leftsideofbelowcontainer1'>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>International Funds</span>
                                                    </div>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>Domestic FOF’s</span>
                                                    </div>
                                                    <div className='boxes'>
                                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                                        <span className='boxestext'>Index Funds</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='rightsideofnav1'>
                                            <span className='heading1'>Related Links</span>
                                            <div className='container1ofnav1rightside'>
                                                <div className='boxes2'>
                                                    <img src={calculatorIcon} alt="" className='iconsset1' />
                                                    <span className='textinsidenav1rightside'>Presentation</span>
                                                </div>
                                                <div className='boxes2'>
                                                    <img src={calculatorIcon} alt="" className='iconsset1' />
                                                    <span className='textinsidenav1rightside'>Brochure</span>
                                                </div>
                                                <div className='boxes2'>
                                                    <img src={calculatorIcon} alt="" className='iconsset1' />
                                                    <span className='textinsidenav1rightside'>NAV History</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='navbar-lists'>
                                <div className='nav-item-wrapper'>
                                    <nav className='navbar-list'>Tools & Resources</nav>
                                    <img src={dropdown} alt="" className='dropdownimage' />
                                </div>
                                <div className='maincontainerofnav2'>
                                    <div className='firstcontainerofnav2'>
                                        <div className='leftsideecontainerofnav2'>
                                            <span id='headingofnav2'>Tools
                                            </span>
                                            <div id='belowcontainerofnav2'>
                                                <div className='boxes3'>
                                                    <img src={calculatorIcon} alt="" className='iconsset3' />
                                                    <span className='textinsidenav2'>Calculators</span>
                                                </div>
                                                <div className='boxes3'>
                                                    <img src={calculatorIcon} alt="" className='iconsset3' />
                                                    <span className='textinsidenav2'>Blogs</span>
                                                </div>
                                                <div className='boxes3'>
                                                    <img src={calculatorIcon} alt="" className='iconsset3' />
                                                    <span className='textinsidenav2'>Downloads</span>
                                                </div>
                                                <div className='boxes3'>
                                                    <img src={calculatorIcon} alt="" className='iconsset3' />
                                                    <span className='textinsidenav2'>Investor Corner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={rightside} alt="" className='rightsidecontainerofnav2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='rightsideofthenavbar'>
                        {/* <button className='Navbarbuttons'>
                            <span id='button1' onClick={() => navigate('/signup')} className='cursor-pointer'>
                                Join the waiting list
                            </span>
                        </button> */}
                        <button className='default-white-button'>
                            <span id='button1' className='cursor-pointer'>
                                For Distributor
                            </span>
                        </button>
                        <button className='default-black-button'>
                            <span id='button1' className='cursor-pointer'>
                                For Investor
                            </span>
                        </button>


                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id='hamburgericon'>
                            <g clipPath="url(#clip0_125_669)">
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#666666" />
                            </g>
                            <defs>
                                <clipPath id="clip0_125_669">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        {/* <button className='Navbarbuttonsblack'>
                        <span id='button2'>
                            For Investor
                        </span>
                    </button> */}
                    </div>
                </div>
            </div>

            <div className='navbarforphone'>
                <div id='insideNavbarforphone'>
                    <div id='leftsideofnavbarforphone'>
                        <img src={mainlogo} alt="" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                    </div>
                    <div id='rightsideofnavbarforphone'>
                        <button id='distributorbutton'>For distributor</button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id='hamburgericonforphone' onClick={toggleMenu}>
                            <g clipPath="url(#clip0_125_669)">
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="#666666" />
                            </g>
                            <defs>
                                <clipPath id="clip0_125_669">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>


            {isOpen && (
                <div
                    id="mobile-menu">
                    <div className='mobilemenusections'>
                        <span>About us</span>
                        <img src={dropdown} alt="" className='dropdownimageformobilemenu' />
                    </div>


                    {
                        isopenforourfunds ? (

                            <div id='openedmobilemenusectionforourfunds' onClick={() => setIsopenforourfunds(!isopenforourfunds)}>
                                <div id='topsectionofopenedmobilemenusectionforourfunds'>
                                    <div id='insidetopsectionofopenedmobilemenusectionforourfunds'>
                                        <span className='headerforopenedsection'>Our funds</span>
                                        <img src={dropdown} alt="" className='dropdownimageformobilemenu' />
                                    </div>
                                </div>
                                <div id='bottomsectionofopenedmobilemenusectionforourfunds'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Equity funds</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Debt funds</span>
                                    </div>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Hybrid funds</span>
                                    </div>



                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Tax Saver Fund (ELSS)</span>
                                    </div>



                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>International Funds</span>
                                    </div>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsforourfunds'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Index Funds</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div id='lastsmallmobilemenusectionsforourfunds'>
                                        <span id='headingforlastmobilesection'>
                                            Related Links
                                        </span>
                                        <div id='bottomdivforlastmobilemenusection'>
                                            <div className='insidebottomdivforsmallmobilemenusectionsforourfunds'>
                                                <img src={calculatorIcon} alt="" className='iconsset1' />
                                                <span className='textinsidenav1rightside'>Presentation</span>
                                            </div>
                                            <div className='insidebottomdivforsmallmobilemenusectionsforourfunds'>
                                                <img src={calculatorIcon} alt="" className='iconsset1' />
                                                <span className='textinsidenav1rightside'>Brochure</span>
                                            </div>
                                            <div className='insidebottomdivforsmallmobilemenusectionsforourfunds'>
                                                <img src={calculatorIcon} alt="" className='iconsset1' />
                                                <span className='textinsidenav1rightside'>NAV History</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ) : (
                            <div className='mobilemenusections' onClick={() => setIsopenforourfunds(!isopenforourfunds)}>
                                <span>Our funds</span>
                                <img src={dropdown} alt="" className='dropdownimageformobilemenu' />
                            </div>
                        )
                    }

                    {
                        istoolsdropdownOpen ? (
                            <div id='openedmobilemenusectionfortools' onClick={() => setIstoolsdropdownOpen(!istoolsdropdownOpen)}>
                                <div id='topsectionofopenedmobilemenusectionfortools'>
                                    <span className='headerforopenedsection'>Tools</span>
                                    <img src={dropdown} alt="" className='dropdownimageformobilemenu' />
                                </div>
                                <div id='bottomsectionofopenedmobilemenusectionfortools'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsfortools'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Blogs</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsfortools'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Downloads</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsfortools'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Calculators</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="296" height="2" viewBox="0 0 296 2" fill="none">
                                        <path d="M0 1H296" stroke="#E2E2E2" />
                                    </svg>
                                    <div className='smallmobilemenusectionsfortools'>
                                        <img src={calculatorIcon} alt="" className='calculatoricon' />
                                        <span className='textforsmallmobilesections'>Investor Corner</span>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            <div className='mobilemenusections' onClick={() => setIstoolsdropdownOpen(!istoolsdropdownOpen)}>
                                <span>Tools</span>
                                <img src={dropdown} alt="" className='dropdownimageformobilemenu' />
                            </div >
                        )
                    }

                </div >
            )}
        </>
    )
}

export default Navbar
