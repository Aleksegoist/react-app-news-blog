import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='box logo'>
                        <h1 className='footerLogo'>
                            NEWS<span>LAB</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod nesciunt molestiae vitae quam reiciendis
                            dolore libero beatae error nobis debitis.
                        </p>
                        <i className='fa fa-envelope'></i>
                        <span>test@gmail.com</span> <br />
                        <i className='fa fa-headphones'></i>
                        <span>+425 25475896</span>
                    </div>
                    <div className='box'>
                        <h3>SPORT</h3>
                        <div className='item'>
                            <img src='../images/hero/hero1.jpg' alt='' />
                            <p>
                                Boeing Changes Will Make Planes Safer, Executive
                                Says
                            </p>
                        </div>
                        <div className='item'>
                            <img src='../images/hero/hero2.jpg' alt='' />
                            <p>
                                Max Verstappen Leads F1’s Changing of the Guard
                            </p>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>CRICKET</h3>
                        <div className='item'>
                            <img src='../images/hero/hero3.jpg' alt='' />
                            <p>No escaping new high tech speed cameras</p>
                        </div>
                        <div className='item'>
                            <img src='../images/hero/hero4.jpg' alt='' />
                            <p>Emma Watson stands up for Turkish women</p>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>LABELS</h3>
                        <ul>
                            <li>
                                <span>Boxing</span>
                                <label>(5)</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Fashion</span>
                                <label>(6)</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Health</span>
                                <label>(7)</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Nature</span>
                                <label>(9)</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <div className='container flexSB'>
                    <p>All Right Reserved</p>
                    <p>made by AYDev.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
