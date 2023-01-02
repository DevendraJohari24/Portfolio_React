import React, { useContext } from "react";
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavContext from "../../context/nav-context";
const Header = () => {
    const ctx = useContext(NavContext);
    return (
        <>
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Devendra Johari</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" className="me__image" />
                </div>
                <AnchorLink href="#contact" className="scroll__down" onClick={() => {
                    ctx.onChangeSection("#contact");
                }}>Scroll Down</AnchorLink>
            </div>
        </header>
        </>
    );
}

export default Header;