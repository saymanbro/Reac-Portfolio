import React from 'react';
import './Services.css';
import {FaFileCode} from 'react-icons/fa'

const Services = () => {
    return (
        <section className='service-container'>
            <h1>My Services</h1> 
            <div className="services">
                <div className={{marginTop:'70px'}}>
                <FaFileCode style={{fontSize:'50px'}}/>
                <h3>Web Design  Development</h3>
                <strong>We hand over our products to the clients in a timely manner.We have not compromised on our product quality</strong>
                </div>
               
            </div>
        </section>
    );
};

export default Services;