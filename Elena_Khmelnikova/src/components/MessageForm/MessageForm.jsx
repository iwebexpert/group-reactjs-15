import React from 'react';

import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import './MessageForm.less';

export class MessageForm extends React.Component {
    state = {
        text: '',
        author: '',
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    };

    handleEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    };

    handleMessageSend = () => {
        const { onSend } = this.props;
        const { author, text } = this.state;

        if (typeof(onSend) === 'function' && text && author) {
            onSend(this.state);
        }

        this.setState({ text: '' });
    };

    render() {
        const { author, text } = this.state;

        return (
            <div className={'message-form'}>
                <TextField
                    variant='filled'
                    size='small'
                    label='Имя'
                    name='author'
                    value={author}
                    onChange={this.handleInputChange}
                    style={{marginRight: '2px', flex: 1}}
                />
                <TextField
                    multiline
                    variant='filled'
                    size='small'
                    autoFocus
                    label='Сообщение'
                    name='text'
                    value={text}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleEnterDown}
                    style={{flex: 5}}
                />
                <Button
                    variant='contained'
                    color='primary'
                    endIcon={<Send/>}
                    onClick={this.handleMessageSend}
                >
                    Отправить
                </Button>
            </div>
        );
    }
}
