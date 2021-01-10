import React from 'react';
import { makeStyles, Card, CardHeader, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => 
({
    main: 
    {
        float: 'left',
        width: '50%',
        minHeight: '300px',
        backgroundColor: 'white',
        marginLeft: '25%',
        marginTop: '50px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius: '6px'
    },
    actions: 
    {
        display: 'block',
        marginTop: '20px'
    }
}));

const CustomDashboard = () => 
{
    const classes = useStyles();

    const socialClick = (social) => 
    {
        switch (social) 
        {
            case "fb": window.location.replace("https://www.facebook.com/"); break;
            case "git": window.location.replace("https://github.com/sulcad14?tab=repositories"); break;
            case "insta": window.location.replace("https://www.instagram.com/?hl=cs"); break;
            case "twitter": window.location.replace("https://twitter.com/?lang=cs"); break;
        }
    }

    const socials = ["fb", "git", "insta", "twitter"];

    return <Card className={classes.main}>
        <CardHeader title="Vítejte!" />
        <CardContent>
            <Typography variant="body2" component="p">
                Toto jsou mé osobní stránky, kde najdete vše potřebné informace o mně a mé práci. V menu můžete najít reference na mé předešlé projekty, mé dovednosti a vzdělaní, 
                životopis a další užitečné informace o mně. Níže máte také k dispozici odkazy na sociální sítě a GIT repozitáře.
            </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
            <Button onClick={() => socialClick(socials[0])} color="primary"><FacebookIcon /></Button>
            <Button onClick={() => socialClick(socials[1])} color="primary"><GitHubIcon /></Button>
            <Button onClick={() => socialClick(socials[2])} color="primary"><InstagramIcon /></Button>
            <Button onClick={() => socialClick(socials[3])} color="primary"><TwitterIcon /></Button>
        </CardActions>
    </Card>;

}

export default (CustomDashboard);