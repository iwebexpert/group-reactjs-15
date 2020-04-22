import React from 'react';

export class Message extends React.Component {

  render() {
    const {message} = this.props;
    return (
      <li><b>{message.author}:</b> {message.text}</li>
    );
  }
}