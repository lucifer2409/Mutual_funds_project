import React from 'react'
import Navbar from '../Navbar'
import confusedman from '../assets/confusedman.png'
import search from '../assets/search.svg'
import shareicon from '../assets/shareicon.svg'
import logo from '../assets/Logo.svg'
import facebook from '../assets/facebook.svg'
import Scrolltotoplink from '../Scrolltotop'
import twitter from '../assets/twitter.svg'
import { Link } from 'react-router-dom'
import linkedin from '../assets/linkedin.svg'
import insta from '../assets/insta.svg'
// import Scrolltotoplink from '../Scrolltotop'
import youtube from '../assets/youtube.svg'
import Blogsummary from './Blogsummary'

const Blogs = () => {
    return (
        <>
            <Navbar />
            <div id='topsectionforblogspage'>
                <div id='topsectionforblogspagecontent'>
                    <h2 id='headerfortopsectionforblogspagecontent'>Blogs</h2>
                    <span id='descriptionfortopsectionforblogspagecontent'>Explore mutual fund blogs for expert investment tips and insights.</span>
                </div>
                <div id='searchbarforblogspage'>
                    <img src={search} alt="search" id='searchiconforblogspage' />
                    <input type="text" placeholder='Search blogs' id='searchinputforblogspage' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.1726 12L8.92957 7.75699C8.5391 7.36652 8.5391 6.73345 8.92957 6.34299C9.32003 5.95252 9.9531 5.95252 10.3436 6.34299L15.2935 11.2929C15.684 11.6834 15.684 12.3166 15.2935 12.7071L10.3436 17.657C9.9531 18.0475 9.32003 18.0475 8.92957 17.657C8.5391 17.2665 8.5391 16.6335 8.92957 16.243L13.1726 12Z" fill="#404040" className='rightarrow' />
                    </svg>

                </div>
            </div>
            <div id='middlesectionforblogspage'>
                <div id='filterssectionforblogspage'>
                    <div id='leftsectionforfilterssectionforblogspage'>
                        <button className='goldenbuttonforblogspage'>
                            All Blogs
                        </button>
                        <button className='secondarybuttonforblogspage'>
                            Trending Now
                        </button>
                        <button className='secondarybuttonforblogspage'>
                            Personal Finance
                        </button>
                        <button className='secondarybuttonforblogspage'>
                            Outlook
                        </button>
                        <button className='secondarybuttonforblogspage'>
                            SIP
                        </button>
                    </div>
                    <div id='rightsectionoftopsectionformiddlesectionfordownloaddocumentspage'>
                        <span id='lefttextforrightsectionoftopsectionformiddlesectionfordownloaddocumentspage'>Sort By</span>
                        <div id='rightdivbutton'>
                            <span id='rightdivbuttontext'>RECENT</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.0008 12.172L9.17281 9.34299L7.75781 10.757L12.0008 15L16.2438 10.757L14.8288 9.34299L12.0008 12.172Z" fill="#AD8E53" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div id='cardsectionforblogspage'>
                    <div className='rowforblogspage'>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className='linkforcard' to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rowforblogspage'>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rowforblogspage'>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cardforblogspage'>
                            <img src={confusedman} alt="" className='imageforcard' />
                            <div className='contentforcard'>
                                <span className='textforcard'>
                                    Money Mind Games: Why You Splurge and Save, & How Mutual Funds Can Help!... <Scrolltotoplink className="linkforcard" to='/blog-summary'>READ MORE</Scrolltotoplink>
                                </span>
                                <div className='otherdetailsforcard'>
                                    <div className='leftsectionforotherdetailsforcard'>
                                        <span className='otherdetailsfortext'>
                                            Jul 9, 2024
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="17" viewBox="0 0 2 17" fill="none">
                                            <path d="M1 0.666626V16.6666" stroke="#E2E2E2" />
                                        </svg>
                                        <span className='otherdetailsfortext'>
                                            5 min read
                                        </span>
                                    </div>
                                    <div className='shareicondiv'>
                                        <img src={shareicon} alt="" id='shareicon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button className='primaryButton'>
                View more
            </button>

            <div id='mainframe8' style={{ marginTop: '280px' }}>
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
            </div>
        </>
    )
}

export default Blogs
