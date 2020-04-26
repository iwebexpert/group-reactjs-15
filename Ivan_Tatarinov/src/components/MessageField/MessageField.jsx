import React from 'react';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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

  handleEnterDown = (e) => {
    if ((e.key === 'Enter') && (e.ctrlKey === true)) {
      this.handleMessageSend();
    }
  };

  render() {
    const {author, text} = this.state;
    return (
      <div>
        <TextField name="author" type="text" value={author} onChange={this.handleInputChange} label="Enter author"/>
        <TextField name="text" onChange={this.handleInputChange} onKeyDown={this.handleEnterDown} autoFocus multiline
                   label="Enter message" value={text}/>
        <Fab type='submit' color='primary' onClick={this.handleMessageSend}><SendIcon/></Fab>
      </div>
    );
  }
}