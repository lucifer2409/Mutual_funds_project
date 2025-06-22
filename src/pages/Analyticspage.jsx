import React from 'react'
import Navbar from '../Navbar'
import graph from '../assets/graph.svg'
import dropdown from '../assets/dropdown.svg'
import piegraph from '../assets/piegraph.svg'
import { Link } from 'react-router-dom'
import avatar2 from '../assets/avatar2.png'
import divider from '../assets/divider.svg'
const Analyticspage = () => {
    return (
        <>
            <Navbar />
            <div id='maindivforanalyticspage'>
                <div id='leftdivforanalyticspage'>
                    <div id='section1foranalyticspage'>
                        <div className='selectedoptionforanalyticspage'>
                            Fund Summary
                        </div>
                        <div className='optionforanalyticspage'>
                            Portfolio
                        </div>
                        <div className='optionforanalyticspage'>
                            Performance
                        </div>
                        <div className='optionforanalyticspage'>
                            Fund Details
                        </div>
                        <div className='optionforanalyticspage'>
                            FAQs
                        </div>
                    </div>
                    <div id='section2foranalyticspage'>
                        <div id='section1ofsection2foranalyticspage'>
                            <div id='topsectionofsection1ofsection2foranalyticspage'>
                                <div className='sectionfortopsectionofsection1ofsection2foranalyticspage'>
                                    <span className='fundnameforanalyticspage'>
                                        Age of Fund
                                    </span>
                                    <span className='funddurationforanalyticspage'>
                                        4 years 5 months
                                    </span>
                                    <span className='funddateforanalyticspage'>
                                        since Dec 10, 2020
                                    </span>
                                </div>
                                <div className='sectionfortopsectionofsection1ofsection2foranalyticspage'>
                                    <span className='fundnameforanalyticspage'>
                                        Expense Ratio
                                    </span>
                                    <span className='funddurationforanalyticspage'>
                                        1.71%
                                    </span>
                                    <span className='funddateforanalyticspage'>
                                        as of May 23, 2025
                                    </span>
                                </div>
                                <div className='sectionfortopsectionofsection1ofsection2foranalyticspage'>
                                    <span className='fundnameforanalyticspage'>
                                        Exit Load
                                    </span>
                                    <span className='funddurationforanalyticspage'>
                                        1%
                                    </span>
                                    <span className='funddateforanalyticspage'>
                                        upto 12 Months
                                    </span>
                                </div>
                                <div className='sectionfortopsectionofsection1ofsection2foranalyticspage'>
                                    <span className='fundnameforanalyticspage'>
                                        Ideal holding period
                                    </span>
                                    <span className='funddurationforanalyticspage'>
                                        10 Years+
                                    </span>
                                </div>
                            </div>
                            <div id='bottomsectionofsection1ofsection2foranalyticspage'>
                                <div id='insideofbottomsectionofsection1ofsection2foranalyticspage'>
                                    <div id='filterforyearsforanalyticspage'>
                                        <button className='selectedbutton'>
                                            6 Month
                                        </button>
                                        <button className='defaultbutton'>
                                            1Y
                                        </button>
                                        <button className='defaultbutton'>
                                            3Y
                                        </button>
                                        <button className='defaultbutton'>
                                            Inception
                                        </button>

                                    </div>
                                </div>
                                <img src={graph} alt="" />
                                <div id='graphlegendforanalyticspage'>
                                    <div id='leftsideforgraphlegendforanalyticspage'>
                                        <div id='leftleftsideforgraphlegendforanalyticspage'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <circle cx="6.5" cy="6.5" r="6" fill="#282828" id='svg1' />
                                            </svg>
                                            <span id='legendtext1'>
                                                Wealth Large Cap Fund
                                            </span>
                                        </div>
                                        <div id='rightsideforgraphlegendforanalyticspage'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <g clip-path="url(#clip0_266_1315)">
                                                    <path d="M9.16797 8.50002V13.8334H7.83464V8.50002H3.16797L8.5013 3.16669L13.8346 8.50002H9.16797Z" fill="#278829" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_266_1315">
                                                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span id='legendtext2'>
                                                1.53%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='section2ofsection2foranalyticspage'>
                            <div id='topsectionofsection2ofsection2foranalyticspage'>
                                <div id='toptopsectionofsection2ofsection2foranalyticspage'>
                                    <span id='leftsidefortoptopsectionofsection2ofsection2foranalyticspage'>
                                        Portfolio
                                    </span>
                                    <span id='rightsidefortoptopsectionofsection2ofsection2foranalyticspage'>
                                        as of Apr 30, 2025
                                    </span>
                                </div>
                                <div id='bottomsectionofsection2ofsection2foranalyticspage'>
                                    <button className='selecteddefaultbuttonforsection2ofsection2foranalyticspage'>
                                        <span id='leftsideforbuttonofsection2ofsection2foranalyticspage'>
                                            Equity
                                        </span>
                                        <span id='rightsideforbuttonofsection2ofsection2foranalyticspage'>
                                            93.0%
                                        </span>
                                    </button>
                                    <button className='defaultbuttonforsection2ofsection2foranalyticspage'>
                                        <span id='leftsideforbuttonofsection2ofsection2foranalyticspage'>
                                            Debt
                                        </span>
                                        <span id='rightsideforbuttonofsection2ofsection2foranalyticspage'>
                                            6.09%
                                        </span>
                                    </button>
                                    <button className='defaultbuttonforsection2ofsection2foranalyticspage'>
                                        <span id='leftsideforbuttonofsection2ofsection2foranalyticspage'>
                                            Others
                                        </span>
                                        <span id='rightsideforbuttonofsection2ofsection2foranalyticspage'>
                                            0.1%
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div id='section1foranalyticspage'>
                                <div className='selectedoptionforanalyticspage'>
                                    Indian (90.1%)
                                </div>
                                <div className='optionforanalyticspage'>
                                    Global (2.9%)
                                </div>
                            </div>
                            <div id='middlesectionofsection2ofsection2foranalyticspage'>
                                <div id='topsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                    <span id='leftsidefortopsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        Market Cap
                                    </span>
                                    <div id='rightsidefortopsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        <button id='selectedbuttonblack'>
                                            Holdings
                                        </button>
                                        <button id='graybutton'>
                                            Sectors
                                        </button>
                                    </div>
                                </div>
                                <div id='middlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                    <div id='leftsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        <img src={piegraph} alt="" id='piegraph' />
                                        <div id='bottomsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                            <div className='divforadditionaltext'>
                                                <div id='outerdivforadditionaltext'>
                                                    <div id='textforadditionaltext'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <circle cx="6" cy="6" r="6" fill="#1E6942" />
                                                        </svg>
                                                        <span className='textforadditionaltext'>
                                                            Large Cap
                                                        </span>
                                                    </div>
                                                    <span className='textforadditionaltext'>
                                                        52.6%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='divforadditionaltext'>

                                                <div id='outerdivforadditionaltext'>
                                                    <div id='textforadditionaltext'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <circle cx="6" cy="6" r="6" fill="#282828" />
                                                        </svg>
                                                        <span className='textforadditionaltext'>
                                                            Mid Cap
                                                        </span>
                                                    </div>
                                                    <span className='textforadditionaltext'>
                                                        38.2%
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='divforadditionaltext'>
                                                <div id='outerdivforadditionaltext'>
                                                    <div id='textforadditionaltext'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <circle cx="6" cy="6" r="6" fill="#B5B5B5" />
                                                        </svg>
                                                        <span className='textforadditionaltext'>
                                                            Small Cap
                                                        </span>
                                                    </div>
                                                    <span className='textforadditionaltext'>
                                                        9.3%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id='rightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        <div id='outersectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                            <div id='topsectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    Holdings
                                                </span>
                                                <span className='textforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    Weight %
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>
                                            <div className='middlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                                    HDFC Bank Limited
                                                </span>
                                                <span className='textformiddlesectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage' style={{ fontSize: '14px' }}>
                                                    4.9%
                                                </span>
                                            </div>

                                        </div>
                                        <div id='bottomsectionforrightsectionformiddlesectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                            <span>
                                                Equity includes Stocks, Domestic Fund of Funds and ETFs
                                            </span>
                                            <Link to="#" className="goldenlink3">VIEW ALL HOLDINGS</Link>
                                        </div>
                                    </div>
                                </div>
                                <div id='bottomsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                    <span className='textforbottomsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        Indicators
                                    </span>
                                    <div id='bottomsectionforbottomsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                        <span id='leftsideforbottomsectionforbottomsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                            Portfolio turnover ratio
                                        </span>
                                        <span id='rightsideforbottomsectionforbottomsectionformiddlesectionofsection2ofsection2foranalyticspage'>
                                            0.41 last 12 months
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='section3ofsection2foranalyticspage'>
                            <div id='topsectionofsection3ofsection2foranalyticspage'>
                                <span id='leftsidefortopsectionofsection3ofsection2foranalyticspage'>
                                    Performance
                                </span>
                                <div id='rightsidefortopsectionofsection3ofsection2foranalyticspage'>
                                    <Link to='#' className='goldenlink3'>SCHEME DISCLAIMERS</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.1727 12L9.34375 9.17196L10.7577 7.75696L15.0007 12L10.7577 16.243L9.34375 14.828L12.1727 12Z" fill="#09121F" />
                                    </svg>
                                </div>
                            </div>
                            <div id='middlesectionofsection3ofsection2foranalyticspage'>
                                <div className='sectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                    <div id='topsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                        <span id='lefttextfortopsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Annualised returns
                                        </span>
                                        <span id='righttextfortopsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            as on 31 Mar 2025
                                        </span>
                                    </div>
                                    <div id='middlesectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                        <div id='topsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <div id='blankspacediv'>
                                            </div>
                                            <div id='rightsidedivforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    1 Year
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    3 Years
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    5 Years
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    since Inception
                                                </span>
                                            </div>
                                        </div>
                                        <div className='othersectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage lefttext1' id=''>
                                                NIFTY LargeMidcap 250 (TRI) ^
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    11.05%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    20.52%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    25.31%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                        <div className='selectedsectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                Wealth Large Cap Fund
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    11.05%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    20.52%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    25.31%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                        <div className='othersectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage lefttext1' id=''>
                                                NIFTY LargeMidcap 250 (TRI) ^
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    11.05%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    20.52%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    25.31%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='sectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                    <div id='topsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                        <span id='lefttextfortopsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Current Value
                                        </span>
                                        <span id='righttextfortopsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            as on 31 Mar 2025
                                        </span>
                                    </div>
                                    <div id='middlesectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                        <div id='topsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <div id='blankspacediv'>
                                            </div>
                                            <div id='rightsidedivforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    1 Year
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    3 Years
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    5 Years
                                                </span>
                                                <span className='timeframesforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                    since Inception
                                                </span>
                                            </div>
                                        </div>
                                        <div className='othersectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage lefttext1' id=''>
                                                NIFTY LargeMidcap 250 (TRI) ^
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    11.05%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    20.52%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    25.31%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                        <div className='selectedsectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                Wealth Large Cap Fund
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    11.05%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    20.52%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    25.31%
                                                </span>
                                                <span className='selectedtextforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext2'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                        <div className='othersectionsformiddlesectionofsection3ofsection2foranalyticspage'>
                                            <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage lefttext1' id=''>
                                                NIFTY LargeMidcap 250 (TRI) ^
                                            </span>
                                            <div id='rightsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    11.05%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    20.52%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    25.31%
                                                </span>
                                                <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage righttext1'>
                                                    17.77%
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id='otherinformationdivforanalyticspage'>
                                    <div id='topsectionforotherinformationdivforanalyticspage'>
                                        <span id='leftsidefortopsectionforotherinformationdivforanalyticspage'>
                                            ^ Fund Benchmark    # Additional Benchmark
                                        </span>
                                        <span id='rightsidefortopsectionforotherinformationdivforanalyticspage'>
                                            <Link className='goldenlink3' style={{ textDecoration: 'underline' }} to="https://www.dspim.com/mandatory-disclosures/information-ratio" target='_blank'>Click here</Link> to view the information ratio of the scheme.
                                        </span>
                                    </div>
                                    <div id='middlesectionforotherinformationdivforanalyticspage'>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Date of allotment: <b>May 16, 2000.</b>
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Period for which fund's performance has been provided is computed based on last day of the month-end preceding the date of advertisemen
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Different plans shall have a different expense structure. The performance details provided herein are of Regular Plan.
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Since inception returns have been calculated from the date of allotment till April 30, 2025
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Past performance may or may not be sustained in future and should not be used as a basis for comparison with other investments
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Rolling returns have been calculated based on returns from regular plan growth option.
                                        </span>
                                        <span className='textforsectionformiddlesectionofsection3ofsection2foranalyticspage'>
                                            Pursuant to payments of Income Distribution cum Capital Withdrawal, the NAV of the IDCW option(s) of Schemes would fall to the extent of payout, and statutory levy, if any.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='section4ofsection2foranalyticspage'>
                            <div id="insidesectionofanalyticspage">
                                <span id='leftsideforsection4ofsection2foranalyticspage'>
                                    Tax Implication, Exit Load and Expense Ratio
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                </svg>
                            </div>
                        </div>
                        <div id='section5ofsection2foranalyticspage'>
                            <div id='topsectionforsection5ofsection2foranalyticspage'>
                                <span id='leftsidefortopsectionforsection5ofsection2foranalyticspage'>
                                    Fund Overview
                                </span>
                                <div id='rightsidefortopsectionforsection5ofsection2foranalyticspage'>
                                    <span id='textforrightsidefortopsectionforsection5ofsection2foranalyticspage'>
                                        SCHEME DISCLAIMERS
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.1727 12.0001L9.34375 9.17208L10.7577 7.75708L15.0007 12.0001L10.7577 16.2431L9.34375 14.8281L12.1727 12.0001Z" fill="#09121F" />
                                    </svg>
                                </div>
                            </div>
                            <div id='middlesectionforsection5ofsection2foranalyticspage'>
                                <span className='toptextforsection5ofsection2foranalyticspage'>
                                    Fund Managers:
                                </span>
                                <div className='cardsforsection5ofsection2foranalyticspage'>
                                    <div className='insidecardforsection5ofsection2foranalyticspage'>
                                        <img src={avatar2} alt="" className='avatar2' />
                                        <div id='middlesectionforinsidecardforsection5ofsection2foranalyticspage'>

                                            <div id='topsectionforinsidecardforsection5ofsection2foranalyticspage'>
                                                <span id='nameoftheperson'>
                                                    Bhavya Bagrecha
                                                </span>
                                                <div id='designationofpersondiv'>
                                                    <span className='designationtext'>Fund Manager</span>
                                                    <span className='designationtext'>CA, CS, ICWA, M.Com (Gold Medalist) | 22+ years of experience
                                                    </span>
                                                </div>
                                            </div>
                                            <span id='descriptionofperson'>
                                                Bhavya Bagrecha brings over two decades of leadership across real <br />estate, investments, and strategic financial planning. He has managed...
                                            </span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id='downarrowsvg'>
                                            <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='cardsforsection5ofsection2foranalyticspage'>
                                    <div className='insidecardforsection5ofsection2foranalyticspage'>
                                        <img src={avatar2} alt="" className='avatar2' />
                                        <div id='middlesectionforinsidecardforsection5ofsection2foranalyticspage'>

                                            <div id='topsectionforinsidecardforsection5ofsection2foranalyticspage'>
                                                <span id='nameoftheperson'>
                                                    Bhavya Bagrecha
                                                </span>
                                                <div id='designationofpersondiv'>
                                                    <span className='designationtext'>Fund Manager</span>
                                                    <span className='designationtext'>CA, CS, ICWA, M.Com (Gold Medalist) | 22+ years of experience
                                                    </span>
                                                </div>
                                            </div>
                                            <span id='descriptionofperson'>
                                                Bhavya Bagrecha brings over two decades of leadership across real <br />estate, investments, and strategic financial planning. He has managed...
                                            </span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id='downarrowsvg'>
                                            <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                </div>
                                <div id='faqsection1div'>
                                    <span id='headingforfaqsection1div'>
                                        Things to know before you invest
                                    </span>
                                    <div id='topsectionforfaqsection1div'>
                                        <div id='toptopsectionforfaqsection1div'>
                                            <span id='leftsidefortoptopsectionforfaqsection1div'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0008 8.99998L7.75781 13.243L9.17281 14.657L12.0008 11.828L14.8288 14.657L16.2438 13.243L12.0008 8.99998Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div id='bottomsectionforfaqsection1div'>
                                        <ul className='list-disc list-inside'>
                                            <li className='listitemforfaqsection1div'>
                                                Quisque in placerat libero, at vehicula nulla. Mauris vulputate neque quis ipsum finibus vulputate. Vivamus purus mauris, aliquam a suscipit in,
                                            </li>
                                            <li className='listitemforfaqsection1div'>
                                                Quisque in placerat libero, at vehicula nulla. Mauris vulputate neque quis ipsum finibus vulputate. Vivamus purus mauris, aliquam a suscipit in,
                                            </li>
                                            <li className='listitemforfaqsection1div'>
                                                Quisque in placerat libero, at vehicula nulla. Mauris vulputate neque quis ipsum finibus vulputate. Vivamus purus mauris, aliquam a suscipit in,
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='carddivforfaqsection1div'>
                                        <div className='insidedivforcarddivforfaqsection1div'>
                                            <span id='textforcarddivforfaqsection1div'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='carddivforfaqsection1div'>
                                        <div className='insidedivforcarddivforfaqsection1div'>
                                            <span id='textforcarddivforfaqsection1div'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='carddivforfaqsection1div'>
                                        <div className='insidedivforcarddivforfaqsection1div'>
                                            <span id='textforcarddivforfaqsection1div'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='carddivforfaqsection1div'>
                                        <div className='insidedivforcarddivforfaqsection1div'>
                                            <span id='textforcarddivforfaqsection1div'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0008 15L7.75781 10.757L9.17281 9.34302L12.0008 12.172L14.8288 9.34302L16.2438 10.757L12.0008 15Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div id='faqsection2div'>
                            <div id='insideoffaqsection2div'>
                                <div id='topsectionforfaqsection2div'>
                                    <span id='faqtext'>FAQ</span>
                                    <div id='bottomsectionfortopsectionforfaqsection2div'>
                                        <span id='headingtitleforfaqsection2div'>
                                            What can we help you find?
                                        </span>
                                        <div id='rightsidefortopsectionforfaqsection2div'>
                                            <span className='goldenlink2'>VIEW ALL FAQs</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.1727 11.9998L9.34375 9.17184L10.7577 7.75684L15.0007 11.9998L10.7577 16.2428L9.34375 14.8278L12.1727 11.9998Z" fill="#09121F" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div id='bottomsectionforfaqsection2div'>
                                    <div id='topsectionforbottomsectionforfaqsection2div'>
                                        <div id='leftsidefortopsectionforbottomsectionforfaqsection2div'>
                                            <span id='headingtextforbottomsectionforfaqsection2div'>
                                                Is it possible to cancel my subscription at any time?
                                            </span>
                                            <span className='bottomtextforbottomsectionforfaqsection2div'>
                                                Our subscription service provides a wide range of exclusive benefits aimed at enriching and elevating your overall user experience. By subscribing, you gain access to a plethora of features and perks designed to make your time with us even more enjoyable and rewarding.
                                            </span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 11H19V13H5V11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            What are the key features of Suspendisse ac risus ex?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            How can I benefit from Suspendisse ac risus ex?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            Is Suspendisse ac risus ex compatible with mobile devices?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            How do I contact support for Suspendisse ac risus ex?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            Can I customize the settings in Suspendisse ac risus ex?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                    <div id='divfortheothercontent'>
                                        <span id='textfordivfortheothercontent'>
                                            What are the most common issues users face?
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11 11V6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11Z" fill="#09121F" />
                                        </svg>
                                    </div>
                                    <img src={divider} alt="" className='divider' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='rightdivforanalyticspage'>
                    <div id='topframeforrightdivforanalyticspage'>
                        <span id='textfortopframeforrightdivforanalyticspage'>
                            The power of stable, trusted companies
                        </span>
                    </div>
                    <div id='middleframeforrightdivforanalyticspage'>
                        <div id='firstsectionformiddleframeforrightdivforanalyticspage'>
                            <span id='textforfirstsectionformiddleframeforrightdivforanalyticspage'>
                                Wealth Large Cap Fund
                            </span>
                            <div className='chip'>
                                <span id='textinsideequitychip'>Equity</span>
                            </div>
                        </div>
                        <div id='secondsectionformiddleframeforrightdivforanalyticspage'>
                            <div id='topsectionforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                <div id='divontheleftsideforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                    <span id='textforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <b>NAV</b> as on 23-May-2025
                                    </span>
                                    <div id='bottomsectionforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <span className='leftsideetextforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                            ₹22.14
                                        </span>
                                        <div id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_266_1668)">
                                                    <path d="M8.66797 7.99999V13.3333H7.33464V7.99999H2.66797L8.0013 2.66666L13.3346 7.99999H8.66797Z" fill="#278829" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_266_1668">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                                1.14%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id='divontheleftsideforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                    <span id='textforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <b>AUM</b> as on 23-May-2025
                                    </span>
                                    <div id='bottomsectionforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <span className='leftsideetextforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                            ₹ 7,235.36
                                        </span>
                                        <div id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_266_1668)">
                                                    <path d="M8.66797 7.99999V13.3333H7.33464V7.99999H2.66797L8.0013 2.66666L13.3346 7.99999H8.66797Z" fill="#278829" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_266_1668">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                                1.14%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='topsectionforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                <div id='divontheleftsideforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                    <span id='textforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <b>CAGR</b> as on 23-May-2025
                                    </span>
                                    <div id='bottomsectionforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        {/* <span className='leftsideetextforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                            ₹22.14
                                        </span> */}
                                        <div id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g clip-path="url(#clip0_266_1668)">
                                                    <path d="M8.66797 7.99999V13.3333H7.33464V7.99999H2.66797L8.0013 2.66666L13.3346 7.99999H8.66797Z" fill="#278829" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_266_1668">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span id="rightsideetextforsecondsectionformiddleframeforrightdivforanalyticspage">
                                                1.14%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id='divontheleftsideforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                    <span id='textforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        Risk
                                    </span>
                                    <div id='bottomsectionforleftsideofsecondsectionformiddleframeforrightdivforanalyticspage'>
                                        <span id='leftsideetextforsecondsectionformiddleframeforrightdivforanalyticspage'>
                                            Medium
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='blackbuttonforanalyticspage'>
                            Invest now
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Analyticspage;