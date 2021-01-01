import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { Grid } from "@material-ui/core";
// import Hidden from "@material-ui/core/Hidden";
// import { render } from 'react-dom';
// for api calls ;
// componentDidMount() {
//     fetchSomething();
//   }
export default class Messenger extends React.Component{
    constructor(props){
        super(props);
        this.state={contacts:[{name:"John Reaper",lastMsg:"long msg1"},{name:"Jack Flowers",lastMsg:"long msg2"}],current:0,};
    }
    handleClickConversation(i){
        if (i!== this.state.current){
            this.setState({contacts:this.state.contacts,current:i})
        }
    }
    render() {
        
        return (
            <div className="messenger">

        <div className="scrollable sidebar">
          <ConversationList current={this.state.current} onclick= {(i)=>this.handleClickConversation(i)}/>
        </div>

        <div className="scrollable content">
          <MessageList current={this.state.current} />
        </div>
      </div>
        );
    }
}

// const useStyles = makeStyles({
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },
// });

// export function TemporaryDrawer(props) {
//     const classes = useStyles();
//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });

//     const menu = props.menu;

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor) => (
//         <div
//             className={clsx(classes.list, {
//                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//             })}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );

//     return (
//         <div>
//             <Button onClick={toggleDrawer("left", true)} variant={"outlined"}>Conversations</Button>
//             <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
//                 <ConversationList />
//             </Drawer>
//         </div>
//     );
// }
