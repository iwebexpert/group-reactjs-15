import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ChatForm.css';

export class ChatForm extends React.Component {
    state = {
        name: '',
    };

    handleAddChat = () => {
        const {onSend} = this.props;

        if (typeof (onSend) === 'function') {
            onSend(this.state);
        }
        this.setState({name: ''});
    };

    handleKeyUp = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleAddChat();
        }
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    };

    render() {
        const {name} = this.state;
        return (
            <div className='chatForm'>
                <TextField name="name" type="text" value={name}
                           onChange={this.handleInputChange} label="Enter chat name"
                           onKeyUp={this.handleKeyUp} autoFocus/>
                <Button variant="contained" color="primary"
                        onClick={this.handleAddChat}>Add Chat</Button>
            </div>
        );
    }
}