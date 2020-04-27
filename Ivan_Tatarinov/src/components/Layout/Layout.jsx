import React from 'react';

import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import {ChatList} from "components/ChatList";
import './Layout.scss'

export class Layout extends React.Component {

  render() {
    return (
      <div className={'layout'}>
        <Header/>
        <div className={'container'}>
          <ChatList/>
          <Messenger/>
        </div>
      </div>
    );
  }
}