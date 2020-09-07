import React from 'react';
import Navber from '../Navber/Navber';
import Header from '../Header/Header';
import Particles from 'react-particles-js'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles ({
    particlesCanvas:{
        position:'absolute'
    }
})
const Home = () => {
    const classes = useStyles()
    return (
        <>
           <Navber></Navber>
           <Header></Header>
           <Particles 
           canvasClassName={classes.particlesCanvas}
           params={{
               particles: {
                   number: {
                       value:45,
                       density: {
                           enable:true,
                           value_area:900
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
           </>
    );
    
};

export default Home;