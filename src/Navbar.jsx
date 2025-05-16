import './App.css'
import logoImage from './assets/Logo.svg'
import logopart1 from './assets/logopart1.svg'
import logopart2 from './assets/logopart2.svg'
import dropdown from './assets/Group.svg'
import React from 'react'
import calculatorIcon from './assets/stock-line.svg'
import logo2 from './assets/logo2.svg'
import rightside from './assets/rightside.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
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
                    <button className='Navbarbuttons'>
                        <span id='button1'>
                            For Distributor
                        </span>
                    </button>
                    <button className='Navbarbuttonsblack'>
                        <span id='button2'>
                            For Investor
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
