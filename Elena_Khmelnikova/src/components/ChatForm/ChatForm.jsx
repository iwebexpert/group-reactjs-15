import React from 'react';

import { TextField, Fab } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import './ChatForm.less';

export class ChatForm extends React.Component {
    state = {
        newChatName: '',
    };

    handleInputChange = (event) => {
        this.setState({
            newChatName: event.target.value,
        });
    };

    handleEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleChatNameSend();
        }
    };

    handleChatNameSend = () => {
        const { onSend } = this.props;
        const { newChatName } = this.state;

        if (typeof(onSend) === 'function' && newChatName) {
            onSend(newChatName);
        }

        this.setState({ newChatName: '' });
    };

    render() {
        const { newChatName } = this.state;

        return (
            <div className={'chat-form'}>
                <TextField
                    variant='filled'
                    size='small'
                    label='Новое имя чата'
                    value={newChatName}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleEnterDown}
                    style={{marginRight: '2px', flex: 1}}
                />
                <Fab
                    variant='extended'
                    color='primary'
                    onClick={this.handleChatNameSend}
                >
                    <Send/>
                </Fab>
            </div>
        );
    }
}
