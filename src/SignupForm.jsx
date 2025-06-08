import React from 'react'
import ss1 from './assets/ss1.svg';
import closeline from './assets/closeline.svg';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
    const navigate = useNavigate();
    return (
        <div className='sm:w-[1440px] sm:h-[1024px] bg-[#282828] flex justify-center items-center'>

            <img src={closeline} alt="" className='w-[32px] h-[32px] absolute top-4 right-3 hover:cursor-pointer' onClick={() => navigate(-1)} />

            <form className='sm:inline-flex sm:flex-col sm:p-[48px] sm:items-center sm:gap-4 sm:rounded-[24px] sm:border sm:border-[#E2E2E2] sm:bg-[#FFF] sm:w-[500px]'>
                <div id='topsection'>
                    <span id='topsection-text'>
                        Be the first to experience The Wealth Company
                    </span>
                    <span id='topsection-text2'>
                        Join the waitlist
                    </span>
                </div>
                <div id='formsection'>
                    <label htmlFor="name" id='formsection-label'>Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter name' />
                    <label htmlFor="mobilenumber" id='formsection-label'>Mobile Number</label>
                    <input type="text" id="name" name="mobilenumber" placeholder='Enter Mobile number' />
                    <label htmlFor="email" id='formsection-label'>Email ID</label>
                    <input type="text" id="name" name="email" placeholder='Enter Email ID' />
                    <div id='optionscheck'>
                        <div id='labeltextcontainer'>
                            Are you?
                        </div>
                        <div id='radiooptions'>
                            <div id='radiooption1'>
                                <input type="radio" name="distributor" id="distributorradio" className='radiobuttons' />
                                <label htmlFor="distributorradio" className='radiobuttons-label'>Distributor</label>
                            </div>
                            <div id='radiooption2'>
                                <input type="radio" name="investor" id="investorradio" className='radiobuttons' />
                                <label htmlFor="investorradio" className='radiobuttons-label'>Investor</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='termsandconditionssection'>
                    <div className='termsandconditionsdiv'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className='termsandconditions-label'>I have read and agree to The Wealth Company Ltd., <span className='terms-and-conditions-link'>Terms & Conditions</span> & <span className='terms-and-conditions-link'>Privacy Policy</span></label>
                    </div>
                    <div className='termsandconditionsdiv'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className='termsandconditions-label'>I hereby consent to receive promotional communications from The Wealth Company Ltd., I understand that I can unsubscribe at any time.</label>
                    </div>
                </div>
                <div id='captchasection'>
                    <div id='topsectionofcaptcha'>
                        <img src={ss1} alt="" id='captchaimage' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.64216 2.95526C4.85187 1.90703 6.39949 1.33103 8.00016 1.33326C11.6822 1.33326 14.6668 4.31793 14.6668 7.99993C14.6668 9.42393 14.2202 10.7439 13.4602 11.8266L11.3335 7.99993H13.3335C13.3336 6.95434 13.0263 5.93179 12.4499 5.05943C11.8735 4.18706 11.0535 3.50336 10.0916 3.09334C9.12978 2.68332 8.06864 2.56506 7.04013 2.75327C6.01163 2.94148 5.06113 3.42786 4.30683 4.15193L3.64216 2.95526ZM12.3582 13.0446C11.1485 14.0928 9.60084 14.6688 8.00016 14.6666C4.31816 14.6666 1.3335 11.6819 1.3335 7.99993C1.3335 6.57593 1.78016 5.25593 2.54016 4.17326L4.66683 7.99993H2.66683C2.66674 9.04551 2.974 10.0681 3.55039 10.9404C4.12678 11.8128 4.94687 12.4965 5.90871 12.9065C6.87055 13.3165 7.93169 13.4348 8.96019 13.2466C9.9887 13.0584 10.9392 12.572 11.6935 11.8479L12.3582 13.0446Z" fill="#09121F" />
                        </svg>
                    </div>
                    <div id='bottomsectionofcaptcha'>
                        <input type="text" id="captcha" name="captcha" placeholder='Enter Captcha text' />
                    </div>
                </div>
                <button id='submitbutton' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignupForm;
