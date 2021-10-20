import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container" sticky="bottom">

            <div className="footer ">
                <div>
                    <h3>ST Hospital</h3>
                    <div className="openingUl">
                        <ul>
                            <li>Address</li>
                            <li>Phone:</li>
                            <li>Email:</li>
                            <li>Success Storye</li>

                        </ul>
                        <ul className="time">
                            <li>  59 Street, 1200 Techpark</li>
                            <li>+02418525</li>
                            <li>st.hopita@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="opening">
                    <h3>Opening Hours</h3>
                    <div className="openingUl">
                        <ul>
                            <li>Saturday:     </li>
                            <li>Sunday:       </li>
                            <li>Monday:        </li>
                            <li>Tuesday:     </li>
                            <li>Wednesday:    </li>
                            <li>Thursday:     </li>
                            <li>Friday:       </li>
                        </ul>
                        <ul className="time">
                            <li>  closed</li>
                            <li>  always open</li>
                            <li>  always open</li>
                            <li>  always open</li>
                            <li> always open</li>
                            <li> always open</li>
                            <li>  closed</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div >
                <p>
                    © Copyright ST Hospital 2019. All Right Reserved. Designed and Developed by Developer Sabbir Hossain.
                </p>
            </div>
        </div>
    );
};

export default Footer;