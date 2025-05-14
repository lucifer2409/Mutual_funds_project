import './App.css'
import logoImage from './assets/Logo.svg'
import logopart1 from './assets/logopart1.svg'
import logopart2 from './assets/logopart2.svg'
import dropdown from './assets/Group.svg'
import calculatorIcon from './assets/stock-line.svg'
import logo2 from './assets/logo2.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    
    return (
        <div className="navbar">
            <div id='insideNavbar1'>
                <div id='leftsideofthenavbar'>
                    <div id='container1' onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                        <img src={logo2} alt="" />
                    </div>
                    <div id='container3'>
                        <nav className='navbar-list' onClick={() => navigate('/leadership')}>About us</nav>
                        
                        <div className='navbar-lists'>
                            <div className='nav-item-wrapper'>
                                <nav className='navbar-list'>Our Funds</nav>
                                <img src={dropdown} alt="" className='dropdownimage' />
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-title">Fund Categories</div>
                                <div className="dropdown-menu-item">NFO</div>
                                <div 
                                    className="dropdown-menu-item" 
                                    onClick={(e) => {
                                        e.stopPropagation(); // Stop event from bubbling up
                                        navigate('/equity-funds');
                                    }}
                                >
                                    Equity Funds
                                </div>
                                <div className="dropdown-menu-item">Index Funds</div>
                                <div className="dropdown-menu-item">Debt Funds</div>
                                <div className="dropdown-menu-item">Hybrid Funds</div>
                                <div className="dropdown-menu-item">ETFs</div>
                            </div>
                        </div>

                        <div className='navbar-lists'>
                            <div className='nav-item-wrapper'>
                                <nav className='navbar-list'>Tools & Resources</nav>
                                <img src={dropdown} alt="" className='dropdownimage' />
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-title">Tools</div>
                                <div className="dropdown-menu-item">
                                    <img src={calculatorIcon} alt="" className='calculatoricon'/>
                                    Calculators
                                </div>
                                <div className="dropdown-menu-item">
                                    <img src={calculatorIcon} alt="" className='calculatoricon'/>
                                    Blogs
                                </div>
                                <div className="dropdown-menu-item">
                                    <img src={calculatorIcon} alt=""  className='calculatoricon'/>
                                    Downloads
                                </div>
                                <div className="dropdown-menu-item">
                                    <img src={calculatorIcon} alt="" className='calculatoricon'/>
                                    Investor Corner
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
