import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Menu } from '../';

const useStyles = makeStyles((theme) => 
({
    root: 
    {
      flexGrow: 1,
    },
    menuButton: 
    {
      marginRight: theme.spacing(2),
    },
}));

const CustomAppBar = () => 
{
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Menu />
                    <Button component={Link} to="/" color="secondary"><HomeIcon /></Button>
                    <Typography variant="h6" noWrap>Adam Šulc - osobní web</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default (CustomAppBar);