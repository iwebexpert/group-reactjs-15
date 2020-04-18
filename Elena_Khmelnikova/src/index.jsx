import React from 'react';
import ReactDom from 'react-dom';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: props.messages,
        };
    }

    handleClick(event) {
        event.preventDefault();

        this.setState((prevState) => ({
            messages: prevState.messages.concat('Fine'),
        }));
    };

    render() {
        const { messages } = this.state;
        return (
            <div>
                {messages.map((message, index) => <Message message={message} key={index}/>)}
                <button onClick={this.handleClick.bind(this)}>Test button</button>
            </div>
        )
    }
}

const Message = ({ message }) => <p>Сообщение: {message}</p>;

const messagesData = ['hi', 'hello'];

ReactDom.render(
    <div>
        <h1 className={"react"}>Hello, react!</h1>
        <Messages messages={messagesData}/>
    </div>,
    document.getElementById('root'),
);
