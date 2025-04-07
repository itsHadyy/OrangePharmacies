import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {

    const logo = '/media/logo.png';
    const img02 = '/media/GooglePlay.png';
    const img03 = '/media/AppStore.png';
    const img04 = '/media/futApp.png';

    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <Link to="/">
                        <img src={logo} className="logo" alt="Orange Pharmacies Logo" />
                    </Link>

                    <div className="download-section">
                        <h3>Download our app Now!</h3>
                        <div className='appStoreContainer'>
                            <a href='https://www.apple.com/app-store/' target='_blank'>
                                <img src={img02} alt="" />
                            </a>
                            <a href='https://www.apple.com/app-store/' target='_blank'>
                                <img src={img03} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="social-media">
                        <h3>Social Media Links</h3>
                        <div className="icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-telegram"></i>
                            <i className="fab fa-tiktok"></i>
                            <i className="fab fa-x-twitter"></i>
                        </div>
                        <div className="lang">
                            <Link to="/">
                                <button className="btn">English</button>
                            </Link>
                            <Link to="/ar">
                                <button className="btn">العربية</button>
                            </Link>
                        </div>
                    </div>

                    <div className="lang-mobile">
                        <Link to="/">
                            <button className="btn">English</button>
                        </Link>
                        <Link to="/ar">
                            <button className="btn">العربية</button>
                        </Link>
                    </div>

                    {/* Contact Section */}
                    <div className="contact-section">
                        <h3>Get in touch</h3>
                        <table>
                            <tr>
                                <td>
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.552 20.133C14.112 20.08 10.031 19.516 5.757 15.243C1.484 10.969 0.921 6.88897 0.867 5.44797C0.787 3.25197 2.469 1.11897 4.412 0.285971C4.64598 0.184938 4.9022 0.146472 5.15553 0.174347C5.40886 0.202222 5.65059 0.29548 5.857 0.444971C7.457 1.61097 8.561 3.37497 9.509 4.76197C9.71758 5.0667 9.80677 5.43752 9.75956 5.80377C9.71235 6.17002 9.53204 6.5061 9.253 6.74797L7.302 8.19697C7.20774 8.26504 7.14139 8.365 7.11528 8.47829C7.08916 8.59159 7.10505 8.71051 7.16 8.81297C7.602 9.61597 8.388 10.812 9.288 11.712C10.188 12.612 11.441 13.45 12.3 13.942C12.4077 14.0024 12.5345 14.0193 12.6543 13.9892C12.774 13.9591 12.8777 13.8842 12.944 13.78L14.214 11.847C14.4475 11.5368 14.7919 11.329 15.1752 11.2672C15.5584 11.2053 15.9508 11.2941 16.27 11.515C17.677 12.489 19.319 13.574 20.521 15.113C20.6826 15.3209 20.7854 15.5684 20.8187 15.8296C20.8519 16.0908 20.8144 16.3562 20.71 16.598C19.873 18.551 17.755 20.214 15.552 20.133Z" fill="#363636" />
                                    </svg>
                                </td>
                                <td>
                                    +02 12345678
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.552 20.133C14.112 20.08 10.031 19.516 5.757 15.243C1.484 10.969 0.921 6.88897 0.867 5.44797C0.787 3.25197 2.469 1.11897 4.412 0.285971C4.64598 0.184938 4.9022 0.146472 5.15553 0.174347C5.40886 0.202222 5.65059 0.29548 5.857 0.444971C7.457 1.61097 8.561 3.37497 9.509 4.76197C9.71758 5.0667 9.80677 5.43752 9.75956 5.80377C9.71235 6.17002 9.53204 6.5061 9.253 6.74797L7.302 8.19697C7.20774 8.26504 7.14139 8.365 7.11528 8.47829C7.08916 8.59159 7.10505 8.71051 7.16 8.81297C7.602 9.61597 8.388 10.812 9.288 11.712C10.188 12.612 11.441 13.45 12.3 13.942C12.4077 14.0024 12.5345 14.0193 12.6543 13.9892C12.774 13.9591 12.8777 13.8842 12.944 13.78L14.214 11.847C14.4475 11.5368 14.7919 11.329 15.1752 11.2672C15.5584 11.2053 15.9508 11.2941 16.27 11.515C17.677 12.489 19.319 13.574 20.521 15.113C20.6826 15.3209 20.7854 15.5684 20.8187 15.8296C20.8519 16.0908 20.8144 16.3562 20.71 16.598C19.873 18.551 17.755 20.214 15.552 20.133Z" fill="#363636" />
                                    </svg>
                                </td>
                                <td>
                                    +02 01234567890
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="#363636" />
                                    </svg>
                                </td>
                                <td>
                                    Head Office, Piece 29 P.1 Industrial Zone, Katamya, Ain El Shokhna's Road, Al Basatine, Cairo, Egypt
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </footer >
            <div className="futApp">
                <p>
                    Powered By
                    <Link to="https://futapp.com">
                        <img src={img04} alt="Fut APP" />
                    </Link>
                    | &copy; All Rights Reserved
                </p>
            </div>
        </div>

    );
};

export default Footer;