import React, {useState} from 'react';
import ReactDom from 'react-dom';

// import App from './components/App.jsx';
// import {App} from './components/App.jsx';
// import {App} from './components/App';
import {App} from 'components/App';
import {App2} from 'components/App2';
import {Messenger} from "components/Messenger";

function Chat() {

    const [messages, addMessage] = useState(['Hello', 'Hi', 'Привет!']);

    const Message = (props) => {
        return <div>Сообщение: {props.text}
        </div>
    };

    const MessageList = ({messages}) => {
        return messages.map((item, index) => <Message text={item} key={index}/>);
    };

    const Button = () => {
        const handleClick = (event) => {
            event.preventDefault();
            let tmp = messages.slice();
            tmp.push('Нормально');
            addMessage(messages => tmp)
            console.log(tmp);
        };
        return <div>
            Button: <button onClick={handleClick}>add message</button>
        </div>
    };

    return (
        <div>
            <MessageList messages={messages}/>
            <Button/>
        </div>
    );
}

ReactDom.render(
    // <Chat/>,
    // <App/>,
    // <App2/>,
    <Messenger/>,
    document.getElementById('root'),
);