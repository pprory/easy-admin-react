import React, { FC } from "react";
import {
    Box,
    ListSubheader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {
    Send,
    Drafts,
    Inbox,
    ExpandLess,
    ExpandMore,
    StarBorder,
} from "@material-ui/icons";
import Styles from "./index.module.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const Sidebar: FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return <Box className={Styles.sidebar}>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
            className={classes.root}
        >
            <Link to="/">
                <ListItem button>
                    <ListItemIcon>
                        <Send />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItem>
            </Link>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </List>
            </Collapse>
            <Link to="/Test">
                <ListItem button>
                    <ListItemIcon>
                        <Drafts />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </Link>
        </List>
    </Box>
}

export default Sidebar

