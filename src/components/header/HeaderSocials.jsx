import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/devendra-johari-a169b0190/" ><BsLinkedin /></a>
            <a href="https://github.com/DevendraJohari24"  ><FaGithub/> </a>
            <a href="https://leetcode.com/devendrajohari9/"  ><FiDribbble/> </a>

        </div>
    );
}

export default HeaderSocials;