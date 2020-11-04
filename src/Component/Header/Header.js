import React from 'react';
import {Typography, Avatar, Box, Grid} from '@material-ui/core';
import avatar from '..//..//images/avatar.jpeg';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    avatar: {
        width:theme.spacing(18),
        height:theme.spacing(18),
        margin:theme.spacing(1)
    },
    title:{
        color:'tomato'
    },
    subtitle:{
        color:'tan',
        marginBottom:'3rem'
    },
    typedContainer:{
      position:'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%, -50%)',
      width:'100vw',
      textAlign:'center',
      zIndex:1 
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box  className={classes.typedContainer}>
            <Grid container justify='center'> 
            <Avatar className={classes.avatar} src={avatar } alt='sayman'/>
             </Grid>
           
            <Typography  className={classes.title} variant='h4'>
                <Typed strings={['MA Sayman']} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography  className={classes.subtitle} variant='h5'>
                <Typed
                 strings={['Web Design', 'Web Development','Full Stack']}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
            </Typography>

          
        </Box>
    );
};

export default Header;