import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
    linkBrand: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    drawerContainer: {
        width: 256,
    }
}));

export default function Navigation(props) {
    const classes = useStyles();

    const content = {
        'brand': { image: 'mui-assets/img/logo-pied-piper-white.png', width: 120 },
        'link1': 'Features',
        'link2': 'Enterprise',
        'link3': 'Support',
        'link4': 'ICO',
        ...props.content
    };

    let brand = content['brand'].text || '';
    if (content['brand'].image) {
        brand = <img src={content['brand'].image} alt="" width={content['brand'].width} />;
    }

    const [state, setState] = React.useState({ open: false });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, open });
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
                    {brand}
                </Link>
            </Toolbar>
            <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button key={content['link1']}>
                            <ListItemIcon>
                                <AppsIcon />
                            </ListItemIcon>
                            <ListItemText primary={content['link1']} />
                        </ListItem>
                        <ListItem button key={content['link2']}>
                            <ListItemIcon>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary={content['link2']} />
                        </ListItem>
                        <ListItem button key={content['link3']}>
                            <ListItemIcon>
                                <LiveHelpIcon />
                            </ListItemIcon>
                            <ListItemText primary={content['link3']} />
                        </ListItem>
                        <ListItem button key={content['link4']}>
                            <ListItemIcon>
                                <AttachMoneyIcon />
                            </ListItemIcon>
                            <ListItemText primary={content['link4']} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </AppBar>
    );
}