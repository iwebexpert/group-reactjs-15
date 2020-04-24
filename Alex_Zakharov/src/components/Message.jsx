import React from 'react';

export class Message extends React.Component {
    render() {
        const { index, message } = this.props;
        console.log(index);
        return <li key={index}>
            <b>{message.author}</b>: {message.text}
        </li>
    }
}