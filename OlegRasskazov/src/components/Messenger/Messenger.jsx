import React from 'react';

import {MessageForm} from "components/MessageForm";
import {MessageList} from "components/MessageList";
import {ChatList} from "components/ChatList";
import {Header} from "components/Header";
import {Footer} from "../Footer";
import 'components/Layout/Layout.scss';
import './Messenger.scss';

export class Messenger extends React.Component {

	render() {
		const {chatList, messages, sendMessage, addChat, handleRedirect} = this.props;

		return (
				<div className="layout">
					<Header/>
					<div className="messenger">
						<ChatList chatList={chatList} addChat={addChat} handleRedirect={handleRedirect}/>
						<div className='messenger-messages'>
							{messages ? <MessageList messages={messages}/> : 'Выберите чат'}
							{messages && <MessageForm onSend={sendMessage}/>}
						</div>
					</div>
					<Footer/>
				</div>
		);
	}
}