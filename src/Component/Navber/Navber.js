import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'

import {
AppBar,
Toolbar,
ListItem,
Avatar,
Divider,
List,
Slider,
Typography,
ListItemIcon,
Box,
IconButton,
ListItemText,

} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail

} from '@material-ui/icons';
import avatar from '..//..//images/avatar.png';
//CSS styles

const useStyles = makeStyles(theme =>({
    menuSliderContainer: {
        width:250,
        background:'#511',
        height:'100%'
    },
    avatar: {
        display:'block',
        margin:'.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13)

    },
    listItem: {
        color:'tan'
    }
}));
const menuItems = [
    {
        listIcon: <Home/>,
        listText:'Home'
    },
    {
        listIcon: <AssignmentInd/>,
        listText:'Resume'
    },
    {
        listIcon: <Apps/>,
        listText:'Protfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText:'contact'
    },
    
]


const Navber = () => {
    const [state, setState] = useState({
        right:false
    })
    const toggleSlider = ( (slider, open) => () => {
        setState({...state,[slider]: open})
    });
    const classes = useStyles();
    const sideList = Slider => (
        <Box component='div' onClick={toggleSlider(Slider, false)} className={classes.menuSliderContainer}>
        <Avatar className={classes.avatar} src={avatar}></Avatar>
            <Divider/>
            <List>
                {menuItems.map((IsItem, key) =>(
                <ListItem button key ={key}>
                    <ListItemIcon className={classes.listItem}>{IsItem.listIcon} </ListItemIcon>

                   <ListItemText className={classes.listItem} primary={IsItem.listText}/>
                </ListItem>
                   ) )}
            </List>
    </Box>
    )
    return (
        <>
       
        <Box component='nav'>
            <AppBar position='static' style={{background:'#222'}}>

            <Toolbar>
                <IconButton onClick={toggleSlider('right', true)}>
                <ArrowBack style={{color:'tomato'}}></ArrowBack>
                </IconButton>
                <Typography variant='h5' style={{color:'#ff6e40'}}>
                    Protfolio
                </Typography>
                <MobilRightMenuSlider
                anchor='right'
                open= {state.right}
                onClose={toggleSlider('right',false)}
                >
                    {sideList('right')}
                </MobilRightMenuSlider>
            </Toolbar>
            </AppBar>
                
        </Box>
        </>
    );
};

export default Navber;