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
        const {onSend} = this.props;

        if (typeof (onSend) === 'function') {
            onSend(this.state);
        }
        this.setState({text: ''});
    };

    handleKeyUp = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    };

    render() {
        const {author, text} = this.state;
        return (
            // <div>
            //     <input name="author" type="text" value={author} onChange={this.handleInputChange}
            //            placeholder="Enter author"/>
            //     <textarea name="text" onChange={this.handleInputChange} placeholder="Enter message" value={text}/>
            //     <button onClick={this.handleMessageSend}>Send message</button>
            // </div>
            <div>
                <TextField name="author" type="text" value={author}
                           onChange={this.handleInputChange} label="Enter author"/>
                <TextField name="text" onChange={this.handleInputChange} onKeyUp={this.handleKeyUp}
                           autoFocus multiline label="Enter message" value={text}/>
                <Fab variant="round" color="primary"
                     onClick={this.handleMessageSend}><SendIcon/></Fab>
            </div>
        );
    }
}