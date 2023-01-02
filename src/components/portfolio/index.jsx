import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Blog Website : Meetly",
        github: "https://github.com/DevendraJohari24/MeetlyWebNextJS",
        demo: "https://dribble/com"
    },
    {
        id: 2,
        image: IMG2,
        title: "Food Reciepe App: Recieppy",
        github: "https://github.com/DevendraJohari24/ReciepyyApp",
        demo: "https://expo.dev/accounts/devendrajohari/projects/foodweb-app/builds/ba8611b6-8009-4561-938d-f0d28fa60e0e"
    },
    {
        id: 3,
        image: IMG3,
        title: "University Management System",
        github: "https://github.com/DevendraJohari24/UniversityManagementSystem",
        demo: "https://dribble/com"
    },
    {
        id: 4,
        image: IMG4,
        title: "Cab Booking System",
        github: "https://github.com/DevendraJohari24/CabBookingSystem/",
        demo: "https://dribble/com"
    },
    {
        id: 5,
        image: IMG5,
        title: "Realtime Face Mask Detection",
        github: "https://github.com/DevendraJohari24/FaceMaskDetection/",
        demo: "https://dribble/com"
    },
    {
        id: 6,
        image: IMG6,
        title: "Admin Dashboard & Performance Visualisation",
        github: "https://github.com/DevendraJohari24/AdminDashboard_MaterialUI",
        demo: "https://dribble/com"
    }


]



const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article className="portfolio__item" key={id}>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} className="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                <a href={github} className="btn">Github</a>
                                <a href={demo} className="btn btn-primary">Live Demo</a>
                                </div>
                            </article>
                        );
                    })
                }
                
            </div>
        </section>
    );
}

export default Portfolio;