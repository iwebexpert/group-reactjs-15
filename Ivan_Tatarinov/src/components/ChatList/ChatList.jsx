import React from 'react';

import {Chat} from "components/Chat";
import List from '@material-ui/core/List';
import './ChatList.scss';

export class ChatList extends React.Component {
  state = {
    chats: [
      {name: '123'},
      {name: 'sdfsdf'},
      {name: 'sfsdg'},
      {name: 'sgfdgfd'},
      {name: 'bcvbcvb'},
    ],
  };

  render() {
    const {chats} = this.state;
    return (
      <List>
        {chats.map((item, index) => <Chat name={item.name} key={index}/>)}
      </List>
    );
  }
}