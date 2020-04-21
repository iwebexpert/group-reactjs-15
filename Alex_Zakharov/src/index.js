import React from 'react';
import ReactDom from 'react-dom';

const messagesData = [];

const MessageList = (props) => {
    return props.messages.map((item, index) => <Message text={item} key={index} />);
};

const Button = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click on button!');
        messagesData.push('New message');
        render();
    };

    return <div>
        <button onClick={handleClick}>New</button>
    </div>
};

const Message = (props) => <div>
    Message: {props.text}
</div>;

const render = () => {
    ReactDom.render(
        <div>
            <MessageList messages={messagesData} />
            <Button />
        </div>,
        document.getElementById('root'),
    );
};

render();