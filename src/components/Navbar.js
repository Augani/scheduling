import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar:{
      background: 'linear-gradient(45deg, #FE2B9D 30%, #FF8E64 90%)',
      color: '#fff',
      height: '100%'
  }
}));
export default function Navbar() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static"  >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={`${classes.title} homeName`}>
           <Link to="/"> Classic braids</Link>
          </Typography>
          <Button className="BookingMenu" color="inherit">
          <Link to="/check">Check Booking</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
