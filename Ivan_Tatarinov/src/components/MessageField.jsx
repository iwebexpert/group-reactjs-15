import React from 'react';

export class MessageField extends React.Component {
  state = {
    text: '',
    author: '',
  };

  handleMessageSend = () => {
    const {onSend} = this.props;

    if (typeof(onSend) === 'function') {
      onSend(this.state);
    }

    this.setState({text: ''});
  };

  handleInputChange = (e) => {
    const fieldName = e.target.name;

    this.setState({
      [fieldName]: e.target.value,
    });

  };

  render() {
    const {author, text} = this.state;
    return (
      <div>
        <input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="Enter author"/>
        <textarea name="text" onChange={this.handleInputChange} placeholder="Enter message" value={text}/>
        <button onClick={this.handleMessageSend}>Send message</button>
      </div>
    );
  }
}