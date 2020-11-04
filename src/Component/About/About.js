import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'

const About = () => {
    
    return (
        <section className='about-container'>
            <div className="intro-self">            
            <h1 className='text-center'>About Me </h1>
            <h3>Hello I Sayman</h3>
            <p>My name is Al-Amin Sayman I'm a 20 year old Front End Engineer based in Barcelona ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
                Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.

                In my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences around Barcelona and Europe 🗺</p>
            <div className="row">
                <div className="col-md-4">
               <a href="https://github.com/saymanbro"> <Button >GitHub</Button></a>
                </div>
                <div className="col-md-4">
                <a href="https://www.linkedin.com/in/al-aminsayman000/"><Button >LinkedIn Profile</Button></a>
                </div>
                <div className="col-md-4">
                <a href="https://drive.google.com/file/d/1AJ8k5U1vc5YLPJ5W_VMv7li3leEvj4Vh/view?usp=sharing"><Button >Resume</Button></a>
                </div>
            </div>

            </div>
        </section>
    );
};

export default About;