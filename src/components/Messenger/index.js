import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
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
export default class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{ name: "Messenger Bot", id: "0" }, { name: "John Reaper", id: "1" },
      { name: "Jack Flowers", id: "2" }],
      current: 0, current_messages: this.getMessages(0)
    };
  }
  getMessages(i) {
    // dummy
    if (i === 1) {
      return [
        {
          id: 1,
          author: 'apple',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 2,
          author: 'orange',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 3,
          author: 'orange',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 4,
          author: 'apple',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 5,
          author: 'apple',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 6,
          author: 'apple',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 7,
          author: 'orange',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 8,
          author: 'orange',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 9,
          author: 'apple',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 10,
          author: 'orange',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
      ];
    } else if (i === 0) {
      return [{
        id: 1,
        author: 'Bot',
        message: 'Hello Guest! How can i help you ,type /help for more info \n  .',
        timestamp: new Date().getTime()
      },];
    } else {
      return [{
        id: 1,
        author: 'apple',
        message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
        timestamp: new Date().getTime()
      }, {
        id: 2,
        author: 'orange',
        message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
        timestamp: new Date().getTime()
      },];
    }

  }
  getConntacts(i) {
    // dummy
    return this.state.contacts;
  }
  handleClickConversation(i) {
    console.log(i);

    this.setState({ contacts: this.getConntacts(i), current: i, current_messages: this.getMessages(i) })
  }
  render() {

    return (
      <div className="messenger">

        <div className="scrollable sidebar">
          <ConversationList current={this.state.current} onclick={this.handleClickConversation.bind(this)} />
        </div>

        <div className="scrollable content">
          <MessageList current={this.state.current} messages={this.state.current_messages} />
        </div>
      </div>
    );
  }
}
