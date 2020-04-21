import React from 'react';
import ReactDom from 'react-dom';

// Вариант 1
// const elementH1 = React.createElement(
//     'h1',
//     {className: 'react-hello react2'},
//     'Hello, React!'
// );

// Вариант 2 - JSX
const elementH1 = (<h1 className="react-hello react2">Hello, React!</h1>);

// Функциональный компонент
// const Message = (props) => <div>
//     {props.message}: {props.test2}
//     </div>;
const Message = (props) => {
    console.log(props);
    // return <div>{props.message}: {props.test2}
    return <div>Сообщение: {props.text}
    </div>
};

// Data
const messagesData = ['Hello', 'Hi', 'Привет!'];

// Функциональный компонент
// Группировка сообщений
// const MessageList = (props) => {
//     return props.messages.map((item, index) => <Message text={item} key={index}/>);
// };
const MessageList = ({messages}) => {
    return messages.map((item, index) => <Message text={item} key={index}/>);
};

// Button
const Button = () => {
    // Вспомогательный код
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click on button!');
    };
    return <div>
        Button: <button onClick={handleClick}>Test button</button>
    </div>
};

ReactDom.render(
    // elementH1,
    // <Message message="Test message" test2={5}/>,
    // <MessageList messages={messagesData}/>,
    <div>
        <MessageList messages={messagesData}/>
        <Button/>
    </div>,
    document.getElementById('root'),
);