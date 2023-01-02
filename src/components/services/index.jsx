import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
        <section id="services">
            <h5>What I can do</h5>
            <h2>Roles</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Machine Learning</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>All three types of Learning: Supervised, Unsupervised, Reinforcement.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Worked on different algorithms like Regression, Classification and Clustering.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Having an Experience as a Research Intern for a Machine Learning Role.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Hands on experience in Computer Vision, Tensorflow and Natural Language Processing.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Knows about integration with Flask, Tkinter or other Frameworks</p>
                        </li>
                   
                    </ul>
                </article>
                {/* END of UI UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Full Stack Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />
                            </div>
                            <p>Frontend : HTML, CSS, Javascript, ReactJS, Redux.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />

                            </div>
                            <p>Backend : Node JS, PHP.</p>
                        </li>
                        <li>
                            <div>
                                <BiCheck className="service__list-icon" />
                            </div>
                            <p>Database: MongoDB, MySQL.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Used following UI's for better user experience: Material UI, Chakra UI.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Frameworks like Bootstrap and Tailwind for fast and smart designing.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Made 5+ React Website , 1 Next JS website and many more major and mini projects using React, Tailwind, NextJS.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Currently Learning Next JS and Unit Testing in React.</p>
                        </li>
                    </ul>
                </article>
                {/* END of WEB DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>Software Developer</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />
                            </div>
                            <p>Solved 150+ Leetcode codes.</p>
                        </li>
                       
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Having depth knowledge of Data Structure and Algorithms.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Solved various problems based on Dynamic Programming, Binary Tree, Graphs, Linked List, Stacks and Queues.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>In Java, Made 2 to 3 major projects using Core Java, Java JDBC and Java Swing.</p>
                        </li>
                        <li>
                            <div>
                            <BiCheck className="service__list-icon" />

                            </div>
                            <p>Participates in various Coding Challenges and Hackathons like HackCBS etc.</p>
                        </li>
                    </ul>
                </article>
                {/* END of CONTENT CREATION */}
            </div>
        </section>
    );
}

export default Services;