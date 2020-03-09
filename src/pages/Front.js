import React from 'react'
import ReactPlayer from 'react-player'
import Back from '../videos/back.mp4';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {OpenDrawer, CloseDrawer} from '../actions';
import { SocialIcon } from 'react-social-icons';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';


const useStyles = makeStyles({
    list: {
      width: 250,
      background: 'transparent'
    },
    fullList: {
      width: 'auto',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginBottom: '20px'
      },
  });
function Front(props) {
   console.log(props)
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
    });

   
   
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        props.CloseDrawer();
        setState({ ...state, [side]: open });
      };

      const renderIcon = (index)=>{
          switch(index){
              case 0:
                  return <EventAvailableIcon/>;
              case 1:
                  return <AttachMoneyIcon/>;
              case 2:
                  return <ContactPhoneIcon/>;
              default:
                  return <EventAvailableIcon/>            
          }
      }

      const sideList = side => (
        <div
          className={`${classes.list} `}
          role="presentation"
          onClick={()=>toggleDrawer(side, false)}
          onKeyDown={()=>toggleDrawer(side, false)}
        >
        <Typography variant="h4" className={`logo`}>
            Classic braids
          </Typography>
          <List>
            {['Book An Appointment', 'Pricing', 'Contact Us'].map((text, index) => (
              <ListItem className="sideList" button key={text}>
                <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </div>
      );
    
    
    
    return (
        
        <div className="FrontMain">
        <Drawer className="sideBar" open={props.state.drawer} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
       
           <div className="myVideo">
           <ReactPlayer className="videoProp" loop={true} volume={0} muted url={Back} playing />
           <ReactPlayer className="videoProp" loop={true} volume={0} muted url={Back} playing />
           <ReactPlayer className="videoProp" loop={true} volume={0} muted  url={Back} playing />
           <ReactPlayer className="videoProp" loop={true} volume={0} muted  url={Back} playing />
           </div>
           <div className="FrontCover">
           <Container maxWidth="sm" className="HeroHolder">
             <Typography variant="h2" className="hero">
            Welcome to Classic braids
            
             </Typography>
             <Button className={classes.root}>Book Us Now</Button>
            <Button className={classes.root}>View Styles</Button>
            </Container>
           </div>
          
        </div>
    )
}





const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
    OpenDrawer,
    CloseDrawer
}
export default connect(mapStateToProps, mapDispatchToProps)(Front)

