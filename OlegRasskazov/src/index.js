import React from 'react';
import ReactDom from 'react-dom';

// import {App} from 'components/App';
// import {App2} from 'components/App2';
import {Layout} from 'Components/Layout';

const elementH1 = <h1 className="react-hello 56565">Hello react!</h1>;

//Data
const messagesData = ['Hello', 'Hi', 'Привет'];

//Функциональный компонент
// Группировка сообщений
const MessageList = (items) => {
	return items.messages.map((item, index) => <Message text={item} key={index} />);
};

//Button
const Button = () => {
	const handleClick = (event) => {
		event.preventDefault();
		console.log('Клик по кнопке');
	};

	return <div>
		Button: <button onClick={handleClick}>Test button</button>
	</div>
};

//Button new message
const ButtonNewMessage = () => {
	const handleClick = (event) => {
		event.preventDefault();
		messagesData.push('Новое сообщение');
		render(); // рендерим
	};

	return <div>
		Button: <button onClick={handleClick}>Новое сообщение</button>
	</div>
};

// Выводит 1 сообщение
const Message = (props) => {
	return <div>Сообщение: {props.text}</div>
};


const render = () => {
	ReactDom.render(
			<Layout/>,
			document.getElementById('root'),
	)
};

render();