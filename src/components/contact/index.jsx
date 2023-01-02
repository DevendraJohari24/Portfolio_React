import React, {useRef} from "react";
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ek032h', 'template_uagihy6', form.current, '6d8OQz_t9mT_2zS_A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };



    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>devendrajohari9@gmail.com</h5>
                        <a href="mailto:devendrajohari9@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>devendradj</h5>
                        <a href="https://m.me/devendradj">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+916386946873</h5>
                        <a href="https://api.whatsapp.com/send?phone=+916386946873">Send a message</a>
                    </article>
                </div>
                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="text" name='email' placeholder="Your Email" required />
                    <textarea name='message' rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary" >Send Message</button>

                </form>
            </div>
        </section>
    );
}

export default Contact;