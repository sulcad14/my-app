import React from 'react';
import { makeStyles, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { SkillsShow } from '../components';

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
    skills: 
    {
        marginTop: '40px'
    },
    text: 
    {
        fontSize: '14px'
    }
}));

const Skills = () => 
{
    const classes = useStyles();

    return <Card className={classes.main}>
        <CardHeader title="Dovednosti" />
        <CardContent>
            <Typography variant="body2" component="p" className={classes.text}>
                Níže můžete vidět mé dovednosti v různých programovacích a skriptovacích jazycích.
            </Typography>
            <div className={classes.skills}>
                <SkillsShow />
            </div>
        </CardContent>
    </Card>;
}

export default Skills;