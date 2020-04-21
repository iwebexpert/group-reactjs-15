import React from 'react';
import ReactDom from 'react-dom';

const elementH1 = <h1 className="react-hello 56565">Hello react!</h1>;

//Data
const messagesData = ['Hello', 'Hi', 'Привет'];
// TODO загнать сообщения в JSON объект и подсунуть его вебсерверу

const messagesDataJson = fetch('./messages.json')
		.then(res => res.json())
		.then(
				(result) => {
					console.log(result); //ссылка http://localhost:4000/messages.json выдает 404
					},
				(error) => {console.log(error);}
		);

//Функциональный компонент
// Группировка сообщений
const MessageList = (props) => {
	console.log(props);
	return props.messages.map((item, index) => <Message text={item} key={index} />);
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
		// TODO записывать сообщение в json-файл
		render();
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
			<div>
				<MessageList messages={messagesData}/>
				<Button/>
				<ButtonNewMessage/>
			</div>,
			document.getElementById('root'),
	)
};

render();