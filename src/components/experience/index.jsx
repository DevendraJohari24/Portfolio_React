import React from "react";
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Technical Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>C++</h4>
                            {/* <small className="text-light"></small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Java</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Python</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>HTML</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>CSS</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>JavaScript</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>MySQL</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>PHP</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Bootstrap</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        {/* <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Tailwind</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article> */}
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>React</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>TypeScript</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        
                    </div>
                </div>
                {/* FRONTEND END */}
                <div className="experience__backend">
                <h3>Franeworks / Technologies</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Next</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Redux/Redux Toolkit</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Tailwind</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Machine Learning</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Deep Learning</h4>
                            {/* <small className="text-light">Basic</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Ansible</h4>
                            {/* <small className="text-light">Basic</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Google Cloud Platform</h4>
                                {/* <small className="text-light">Basic</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>AWS</h4>
                                {/* <small className="text-light">Basic</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                            <h4>Docker</h4>
                            {/* <small className="text-light">Experienced</small> */}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Kubernetes</h4>
                                {/* <small className="text-light">Basic</small> */}
                            </div>
                        </article>
                    </div>
                </div>                
            </div>
        </section>
    );
}

export default Experience;