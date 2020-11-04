
import { Button } from '@material-ui/core';
import React from 'react';
import skill from '../../images/animated-skills-bar.jpg'
import './Skill.css'

const Skills = () => {
    return (
        <section className='skill-section'>
           
                <div className="row ">
                   <div className="col-md-6 skill-list">
                   <h1>  My creative skills & experiences.</h1>
                <strong>Expertise : React, Javascript , ES6 , Bootstrap,React Bootstrap, Material Ui, DOM, HTML, CSS.
                Comfortable : laravel , PHP ,Redux, SCSS.
                Familiar : MySQL, Nodejs ,express js, d3, Mongodb, Heroku, firebase,netlify.
                Tools : Git ,VScode,PhpStorm, asana ,jira</strong>
                <br/>
                <Button variant='contained' color='secondary'>Read More</Button>
                   </div>
                    
                    <div className="col-md-6 pt-2">
                        <img src={skill} className='w-10' alt=""/>
                    </div>
                </div>
            
        </section>
    );
};

export default Skills;