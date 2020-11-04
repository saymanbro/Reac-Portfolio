import React from 'react';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import './Contact.css'
import { Button } from '@material-ui/core';
import {FcCopyright} from 'react-icons/fc'
const Contact = () => {
    return (
        <section  className='contact-area'>
            <h1>Contact Me</h1>
            <div className="row contact">
                <div className="col-md-6">
                    <h4>Get in touch</h4>
                    <p>any time you can knock me. I will response soon</p>
                    <table>
                        <tr>
                            <td><AccountCircleSharpIcon /></td>
                            <td><strong>Name</strong> <br/> Al-Amin Sayman</td>
                        </tr>
                        <tr>
                            <td><RoomSharpIcon /></td>
                            <td> <strong>Address</strong> <br/>Laksam, Cumilla, Bangladesh</td>
                        </tr>
                        <tr>
                        <td><MailOutlineSharpIcon  /></td>
                        <td><strong>Email</strong> <br/>sayman7588@gmail.com</td>
                        </tr>
                    </table>
                </div>

                <div className="col-md-6">
                    <strong>Message Me</strong>
                 <div className="box">
                     
                 <input type="text" placeholder="Name" className="form-control w-40 mb-3 box-1"/>
                    
                    <input type="text" placeholder="Email" className="form-control w-40 mb-3"/> 
             
                 </div>
                <input type="text" placeholder="Subject" className="form-control mb-3 ml-1" />
             
                <input type="text" placeholder="Message" className="form-control h-5 mb-3 ml-1"/>
                  
                <Button variant='contained' color='secondary'>Send</Button>
                </div>
            </div>
            <strong style={{display:'block', padding:'18px',marginTop:'40px', backgroundColor:'black', color:'white'}}>Created by <span style={{color:'#55ff83'}}>Al-Amin Sayman</span> | <FcCopyright style={{fontSize:'22px'}}/> All rights reserved</strong>
        </section>
    );
};

export default Contact;