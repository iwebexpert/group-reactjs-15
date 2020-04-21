import React from 'react';
import ReactDom from 'react-dom';

const elementH1 = React.createElement(
    'h1',
    {className: 'react-hello'},
    'Hello, React!'
);

const messagesData = ['Mes1', 'Mes2', 'Mes3'];

const MessageList = ({messages}) => {
    return messages.map((item, index) => <Message text={item} key={index} />);
};

const Button = () =>{
    const handleClick = (event) => {
        event.preventDefault();
        messagesData.push('New message');
        Render();
        console.log(messagesData);
    };
    return <div>
        Button: <button onClick={handleClick}>Send</button>
    </div>
};

const Message = (props) => {
    console.log(props);
    return <div>Сообщение:{props.text}</div>
};

const Render = () => {
    ReactDom.render(
        <div>
            <MessageList messages={messagesData}/>
            <Button/>
        </div>,
        document.getElementById('root'),
    );
}

new Render();