import React from 'react';

export class Message extends React.Component {
    state = {};

    render() {
        const {messages} = this.props;
        return (
            messages.map((message, index) =>
                <li key={index}><b>{message.author}:</b> {message.text}</li>)
        );
    }
}