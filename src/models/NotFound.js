import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => 
({
    main: 
    {
        marginTop: '100px'
    },
    text: 
    {
        fontSize: '40px',
        fontWeight: 'bold'
    }
}));


const NotFound = () => 
{
    const classes = useStyles();

    return <div className={classes.main}>
        <Typography variant="body2" color="textSecondary" component="h2" className={classes.text}>
            Oops...zadali jste neplatnou URL adresu (404).
        </Typography>
    </div>;
}

export default NotFound;