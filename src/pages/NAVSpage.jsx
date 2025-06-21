import React from 'react'
import Navbar from '../Navbar'
import calendareventline from '../assets/calendareventline.svg'
import leftarrow2 from '../assets/leftarrow2.svg'
import rightarrow from '../assets/rightarrow.svg'
import facebook from '../assets/facebook.svg'
import { Link } from 'react-router-dom'
import dropdown from '../assets/dropdown.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import insta from '../assets/insta.svg'
import logo from '../assets/Logo.svg'
import youtube from '../assets/youtube.svg'


const Navspage = () => {
    return (
        <>
            <Navbar />
            <div id='topsection2'>
                <div id='insidetopsectionofnavspage'>
                    <div id='topofinsidetopsectionofnavspage'>
                        <h1 id='headingoftopsection2'>NAVs</h1>
                        <span id='descriptionoftopsection2'>
                            View or Download the latest and historical NAVs of any of our schemes. Simply select the Fund, Plan & Option and find the info you're looking for.
                        </span>
                        <div className='dropdownPrimary'>
                            <span id='leftsidetextfordropdownprimary'>All Fund</span>
                            <img src={dropdown} alt="" id='dropdownicon' />
                        </div>
                    </div>

                </div>
            </div>
            <div id='middlesectionfortotalexpenseratio'>
                <div id='topofmiddlesectionfortotalexpratio'>
                    <div id='topofthisdiv'>
                        <div id='leftsideofthetopofmiddlesectionfortotalexpratio'>
                            <button className='primaryButtonformiddlesectionfortotalexpenseratio'>
                                Latest
                            </button>
                            <button className='secondaryButtonformiddlesectionfortotalexpenseratio'>
                                Historical
                            </button>
                        </div>
                        <div className='rightsideofthetopofmiddlesectionfortotalexpratio'>
                            <span id='textforright2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                Download
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='downloadicon'>
                                <g clip-path="url(#clip0_216_2001)">
                                    <path d="M2.85805 3.377L15.428 1.582C15.499 1.57182 15.5713 1.57702 15.64 1.59723C15.7088 1.61744 15.7724 1.65219 15.8266 1.69913C15.8807 1.74608 15.9241 1.80411 15.9539 1.86931C15.9837 1.9345 15.9991 2.00534 15.999 2.077V22.923C15.999 22.9946 15.9837 23.0653 15.954 23.1304C15.9243 23.1955 15.8809 23.2535 15.8269 23.3004C15.7729 23.3474 15.7094 23.3821 15.6407 23.4024C15.5721 23.4227 15.4999 23.428 15.429 23.418L2.85705 21.623C2.61867 21.5891 2.40054 21.4702 2.24274 21.2884C2.08493 21.1065 1.99805 20.8738 1.99805 20.633V4.367C1.99805 4.12621 2.08493 3.89351 2.24274 3.71164C2.40054 3.52978 2.61867 3.41095 2.85705 3.377H2.85805ZM3.99905 5.235V19.765L13.999 21.194V3.806L3.99905 5.235ZM16.999 19.5H19.999V5.5H16.999V3.5H20.999C21.2643 3.5 21.5186 3.60536 21.7062 3.79289C21.8937 3.98043 21.999 4.23478 21.999 4.5V20.5C21.999 20.7652 21.8937 21.0196 21.7062 21.2071C21.5186 21.3946 21.2643 21.5 20.999 21.5H16.999V19.5ZM10.199 12.5L12.999 16.5H10.599L8.99905 14.214L7.39905 16.5H4.99905L7.79905 12.5L4.99905 8.5H7.39905L8.99905 10.786L10.599 8.5H12.999L10.199 12.5Z" fill="#AD8E53" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_216_2001">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='downloadicon'>
                                <g clip-path="url(#clip0_216_2005)">
                                    <path d="M3 3.492C3 2.944 3.447 2.5 3.999 2.5H16L21 7.5V21.493C21.0009 21.6243 20.976 21.7545 20.9266 21.8762C20.8772 21.9979 20.8043 22.1087 20.7121 22.2022C20.6199 22.2957 20.5101 22.3701 20.3892 22.4212C20.2682 22.4723 20.1383 22.4991 20.007 22.5H3.993C3.73038 22.4982 3.47902 22.3931 3.29322 22.2075C3.10742 22.0219 3.00209 21.7706 3 21.508V3.492ZM5 4.5V20.5H19V8.5H16V14.5H10V16.5H8V8.5H15V4.5H5ZM10 10.5V12.5H14V10.5H10Z" fill="#AD8E53" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_216_2005">
                                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div id='bottomofthisdiv'>
                        <div id='leftsideofthebotttomofmiddlesectionfortotalexpenseratio'>
                            <div className='calendardiv'>
                                <span className='calendardivtext'>
                                    From Date
                                </span>
                                <img src={calendareventline} alt="" className='calendardivicons' />
                            </div>
                            <div className='calendardiv'>
                                <span className='calendardivtext'>
                                    To Date
                                </span>
                                <img src={calendareventline} alt="" className='calendardivicons' />
                            </div>
                            <button id='viewtirbutton'>
                                View Historical NAV
                            </button>
                        </div>
                    </div>
                </div>

                <div id='middlesectionfornavs'>
                    <div className='rightsideofthetopofmiddlesectionfortotalexpratio'>
                        <span id='textforright2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                            Download
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='downloadicon'>
                            <g clip-path="url(#clip0_216_2001)">
                                <path d="M2.85805 3.377L15.428 1.582C15.499 1.57182 15.5713 1.57702 15.64 1.59723C15.7088 1.61744 15.7724 1.65219 15.8266 1.69913C15.8807 1.74608 15.9241 1.80411 15.9539 1.86931C15.9837 1.9345 15.9991 2.00534 15.999 2.077V22.923C15.999 22.9946 15.9837 23.0653 15.954 23.1304C15.9243 23.1955 15.8809 23.2535 15.8269 23.3004C15.7729 23.3474 15.7094 23.3821 15.6407 23.4024C15.5721 23.4227 15.4999 23.428 15.429 23.418L2.85705 21.623C2.61867 21.5891 2.40054 21.4702 2.24274 21.2884C2.08493 21.1065 1.99805 20.8738 1.99805 20.633V4.367C1.99805 4.12621 2.08493 3.89351 2.24274 3.71164C2.40054 3.52978 2.61867 3.41095 2.85705 3.377H2.85805ZM3.99905 5.235V19.765L13.999 21.194V3.806L3.99905 5.235ZM16.999 19.5H19.999V5.5H16.999V3.5H20.999C21.2643 3.5 21.5186 3.60536 21.7062 3.79289C21.8937 3.98043 21.999 4.23478 21.999 4.5V20.5C21.999 20.7652 21.8937 21.0196 21.7062 21.2071C21.5186 21.3946 21.2643 21.5 20.999 21.5H16.999V19.5ZM10.199 12.5L12.999 16.5H10.599L8.99905 14.214L7.39905 16.5H4.99905L7.79905 12.5L4.99905 8.5H7.39905L8.99905 10.786L10.599 8.5H12.999L10.199 12.5Z" fill="#AD8E53" />
                            </g>
                            <defs>
                                <clipPath id="clip0_216_2001">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className='downloadicon'>
                            <g clip-path="url(#clip0_216_2005)">
                                <path d="M3 3.492C3 2.944 3.447 2.5 3.999 2.5H16L21 7.5V21.493C21.0009 21.6243 20.976 21.7545 20.9266 21.8762C20.8772 21.9979 20.8043 22.1087 20.7121 22.2022C20.6199 22.2957 20.5101 22.3701 20.3892 22.4212C20.2682 22.4723 20.1383 22.4991 20.007 22.5H3.993C3.73038 22.4982 3.47902 22.3931 3.29322 22.2075C3.10742 22.0219 3.00209 21.7706 3 21.508V3.492ZM5 4.5V20.5H19V8.5H16V14.5H10V16.5H8V8.5H15V4.5H5ZM10 10.5V12.5H14V10.5H10Z" fill="#AD8E53" />
                            </g>
                            <defs>
                                <clipPath id="clip0_216_2005">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div id='insideofmiddlesectionfornavs'>
                        <div id='top2ofmiddlesectionfortotalexpenseratio'>
                            <span className='textfortop2ofmiddlesectionfortotalexpenseratio'>
                                Fund Name
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='righttextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    NAV Date
                                </span>
                                <span className='righttextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    NAV
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                        <div className='bottomoftop2ofmiddlesectionfortotalexpenseratio'>
                            <span className='leftbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                Wealth Large Cap Fund Growth Fund
                            </span>
                            <div id='right2sideoftop2ofmiddlesectionfortotalexpenseratio'>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    29 May, 2025
                                </span>
                                <span className='rightbottomtextfortop2ofmiddlesectionfortotalexpenseratio'>
                                    402.1250
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sliderforchangingpages'>
                <span id='lefttextforslider'>Showing 1 to 10 of 85,978 entries</span>
                <div id='rightdivforslider'>
                    <div className='arrowdiv'>
                        <img src={leftarrow2} alt="" id='leftarrowimg' />
                    </div>
                    <div id='contentsliderimage'>
                        <div className='slider1'>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#B4B4B4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#B4B4B4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#B4B4B4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#B4B4B4" />
                        </svg>
                    </div>
                    <div className='arrowdiv'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M17.5615 16.0005L11.9041 10.3431C11.3835 9.82251 11.3835 8.97841 11.9041 8.45779C12.4248 7.93717 13.2688 7.93717 13.7895 8.45779L20.3893 15.0577C20.91 15.5784 20.91 16.4226 20.3893 16.9433L13.7895 23.5431C13.2688 24.0637 12.4248 24.0637 11.9041 23.5431C11.3835 23.0225 11.3835 22.1784 11.9041 21.6578L17.5615 16.0005Z" fill="#282828" className='rightarrowblackforarrow' />
                        </svg>
                    </div>

                </div>
            </div>

            <button className='primaryButton'>
                View more
            </button>

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
    )
}

export default Navspage;
