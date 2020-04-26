import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import './Chat.scss'

export class Chat extends React.Component {

  render() {
    const {name} = this.props;
    return (
      <ListItem className={'chat'}>{name}</ListItem>
    );
  }
}