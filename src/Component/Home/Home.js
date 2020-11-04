import React from 'react';
import Navbar from '../Navber/Navber';
import Header from '../Header/Header';
import Particles from 'react-particles-js';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles ({
    particlesCanvas:{
        position:'absolute'
    }
})
const Home = () => {
    const classes = useStyles()
    return (
        
        <div className='home-container'>
           <Navbar></Navbar>
           <Header></Header>
           <Particles 
           canvas ClassName={classes.particlesCanvas}
           params={{
               particles: {
                   number: {
                       value:45,
                       density: {
                           enable:true,
                           value_area:800
                       }
                   },
                   shape:{
                       type:'star',
                       stroke: {
                           width:1,
                           color:'tomato'
                       }
                   },
                   size:{
                       value:8,
                       random: true,
                       anim: {
                           enable:true,
                           speed:10,
                           size_min:0.1,
                           sync:true
                       }
                   }
               }
           }}
          
           />
           
          
           </div>
    
);    
};

export default Home;