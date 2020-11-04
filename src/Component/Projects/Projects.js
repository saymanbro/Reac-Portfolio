import { Button } from '@material-ui/core';
import React from 'react';
import volunteer from '../../images/volunteer.PNG';
import ecommerce from '../../images/ecomarce.PNG';
import eSchool from '../../images/eschool.PNG'

const Projects = () => {
   
    return (
        <section className='project-container'>
            <div className="projects">
            <h1 className='text-center'>My Projects</h1>
              <div className="row mb-20">
                  <div className="col-md-6 text-center" >
                        <h2>Full Stuck Website</h2>
                        <h4>Project Name: Volunteer Website</h4>
                        <p>Detail: This is volunteer workshop website. By this website anyone can participate with any volunteering workshop like Local Park Cleaning, Food for street children.</p>
                        <strong>Technology: HTML, CSS, JAVASCRIT, ES6,BOOTSTRAP, MATERIUL UI, REACT, FIREBASE, MONGODB, HERO KU </strong>
                        <br/>
                        <br/>  
                        <a href="https://github.com/saymanbro/ema-jhon-simple/" ><Button variant='contained' color='secondary'>GitHub</Button></a>                      
                        <a href="https://volunteerworkshop.web.app/"><Button variant='contained' color='secondary'> Live Site link</Button></a>
                 </div>
                 <div className="col-md-6">
                  <img src={volunteer} className="w-200" alt=""/>
                </div>      
              </div>  

              <div className="row">
                  <div className="col-md-6 text-center ">
                         <h2>Ecommerce Website</h2>
                         <h4>Project Name: Ema-John-Ecommerce</h4>
                        <p> Detail:  This is an Ecommerce website. People can shopping thousands of various product easily. This modern word changed our life that is why people sometimes can’t get time to shop in market but no problem! Now-days by the Ecommerce website people shop any kind of product within one minute. </p>
                        <strong> Technology: HTML, CSS, JAVASCRIT, ES6,BOOTSTRAP, MATERIUL UI, REACT, FIREBASE, MONGODB, HERO KU</strong>
                        <br/>
                        <br/>
                     <a href=" https://github.com/saymanbro/ema-jhon-simple"><Button variant='contained' color='secondary'>GitHub</Button></a>
                        <Button variant='contained' color='secondary'>Live Site Link</Button>
                 </div>
                 <div className="col-md-6">
                <img src={ecommerce} className='w-200' alt=""/>
                </div>      
              </div>  

              <div className="row">
                  <div className="col-md-6 text-center ">
                    <h2>Online School Website</h2>
                    <h4>Project Name: E-School Site</h4>
                    <p>Detail:   This is online school website. The website has been made to easy learning method. Sometimes we stacked at traffic jam and this is common issue, so anyone can learn from anywhere by this E-School-Site.</p>
                    <strong>Technology: HTML, CSS, JAVASCRIT, ES6,BOOTSTRAP, MATERIUL UI, REACT, FIREBASE, MONGODB, HERO KU </strong>
                    <br/>
                    <br/>
                    <a href="https://github.com/saymanbro/E-School-Site"><Button variant='contained' color='secondary'>GitHub</Button></a>
                    <a href="https://saymanbro.github.io/E-School-Site/school.html"><Button variant='contained' color='secondary'>Live Site Link</Button></a>
                 </div>
                 <div className="col-md-6">
                  <img src={eSchool} className="w-100" alt=""/>
                </div>      
              </div>            
            </div>
        </section>
    );
};

export default Projects;