import React, { useContext } from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import NavContext from "../../context/nav-context";
const About = () => {
    const ctx = useContext(NavContext);
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" className="about__me-about-img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Internships</h5>
                            <small>One (3 Months)</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Certfications</h5>
                            <small>2 Certificates</small>
                        </article>
                    </div>
                    <p>
                        I am Devendra Johari from Lakhimpur-Kheri, Uttar Pradesh. I am a final year student pursuing B.Tech in Computer Science 
                        from Graphic Era University, Dehradun. I also have an speciallisation in Machine Learning. In my 3rd year I successfully passed Redhat Engineer Exam (Ex294).
                        I have a keen interest in Frontend Development as well as in Machine Learning. I am a passionate, goal oriented and determinent learner. Besides that 
                        I also write poetries and sketching in my free time. My Aim is become a successfull engineer and a good human in my life. I hope you like my portfolio. Feel free to
                        contact Me.   
                    </p>
                    <a href="#contact" className="btn btn-primary" onClick={() => {
                        ctx.onChangeSection("#contact");
                    }}>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;