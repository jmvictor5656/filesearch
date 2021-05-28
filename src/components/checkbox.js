import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import {switchOff, switchOn} from '../store/actions'
import {connect} from 'react-redux';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function SwitchListSecondary(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['content']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      props.switchOn()
    } else {
      newChecked.splice(currentIndex, 1);
      props.switchOff()
    }

    setChecked(newChecked);
  };

  return (
    <List subheader={<ListSubheader>Search Settings</ListSubheader>} className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText id="switch-list-label-content" primary="Content Search" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle('content')}
            checked={checked.indexOf('content') !== -1}
            inputProps={{ 'aria-labelledby': 'switch-list-label-content' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}


const MapStateToProps = (state) => {
  return {
  switch: state.switch
};
};
const MapDispatchToProps = (dispatch) => {
return {
  switchOff: () => dispatch(switchOff),
  switchOn: () => dispatch(switchOn)
}
};
export default connect(MapStateToProps, MapDispatchToProps)(SwitchListSecondary);
