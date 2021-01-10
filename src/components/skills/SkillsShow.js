import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles((theme) => 
({
    accordion: 
    {
        borderStyle: 'solid',
        borderWidth: 'thin',
        marginTop: '10px',
        borderRadius: '5px'
    },
    detail: 
    {
        display: 'block'
    },
    title: 
    {
        fontWeight: 'bold'
    },
    text: 
    {
        fontSize: '13px',
        textAlign: 'justify'
    },
    rating: 
    {
        float: 'left',
        marginTop: '20px',
        display: 'inline-block'
    },
    ratingText: 
    {
        marginRight: '30%',
        fontWeight: 'bold'
    }
}));

const SkillsShow = () => 
{
    const classes = useStyles();

    return <div>
        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.title}>ReactJS</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
                <Typography className={classes.text}>
                    Mám rozsáhlé zkušenosti s Javascriptovou knihovnou ReactJS. Od roku 2018 se věnuji specificky této knihovně a nedám na ni dopustit.
                    ReactJS je vhodné front-endové rešení pro snažší i slotižejší webové aplikace. Pro rychlou a flexibilní webovou stránku, která má důraz na front-end není lepší řešení.
                    Více informací na: <a href="https://reactjs.org/">ReactJS</a>
                </Typography>
                <div className={classes.rating}>
                    <span className={classes.ratingText}>Dovednost:</span> 
                    <ReactStars className={classes.stars} count={5} size={30} value={5} edit={false} activeColor="primary" emptyIcon={<i className="far fa-star"></i>} />
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.title}>Material-UI</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
                <Typography className={classes.text}>
                    Ruku v ruce s vývojem na platformě ReactJS je knihovna Material-UI. Tato velmi užitečná knihovna poskytuje nespočet již hotových front-end komponent, které lze používat.
                    S knihovnou Material-UI mám také značné zkušenosti, jelikož ji používám vpodstatě od začátku své cesty s ReactJS.
                    Více informací na: <a href="https://material-ui.com/">Material-UI</a>
                </Typography>
                <div className={classes.rating}>
                    <span className={classes.ratingText}>Dovednost:</span> 
                    <ReactStars className={classes.stars} count={5} size={30} value={5} edit={false} activeColor="primary" emptyIcon={<i className="far fa-star"></i>} />
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.title}>React Admin</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
                <Typography className={classes.text}>
                    Mám rozsáhlé zkušenosti s ReactJS frameworkem React Admin. Tento framework je vhodný na webové aplikace typu B2B a na podobné aplikace používající obsáhlejší datovou strukturu.
                    Více informací na: <a href="https://marmelab.com/react-admin/">React Admin</a>
                </Typography>
                <div className={classes.rating}>
                    <span className={classes.ratingText}>Dovednost:</span> 
                    <ReactStars className={classes.stars} count={5} size={30} value={5} edit={false} activeColor="primary" emptyIcon={<i className="far fa-star"></i>} />
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.title}>PHP</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
                <Typography className={classes.text}>
                    Mám rozsáhlé zkušenosti se skriptovacím jazykem PHP (výhradně objektové PHP). PHP jsem se věnoval jako hlavní technologii od roku 2015 až do roku 2018, kdy jsem své soustředění přemístil na ReactJS.
                    V rámci PHP mám také zkušenosti s databázovými enginy, které se k PHP používají (např. MySQL).
                </Typography>
                <div className={classes.rating}>
                    <span className={classes.ratingText}>Dovednost:</span> 
                    <ReactStars className={classes.stars} count={5} size={30} value={4} edit={false} activeColor="primary" emptyIcon={<i className="far fa-star"></i>} />
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.title}>Xamarin</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
                <Typography className={classes.text}>
                   Jsem začátečník v programování na platformě Xamarin, která se používá k vývoji mobilních aplikací. Tato platforma běží na programovacím jazyku C# a značkovacím jazyku XAML.
                   Této technologii se věnuji od podzimu roku 2020
                </Typography>
                <div className={classes.rating}>
                    <span className={classes.ratingText}>Dovednost:</span> 
                    <ReactStars className={classes.stars} count={5} size={30} value={2} edit={false} activeColor="primary" emptyIcon={<i className="far fa-star"></i>} />
                </div>
            </AccordionDetails>
        </Accordion>
    </div>;
}

export default SkillsShow;