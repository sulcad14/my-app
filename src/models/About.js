import React from 'react';
import { Card, CardContent, CardHeader, Typography, makeStyles } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles((theme) => 
({
    main: 
    {
        float: 'left',
        width: '40%',
        minHeight: '300px',
        backgroundColor: 'white',
        marginLeft: '30%',
        marginTop: '50px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius: '6px'
    },
    contacts: 
    {
        marginTop: '10px',
        float: 'left'
    }
}));

const About = (props) => 
{
    const classes = useStyles();
    
    return <Card className={classes.main}>
        <CardHeader title="Kontakt" />
        <CardContent>
            <Typography variant="body2" component="p">
                Níže najdete všechny potřebné kontakty a informace.
            </Typography>
            <div className={classes.contacts}>
                <HomeWorkIcon /> Praha
            </div>
        </CardContent>
    </Card>;
}

export default About;