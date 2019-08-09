import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Lis = (props) =>{
    return(
        <div>
        <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
      </div>
    )
}

export default function FolderList() {
  const classes = useStyles();


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          SELECT LANGUAGE
        </ListSubheader>
      }
      className={classes.root}
    >
      
      <Lis name="C"/>
      <Lis name="C++"/>
      <Lis name="PYTHON"/>
      <Lis name="JAVA"/>
      <Lis name="JAVASCRIPT"/>

    </List>
  );
}