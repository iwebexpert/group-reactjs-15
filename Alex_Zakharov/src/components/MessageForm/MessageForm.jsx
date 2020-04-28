import React from 'react';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

export class MessageForm extends React.Component {
    state = {
        author: '',
        text: '',
    };

    handleMessageSend = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
        }
        this.setState({ text: '' });
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleEnterDown = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            this.handleMessageSend();
        }
    };

    render() {
        const { author, text } = this.state;
        return <div>
            <TextField name="author" type="text" value={author} onChange={this.handleInputChange} label="Enter author" />
            <TextField name="text" onChange={this.handleInputChange} onKeyDown={this.handleEnterDown} autoFocus multiline label="Enter message" value={text} />
            <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon /></Fab>
        </div>
    }
}
