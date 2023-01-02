import React, { useContext } from "react";
import './footer.css'
import {FaFacebook} from'react-icons/fa';
import {FiInstagram} from'react-icons/fi';
import {IoLogoTwitter} from'react-icons/io';
import NavContext from "../../context/nav-context";



const Footer = () => {
    const ctx = useContext(NavContext);
    return (
        <footer>
            <a href="#home" className="footer__logo">DEVENDRA</a>
            <ul className="permalinks">
                <li><a href="#home" onClick={() => {
                    ctx.onChangeSection("#home");
                }}>Home</a></li>
                <li><a href="#about" onClick={() => {
                    ctx.onChangeSection("#about");
                }}>About</a></li>
                <li><a href="#experience" onClick={() => {
                    ctx.onChangeSection("#experience");
                }}>Experience</a></li>
                <li><a href="#services" onClick={() => {
                    ctx.onChangeSection("#services");
                }}>Services</a></li>
                <li><a href="#portfolio" onClick={() => {
                    ctx.onChangeSection("#portfolio");
                }}>Portfolio</a></li>
                <li><a href="#testimonials" onClick={() => {
                    ctx.onChangeSection("#testimonials");
                }}>Testimonials</a></li>
                <li><a href="#contact" onClick={() => {
                    ctx.onChangeSection("#contact");
                }}>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebook/> </a>
                <a href="https://instagram.com"><FiInstagram /> </a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>

            </div>

            <div className="footer__copyright">
                <small>&copy; Devendra. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;