import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import bot_logo from "./BOT.png"; 

import './ConversationList.css';
// TODO Turn it into a class
export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

  const getConversations = () => {
    axios.get('https://randomuser.me/api/?results=2').then(response => {
      let newConversations = response.data.results.map((result, i) => {
        i=i+1
        let k= {
          id:i,
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: 'Hello world! This is a long message that needs to be truncated.'
        }
        return k;
      });
      let bot ={
        id:0,
        photo:bot_logo ,
        name: "Messenger BOT",
        text: 'Hello world! This is a long message that needs to be truncated.'
      }
      newConversations.unshift(bot);
      setConversations([...conversations, ...newConversations])
    });
  }

  return (
    <div className="conversation-list">
      <Toolbar
        title="Messenger"
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog" />
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />
      <ConversationSearch />
      {
        //ToDO add current 
        conversations.map(conversation =>
          <ConversationListItem
            key={conversation.name}
            id={conversation.id}
            data={conversation} onClick={props.onclick}
          />)
      }
    </div >
  );
}
