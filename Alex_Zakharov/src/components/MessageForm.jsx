import React from 'react';

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

    render() {
        const { author, text } = this.state;
        return <div>
            <div>
                <label>Author: </label><br />
                <input name="author"
                    type="text"
                    placeholder="Enter author name"
                    value={author}
                    onChange={this.handleInputChange}
                />
            </div>
            <div>
                <label>Message: </label><br />
                <textarea name="text"
                    placeholder="Enter message"
                    rows="5"
                    cols="80"
                    value={text}
                    onChange={this.handleInputChange}
                />
            </div>
            <div>
                <button onClick={this.handleMessageSend}>
                    Send
                    </button>
            </div>
        </div>
    }
}
