import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ChatForm.css';

export class ChatForm extends React.Component {
    state = {
        chats: {
            number: {
                name: '',
                messages: [
                    {
                        text: '',
                        author: '',
                    }
                ],
            },
        }
    };

    handleChatAdd = () => {
        const {onSend} = this.props;

        if (typeof (onSend) === 'function') {
            onSend(this.state);
        }
        this.setState({
            chats: {
                number: {
                    name: '',
                },
            }
        });
    };

    handleKeyUp = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleChatAdd();
        }
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        const quantity = this.props.chatsQuantity;

        this.setState({
            chats: {
                [quantity + 1]: {
                    [fieldName]: event.target.value,
                    messages: [
                        {
                            text: 'Test',
                            author: 'Konstantin',
                        }
                    ],
                }
            }
        });
    };

    render() {
        const {name} = this.state.chats;
        return (
            <div className='chatForm'>
                <TextField name="name" type="text" value={name}
                           onChange={this.handleInputChange} label="Enter chat name"
                           onKeyUp={this.handleKeyUp} autoFocus/>
                <Button variant="contained" color="primary"
                        onClick={this.handleChatAdd}>Add Chat</Button>
            </div>
        );
    }
}