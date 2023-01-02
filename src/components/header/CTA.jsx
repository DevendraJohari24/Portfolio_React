import React, { useContext } from "react";
import CV from '../../assets/cv.pdf';
import NavContext from "../../context/nav-context";

const CTA = () => {
    const ctx = useContext(NavContext);
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" onClick={() => {
                ctx.onChangeSection("#contact");
            }} className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default CTA;