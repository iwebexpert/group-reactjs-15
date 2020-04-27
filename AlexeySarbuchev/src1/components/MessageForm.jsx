import React from 'react';

export class MessageForm extends React.Component {
    state = {
        author: '',
        text: '',
    };

    handleMessageSend = () => {
        const {onSend} = this.props;

        if(typeof(onSend) === 'function'){
            onSend(this.state);
        }
        this.setState({text: ''});

    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });

    };

    render(){
        const {author, text} = this.state;
        return (
            <div>
                <input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="Enter author" />
                <textarea name="text" onChange={this.handleInputChange} placeholder="Enter message" value={text} />
                <button onClick={this.handleMessageSend}>Send message</button>
            </div>
        );
    }
}