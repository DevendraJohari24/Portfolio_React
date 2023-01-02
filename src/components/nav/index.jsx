import React, { useContext } from "react";
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from "react-icons/bi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavContext from "../../context/nav-context";


const Nav = () => {
    const ctx = useContext(NavContext);
    return (
        <>
        <nav>
            
        <AnchorLink href="#home" onClick={() => {
                ctx.onChangeSection("#home");
            }} className={ctx.activeSection==="#home" ? 'active': ''}><AiOutlineHome /></AnchorLink>
        <AnchorLink href="#about" onClick={() => {
                ctx.onChangeSection("#about");
            }} className={ctx.activeSection==="#about" ? 'active': ''}><AiOutlineUser /></AnchorLink>
        <AnchorLink href="#experience" onClick={() => {
                ctx.onChangeSection("#experience");
            }} className={ctx.activeSection==="#experience" ? 'active': ''}><BiBook /></AnchorLink>
        <AnchorLink href="#services" onClick={() => {
                ctx.onChangeSection("#services");
            }} className={ctx.activeSection==="#services" ? 'active': ''}><RiServiceLine /></AnchorLink>
          <AnchorLink href="#contact" onClick={() => {
                ctx.onChangeSection("#contact");
            }} className={ctx.activeSection==="#contact" ? 'active': ''}><BiMessageSquareDetail /></AnchorLink>
        
        </nav>
        </>
    );
}

export default Nav;