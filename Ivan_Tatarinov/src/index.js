import React from 'react';
import ReactDom from 'react-dom';

const messages = ['1', '2'];

const Button = () => {
  const handleClick = () => {
    messages.push('норм');
    ReactDom.render(
      <React.Fragment>
        <Button/>
        <MessageList messages={messages}/>
      </React.Fragment>,
      document.getElementById('root'),
    );
  };
  return <button onClick={handleClick}>Press</button>
};

const MessageList = (props) => {
  return props.messages.map((item, index) => <Message text={item} key={index}/>)
};

const Message = (props) => {
  return <div>Сообщение: {props.text}</div>;
};

ReactDom.render(
  <React.Fragment>
    <Button/>
    <MessageList messages={messages}/>
  </React.Fragment>,
  document.getElementById('root'),
);