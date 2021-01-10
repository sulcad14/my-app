import React, { useState, useEffect } from 'react';
import { 
    Button, IconButton, ListItemIcon, ListItemText, makeStyles, 
    Drawer, List, ListItem, Menu, MenuItem
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => 
({
    menuButton: 
    {
      marginRight: theme.spacing(2),
      color: 'white'
    },
    drawer: 
    {
        width: '250px',
        overflow: 'auto',
        flexShrink: 0,    
    }
}));

const CustomMenu = () => 
{
    const [expanded, setExpand] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const classes = useStyles();

    const handleExpand = () => 
    {
        setExpand(!expanded);
    }

    const handleExpandSubMenu = () => 
    {
        setSubMenu(!subMenu);
    }

    useEffect(() => 
    {
        let mounted = true;

        if (expanded) 
        {
            if (mounted) setDrawer(true);
        }
        else 
        {
            if (mounted) setDrawer(false);
        }
        return () => { mounted = false }
    }, [expanded])

    return <React.Fragment>
        <Button className={classes.menuButton} onClick={handleExpand}><MenuIcon /></Button>
        {expanded ?
            <Drawer anchor="left" open={drawer} onClose={handleExpand}>
                <div className={classes.drawer}>
                    <List>
                        <ListItem button component={Link} to="/" onClick={handleExpand}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText color="primary" primary="Domovská stránka" />
                        </ListItem>
                        <ListItem button component={Link} to="/about" onClick={handleExpand}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText color="primary" primary="Kontakt" />
                        </ListItem>
                        <ListItem button component={Link} to="/skills" onClick={handleExpand}>
                            <ListItemIcon><CodeIcon /></ListItemIcon>
                            <ListItemText color="primary" primary="Dovednosti" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        :
            null
        }
    </React.Fragment>
}

export default CustomMenu
