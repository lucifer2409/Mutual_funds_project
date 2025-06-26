import React from 'react'
import leaderImage1 from '../assets/avatar.svg'; // Add placeholder leader images
import rightarrow2 from '../assets/rightarrow2.svg';
import add from '../assets/add.svg';

const Leaderscard = () => {
    return (
        <>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
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
                    <div className='card-back'>
                        <div className='backcardfortheleaders'>
                            <div id='insideframeforbackcardfortheleaders'>
                                <div id='topframeforbackcardfortheleaders'>
                                    <span className='topofframe1'>Prasanna Pathak</span>
                                    <span className='backbottomofframe1'>CEO</span>
                                </div>
                                <span id='contentdiv'>
                                    As the Managing Director of The Wealth Company, the distribution and asset management arm of Pantomath Group, Madhu Lunawat is leading the charge in redefining asset management and financial distribution. With a sharp financial acumen that embodies "Womoneya"—the perfect blend of women and money—she is building a powerhouse that connects capital with opportunity. Madhu is also the Co-Founder of Pantomath Group, a business spanning Investment Banking, M&A, Asset & Wealth Management, Institutional Equity, and Distribution. Her vision has helped shape the financial landscape, driving SME growth, structuring landmark institutional deals, and executing record-breaking fundraises. Her journey includes pivotal roles at Infosys, ASREC, and Edelweiss, where she served as CFO of Edelweiss ARC before taking the entrepreneurial leap. Today, her leadership at The Wealth Company is setting new benchmarks—proving that finance isn’t just about numbers, but about vision, bold moves, and breaking barriers.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderscard

