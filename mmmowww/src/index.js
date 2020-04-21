import React from 'react';
import ReactDom from 'react-dom';

//Вариант 1 2.18 ()Просто отсматреть
// const elementH1 = React.createElement(
//     'h1',
//     {className: 'react-hello react2'},
//     'Hello, React!'
// );

//Вариант 2 - JSX
const elementH1 = (<h1 className="react-hello react2"> Hello, React </h1>);
////const Message = (props) => <div>
////{props.message}:{props.test2}
///</div>;
/// Data

const messageDate = ["Surprise", "(censured)!"];


const MessageList = (props) =>{
return props.messages.map((item,index) => <Message text = {item} key = {index} />);
};
const Message = (props) =>{
	console.log(props);
	return <div>
Черкаш : {props.text}
	</div>
};
/*
const Button = (props) => {
    //Вспомогательный код
    const handleClick = (event) => {
        event.preventDefault();
        console.log('Click on button!');
    };

    return <div>
        Button: <button onClick={handleClick}>Test button</button>
    </div>
};
*/
ReactDom.render(
//elementH1,
//<Message message = "My litel test" test2 = {5}/>,
<div>
<MessageList messages = {messageDate}/>,
<Button />,
</div>,
document.getElementById('root'),
)