import React from 'react'
import Navbar from '../Navbar'
import dropdown from '../assets/dropdown.svg'
import savepdf from '../assets/savepdf.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import insta from '../assets/insta.svg'
import logo from '../assets/Logo.svg'
import youtube from '../assets/youtube.svg'


import { useState } from 'react'
const Disclosurepage = () => {
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    // Toggle card expansion
    const toggleCard = (index) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };
    // Disclosure card data
    const disclosureCards = [
        {
            title: 'Disclosure of Commission',
            description: 'Get access to TWC Mutual Fund\'s declarations of commissions paid, total expenses, Assets under Management and account inflows, compiled separately for each financial year.'
        },
        {
            title: 'Fund Annual Reports',
            description: 'Access the annual reports for all TWC Mutual Fund schemes, providing comprehensive information about fund performance, holdings, and financial statements.'
        },
        {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        },
        {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        }
        ,
        {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        },
        {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        },
        {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        }, {
            title: 'Investor Awareness',
            description: 'Educational materials and resources designed to help investors make informed decisions about their mutual fund investments.'
        }

    ];
    return (
        <>
            <Navbar />
            <div id='topsection2'>
                <div id='insidetopsectionofnavspage'>
                    <div id='topofinsidetopsectionofnavspage'>
                        <h1 id='headingoftopsection2'>Disclosure</h1>
                    </div>
                </div>
            </div>
            <div id='middlesection'>
                {disclosureCards.map((card, index) => (
                    <div
                        key={index}
                        className={`cardfordisclosuresection-container ${expandedCardIndex === index ? 'expanded' : ''}`}
                    >
                        <div
                            className='cardfordisclosuresection'
                            onClick={() => toggleCard(index)}
                        >
                            <span id='textforcardfordisclosuresection'>
                                {card.title}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className={`dropdownblack ${expandedCardIndex === index ? 'rotate' : ''}`}
                            >
                                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34299L12.0008 12.172L14.8288 9.34299L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                            </svg>
                        </div>

                        {/* Expandable content */}
                        <div className='hoveredcardfordisclosuresection'>
                            <div id='topdivforhoveredcardfordisclosuresection'>
                                <span id='titlefortopdivforhoveredcardfordisclosuresection'>
                                    {card.title}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    onClick={() => toggleCard(index)}
                                    className="rotate"
                                >
                                    <path d="M12.0008 15L7.75781 10.757L9.17281 9.34299L12.0008 12.172L14.8288 9.34299L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                </svg>
                            </div>
                            <div id='bottomdivforhoveredcardfordisclosuresection'>
                                <span id='textinsidebottomdivforhoveredcardfordisclosuresection'>
                                    {card.description}
                                </span>

                                {/* Year dropdown and files section */}
                                <div id='dropdownbuttonforselectingyear'>
                                    <span id='leftdropdowntext'>
                                        2023-2024
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_208_1308)">
                                            <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_208_1308">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Download file cards */}
                                <div className='insidedropdowncardfordownloadfiles'>
                                    <div id='leftsideofinsidedropdowncardfordownloadfiles'>
                                        <span id='topofleftsideofinsidedropdowncardfordownloadfiles'>
                                            File name
                                        </span>
                                        <span id='bottomofleftsideofinsidedropdowncardfordownloadfiles'>
                                            Disclosure Of Commission And Expenses Paid To Distributors For The Financial Year 2023-24
                                        </span>
                                    </div>
                                    <div id='rightsideofinsidedropdowncardfordownloadfiles'>
                                        <div className='boxofrightsideofinsidedropdowncardfordownloadfiles'>
                                            <span className='toptextofboxofrightsideofinsidedropdowncardfordownloadfiles'>File Type</span>
                                            <img src={savepdf} alt="PDF" className='savepdfimg' />
                                        </div>
                                        <div className='boxofrightsideofinsidedropdowncardfordownloadfiles'>
                                            <span className='toptextofboxofrightsideofinsidedropdowncardfordownloadfiles'>File Size</span>
                                            <span className='filesize'>2 MB</span>
                                        </div>
                                        <div className='buttonfordownloaddocumentspage'>
                                            <span className='buttontext'>DOWNLOAD</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path d="M9.16732 6.66667L12.5007 6.66667L8.50065 10.6667L4.50065 6.66667L7.83398 6.66667L7.83398 2L9.16732 2V6.66667ZM3.16732 12.6667L13.834 12.6667V8H15.1673V13.3333C15.1673 13.5101 15.0971 13.6797 14.9721 13.8047C14.847 13.9298 14.6775 14 14.5007 14L2.50065 14C2.32384 14 2.15427 13.9298 2.02925 13.8047C1.90422 13.6797 1.83398 13.5101 1.83398 13.3333L1.83398 8H3.16732L3.16732 12.6667Z" fill="#AD8E53" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='insidedropdowncardfordownloadfiles'>
                                    <div id='leftsideofinsidedropdowncardfordownloadfiles'>
                                        <span id='topofleftsideofinsidedropdowncardfordownloadfiles'>
                                            File name
                                        </span>
                                        <span id='bottomofleftsideofinsidedropdowncardfordownloadfiles'>
                                            Disclosure Of Commission And Expenses Paid To Distributors For The Financial Year 2023-24
                                        </span>
                                    </div>
                                    <div id='rightsideofinsidedropdowncardfordownloadfiles'>
                                        <div className='boxofrightsideofinsidedropdowncardfordownloadfiles'>
                                            <span className='toptextofboxofrightsideofinsidedropdowncardfordownloadfiles'>File Type</span>
                                            <img src={savepdf} alt="PDF" className='savepdfimg' />
                                        </div>
                                        <div className='boxofrightsideofinsidedropdowncardfordownloadfiles'>
                                            <span className='toptextofboxofrightsideofinsidedropdowncardfordownloadfiles'>File Size</span>
                                            <span className='filesize'>2 MB</span>
                                        </div>
                                        <div className='buttonfordownloaddocumentspage'>
                                            <span className='buttontext'>DOWNLOAD</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path d="M9.16732 6.66667L12.5007 6.66667L8.50065 10.6667L4.50065 6.66667L7.83398 6.66667L7.83398 2L9.16732 2V6.66667ZM3.16732 12.6667L13.834 12.6667V8H15.1673V13.3333C15.1673 13.5101 15.0971 13.6797 14.9721 13.8047C14.847 13.9298 14.6775 14 14.5007 14L2.50065 14C2.32384 14 2.15427 13.9298 2.02925 13.8047C1.90422 13.6797 1.83398 13.5101 1.83398 13.3333L1.83398 8H3.16732L3.16732 12.6667Z" fill="#AD8E53" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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
                                <span className='linktitle2'>About Us</span>
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
                                SEBI
                            </span>
                            <div className='linksofinsidecontentinsideframeofmainframe8'>
                                <span className='linktitle2'>SEBU Smart ODR</span>
                                <span className='linktitle2'>SEBI Scores</span>
                                <span className='linktitle2'>SEBU Scores App (ios)</span>
                                <span className='linktitle2'>SEBU Scores App (Android)</span>

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

export default Disclosurepage
