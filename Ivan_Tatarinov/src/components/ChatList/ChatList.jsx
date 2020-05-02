import React from 'react';

import List from '@material-ui/core/List';
import './ChatList.scss';
import {Link} from "react-router-dom";

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
        {chats.map((item, index) => <Link name={item.name} key={index}/>)}
      </List>
    );
  }
}